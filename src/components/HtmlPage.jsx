import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const fileToRoute = {
  "index.html": "/",
  "about.html": "/about",
  "activity.html": "/activity",
  "event.html": "/woman",
  "woman.html": "/woman",
  "sermon.html": "/youth",
  "youth.html": "/youth",
  "blog.html": "/blog",
  "team.html": "/gallery",
  "gallery.html": "/gallery",
  "testimonial.html": "/testimonial",
  "contact.html": "/contact",
  "404.html": "/404",
};

function extractMainContent(htmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");
  const body = doc.body;

  body.querySelector("#spinner")?.remove();
  body.querySelector(".container-fluid.fixed-top")?.remove();
  body.querySelectorAll(".container-fluid.footer, .footer, footer").forEach((footerNode) => footerNode.remove());
  body.querySelector(".back-to-top")?.remove();
  body.querySelectorAll("script").forEach((script) => script.remove());

  body.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) {
      return;
    }
    if (fileToRoute[href]) {
      anchor.setAttribute("href", fileToRoute[href]);
    }
  });

  return body.innerHTML;
}

const HALIFAX_MAWAQIT_WIDGET_URL =
  "https://mawaqit.net/en/w/ummah-masjid-and-community-centre-halifax?showOnly5PrayerTimes=0";

const PRAYER_KEYS = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
const ENCODED_MAWAQIT_URL = encodeURIComponent(HALIFAX_MAWAQIT_WIDGET_URL);
const MAWAQIT_PROXY_URLS = [
  `https://api.codetabs.com/v1/proxy/?quest=${ENCODED_MAWAQIT_URL}`,
  `https://api.allorigins.win/raw?url=${ENCODED_MAWAQIT_URL}`,
];

function extractConfData(widgetHtml) {
  const confDataStart = widgetHtml.indexOf("var confData");
  if (confDataStart < 0) {
    throw new Error("Could not find Mawaqit confData.");
  }

  const jsonStart = widgetHtml.indexOf("{", confDataStart);
  if (jsonStart < 0) {
    throw new Error("Could not locate confData JSON start.");
  }

  let depth = 0;
  let inString = false;
  let isEscaped = false;
  let jsonEnd = -1;

  for (let i = jsonStart; i < widgetHtml.length; i += 1) {
    const char = widgetHtml[i];

    if (inString) {
      if (isEscaped) {
        isEscaped = false;
      } else if (char === "\\") {
        isEscaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        jsonEnd = i;
        break;
      }
    }
  }

  if (jsonEnd < 0) {
    throw new Error("Could not locate confData JSON end.");
  }

  return JSON.parse(widgetHtml.slice(jsonStart, jsonEnd + 1));
}

