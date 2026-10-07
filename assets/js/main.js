/* Small progressive enhancements. The site works without JavaScript. */
(function () {
  "use strict";
  var doc = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Scroll state: frosted nav and top progress bar */
  var bar = $(".progress__bar");
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    document.body.classList.toggle("is-scrolled", y > 40);
    if (bar) {
      var max = doc.scrollHeight - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
    }
    updateTimeline();
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  /* Reveal on scroll (animates once) */
  var revealTargets = $$(".rv, .rv-mask, .ptable");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Mobile menu: full-screen overlay, Esc closes, page scroll locked */
  var menu = $("[data-menu]");
  var openBtn = $("[data-menu-open]");
  var closeBtn = $("[data-menu-close]");
  function setMenu(open) {
    if (!menu) return;
    if (open) {
      menu.hidden = false;
      window.requestAnimationFrame(function () { menu.classList.add("is-open"); });
      document.body.classList.add("menu-open");
      closeBtn.focus();
    } else {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      setTimeout(function () { menu.hidden = true; }, reduce ? 0 : 500);
      openBtn.focus();
    }
    openBtn.setAttribute("aria-expanded", String(open));
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && !menu.hidden) setMenu(false);
  });

  /* Home accordion gallery: hover, focus or tap opens a panel */
  $$("[data-accordion]").forEach(function (acc) {
    var panels = $$("[data-panel]", acc);
    function open(panel) {
      panels.forEach(function (p) {
        var on = p === panel;
        p.classList.toggle("is-open", on);
        var b = $("[data-panel-btn]", p);
        if (b) b.setAttribute("aria-expanded", String(on));
      });
    }
    panels.forEach(function (p) {
      var btn = $("[data-panel-btn]", p);
      btn.addEventListener("click", function () { open(p); var link = $(".accordion__content a", p); if (link) link.focus({ preventScroll: true }); });
      if (window.matchMedia("(hover: hover) and (min-width: 900px)").matches) {
        p.addEventListener("mouseenter", function () { open(p); });
      }
    });
  });

  /* Count-up numbers (easeOutQuart over 1.4s), first time seen */
  var counters = $$("[data-count]");
  function fmt(n) { return n.toLocaleString("en-US"); }
  if ("IntersectionObserver" in window && !reduce) {
    counters.forEach(function (el) { el.textContent = "0"; });
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.getAttribute("data-count")), t0 = null;
        cio.unobserve(el);
        function step(ts) {
          if (!t0) t0 = ts;
          var k = Math.min((ts - t0) / 1400, 1);
          var eased = 1 - Math.pow(1 - k, 4);
          el.textContent = fmt(Math.round(target * eased));
          if (k < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = fmt(parseFloat(el.getAttribute("data-count"))); });
  }

  /* ID card: pendulum swing from pointer velocity, flip on tap / Enter / Space */
  var card = $("[data-card]");
  if (card) {
    var angle = 0, vel = 0, lastX = null, raf = null;
    function flip() {
      var f = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(f));
    }
    card.addEventListener("click", flip);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
    });
    function loop() {
      vel += -angle * 0.02;
      vel *= 0.94;
      angle += vel;
      card.style.setProperty("--swing", angle.toFixed(2) + "deg");
      if (Math.abs(angle) > 0.02 || Math.abs(vel) > 0.02) { raf = window.requestAnimationFrame(loop); }
      else { raf = null; card.classList.remove("is-active"); card.style.removeProperty("--swing"); }
    }
    if (!reduce) {
      var lanyard = $("[data-lanyard]");
      lanyard.addEventListener("pointermove", function (e) {
        if (lastX !== null) {
          vel += Math.max(-1.5, Math.min(1.5, (e.clientX - lastX) * 0.05));
          card.classList.add("is-active");
          if (!raf) raf = window.requestAnimationFrame(loop);
        }
        lastX = e.clientX;
      });
      lanyard.addEventListener("pointerleave", function () { lastX = null; });
    }
  }

  /* Skills: family filter and inspector */
  var grid = $("[data-skill-grid]");
  if (grid) {
    var ins = $("[data-inspector]");
    function inspect(btn) {
      $$(".el__btn", grid).forEach(function (b) { b.classList.toggle("is-current", b === btn); });
      var sym = $("[data-i-sym]", ins);
      sym.textContent = btn.dataset.sym;
      sym.style.animation = "none"; void sym.offsetWidth; sym.style.animation = "";
      $("[data-i-name]", ins).textContent = btn.dataset.name;
      $("[data-i-fam]", ins).textContent = btn.dataset.fam;
      $("[data-i-used]", ins).textContent = btn.dataset.used ? "Used in: " + btn.dataset.used : "From my resume";
    }
    $$(".el__btn", grid).forEach(function (b) {
      b.addEventListener("mouseenter", function () { inspect(b); });
      b.addEventListener("focus", function () { inspect(b); });
      b.addEventListener("click", function () { inspect(b); });
    });
    setupFilter($("[data-skill-filter]"), $$(".el", grid), "family", function (el, val) {
      el.classList.toggle("is-dim", val !== "all" && el.dataset.family !== val);
    });
  }

  /* Work page: filter project cards by country */
  var pgrid = $("[data-project-grid]");
  if (pgrid) {
    setupFilter($("[data-project-filter]"), $$(".pcard", pgrid), "region", function (el, val) {
      el.hidden = val !== "all" && el.dataset.region !== val;
      if (!el.hidden) el.classList.add("is-in");
    });
  }

  function setupFilter(group, items, key, apply) {
    if (!group) return;
    var chips = $$("button", group);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var val = chip.dataset[key];
        chips.forEach(function (c) { var on = c === chip; c.classList.toggle("is-on", on); c.setAttribute("aria-pressed", String(on)); });
        items.forEach(function (el) { apply(el, val); });
      });
    });
  }

  /* Experience timeline: spine draws with scroll, stops light up */
  var tl = $("[data-timeline]");
  var fill = $("[data-timeline-fill]");
  var stops = $$("[data-stop], .stop--next");
  function updateTimeline() {
    if (!tl) return;
    var r = tl.getBoundingClientRect();
    var mark = window.innerHeight * 0.6;
    var p = Math.min(Math.max((mark - r.top) / r.height, 0), 1);
    if (fill) fill.style.setProperty("--t", p.toFixed(4));
    stops.forEach(function (s) { if (s.getBoundingClientRect().top < mark) s.classList.add("is-lit"); });
  }

  /* Lightbox for project images */
  var dlg = $("[data-lightbox]");
  if (dlg && typeof dlg.showModal === "function") {
    var img = $(".lightbox__img", dlg), cap = $(".lightbox__cap", dlg);
    $$("[data-lightbox-src]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        img.src = a.getAttribute("href");
        img.alt = a.dataset.caption || "";
        cap.textContent = a.dataset.caption || "";
        dlg.showModal();
      });
    });
    $("[data-lightbox-close]", dlg).addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  }

  /* Contact: copy email */
  var copyBtn = $("[data-copy]");
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(copyBtn.dataset.copy).then(function () {
        var s = $("[data-copy-status]");
        copyBtn.textContent = "Copied ✓";
        if (s) s.textContent = "Email copied to clipboard";
        setTimeout(function () { copyBtn.textContent = "Copy"; if (s) s.textContent = ""; }, 2200);
      });
    });
  }

  /* Home hero: load the other slides after the page has loaded, then start the crossfade */
  var slides = $("[data-slides]");
  if (slides && !reduce) {
    window.addEventListener("load", function () {
      var rest = $$("img[data-src]", slides), left = rest.length;
      if (!left) return;
      rest.forEach(function (img) {
        img.onload = img.onerror = function () { if (--left === 0) slides.classList.add("is-ready"); };
        img.srcset = img.dataset.srcset;
        img.src = img.dataset.src;
      });
    });
  }

  onScroll();
})();
