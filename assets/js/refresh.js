// Visual refresh behaviour: Career category filter and contents-rail scroll-spy.
(function () {
  "use strict";

  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  // Career: client-side filtering over the rendered entries. "all" is the default chip.
  function initFilter() {
    var bar = document.querySelector("[data-rf-filter]");
    var career = document.querySelector("[data-rf-career]");
    if (!bar || !career) return;
    var chips = bar.querySelectorAll(".rf-chip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-cat");
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle("is-selected", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        career.querySelectorAll("[data-rf-year]").forEach(function (year) {
          var shown = 0;
          year.querySelectorAll(".rf-entry").forEach(function (entry) {
            var hit = cat === "all" || entry.getAttribute("data-cat") === cat;
            entry.hidden = !hit;
            if (hit) shown++;
          });
          year.hidden = shown === 0;
        });
      });
    });
  }

  // Contents rails: accent + left rule on the top-level heading currently in view.
  function initScrollSpy() {
    var rails = document.querySelectorAll("[data-rf-toc]");
    if (!rails.length) return;
    var entries = [];
    rails.forEach(function (rail) {
      rail.querySelectorAll("nav > ul > li > a[href^='#']").forEach(function (link) {
        var id = decodeURIComponent(link.getAttribute("href").slice(1));
        var target = document.getElementById(id);
        if (target) entries.push({ link: link, target: target });
      });
    });
    if (!entries.length) return;

    var current = null;
    function update() {
      var line = window.innerHeight * 0.3;
      var active = entries[0];
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].target.getBoundingClientRect().top <= line) active = entries[i];
      }
      if (active === current) return;
      current = active;
      entries.forEach(function (e) {
        e.link.classList.toggle("is-active", e.link.getAttribute("href") === active.link.getAttribute("href"));
      });
    }

    var queued = false;
    window.addEventListener("scroll", function () {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        update();
      });
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  onReady(function () {
    initFilter();
    initScrollSpy();
  });
})();