function getDatePartsInTimezone(timeZone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const values = Object.fromEntries(
    formatter
      .formatToParts(new Date())
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  return {
    monthIndex: Number(values.month) - 1,
    dayOfMonth: Number(values.day),
  };
}

function getPrayerDataForToday(confData) {
  const timeZone = confData.timezone || "America/Halifax";
  const { monthIndex, dayOfMonth } = getDatePartsInTimezone(timeZone);
  const dayKey = String(dayOfMonth);

  const startFromCalendar = confData.calendar?.[monthIndex]?.[dayKey];
  const iqamaFromCalendar = confData.iqamaCalendar?.[monthIndex]?.[dayKey];

  const starts = startFromCalendar
    ? [startFromCalendar[0], startFromCalendar[2], startFromCalendar[3], startFromCalendar[4], startFromCalendar[5]]
    : confData.times || [];

  return {
    starts,
    iqamas: iqamaFromCalendar || [],
  };
}

function scrollToHashTarget(rootElement, hash) {
  const targetId = decodeURIComponent(hash.replace(/^#/, ""));
  if (!targetId) {
    return false;
  }

  const target =
    rootElement.querySelector(`[id="${targetId}"]`) || document.getElementById(targetId);
  if (!target) {
    return false;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - 140;
  window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  return true;
}

export default function HtmlPage({ html, isHome = false }) {
  const content = useMemo(() => extractMainContent(html), [html]);
  const mainRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const root = mainRef.current;
    if (!root) {
      return;
    }

    const onLinkClick = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (!href || target === "_blank") {
        return;
      }

      if (!href.startsWith("/")) {
        return;
      }

      event.preventDefault();
      navigate(href);
    };

    root.addEventListener("click", onLinkClick);
    return () => {
      root.removeEventListener("click", onLinkClick);
    };
  }, [navigate]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !content) {
      return;
    }

    const targets = root.querySelectorAll(
      ".wow, .activities-item, .event-item, .sermon-item, .blog-item, .team-item, .testimonial-item, .contact .row > div",
    );

    targets.forEach((element, index) => {
      element.classList.add("scroll-fade-item");
      element.style.transitionDelay = `${(index % 4) * 80}ms`;
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [content]);

  useEffect(() => {
    if (location.hash) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !content || !location.hash) {
      return;
    }

    let attempts = 0;
    let timer = null;
    const maxAttempts = 12;

    const tryScroll = () => {
      attempts += 1;
      const didScroll = scrollToHashTarget(root, location.hash);
      if (didScroll || attempts >= maxAttempts) {
        return;
      }
      timer = window.setTimeout(tryScroll, 60);
    };

    timer = window.setTimeout(tryScroll, 0);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [content, location.hash]);

  useEffect(() => {
    const root = mainRef.current;
    if (!root || !content || !isHome) {
      return;
    }

    let active = true;
    let refreshInterval = null;
    const statusElement = root.querySelector("[data-prayer-status]");

    const setStatus = (message, isError = false) => {
      if (!statusElement) {
        return;
      }
      statusElement.textContent = message;
      statusElement.classList.toggle("text-danger", isError);
      statusElement.classList.toggle("text-muted", !isError);
    };

    const applyPrayerTimes = (starts, iqamas) => {
      PRAYER_KEYS.forEach((prayerKey, index) => {
        const row = root.querySelector(`[data-prayer-row="${prayerKey}"]`);
        if (!row) {
          return;
        }

        const startCell = row.querySelector("[data-prayer-start]");
        const iqamaCell = row.querySelector("[data-prayer-iqama]");
        if (startCell) {
          startCell.textContent = starts[index] || "--:--";
        }
        if (iqamaCell) {
          iqamaCell.textContent = iqamas[index] || "--:--";
        }
      });
    };

    const fetchWidgetHtml = async () => {
      const response = await fetch(HALIFAX_MAWAQIT_WIDGET_URL);
      if (response.ok) {
        return response.text();
      }

      throw new Error(`Mawaqit request failed with ${response.status}.`);
    };

    const fetchWidgetHtmlViaFallback = async () => {
      for (const proxyUrl of MAWAQIT_PROXY_URLS) {
        try {
          const response = await fetch(proxyUrl);
          if (response.ok) {
            return response.text();
          }
        } catch {
          // Try next proxy.
        }
      }
      throw new Error("All fallback proxies failed.");
    };

    const refreshPrayerTimes = async () => {
      try {
        const htmlText = await fetchWidgetHtml().catch(() => fetchWidgetHtmlViaFallback());
        if (!active) {
          return;
        }
        const confData = extractConfData(htmlText);
        const { starts, iqamas } = getPrayerDataForToday(confData);
        applyPrayerTimes(starts, iqamas);
        setStatus("Prayer times auto-updated from Mawaqit (Halifax).");
      } catch {
        if (!active) {
          return;
        }
        setStatus("Could not refresh prayer times right now.", true);
      }
    };

    setStatus("Updating from Mawaqit...");
    refreshPrayerTimes();
    refreshInterval = window.setInterval(refreshPrayerTimes, 30 * 60 * 1000);

    return () => {
      active = false;
      if (refreshInterval) {
        window.clearInterval(refreshInterval);
      }
    };
  }, [content, isHome]);

  return <main ref={mainRef} dangerouslySetInnerHTML={{ __html: content }} />;
}
