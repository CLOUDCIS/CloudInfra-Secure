/* CloudInfra Secure - controls reference multi-dimension filter.
   Combines any number of <select class="ctl-filter" data-col="..."> controls
   (category / severity / provider / delivery) with AND semantics, supports the
   clickable category cards and a reset button. Runs on every page load,
   including Material instant navigation, via document$. */
(function () {
  function wire() {
    var table = document.getElementById("ctlTable");
    if (!table) { return; }
    var selects = Array.prototype.slice.call(document.querySelectorAll("select.ctl-filter"));
    if (!selects.length) { return; }
    var rows = table.querySelectorAll("tbody tr");
    var count = document.getElementById("ctlCount");
    var reset = document.getElementById("ctlReset");
    var cards = Array.prototype.slice.call(document.querySelectorAll(".cat-card"));

    function apply() {
      var shown = 0;
      for (var i = 0; i < rows.length; i++) {
        var match = true;
        for (var s = 0; s < selects.length; s++) {
          var v = selects[s].value;
          if (v === "__all") { continue; }
          var col = selects[s].getAttribute("data-col");
          var rv = rows[i].getAttribute("data-" + col) || "";
          if (rv !== v) { match = false; break; }
        }
        rows[i].style.display = match ? "" : "none";
        if (match) {
          shown++;
          var num = rows[i].querySelector(".cmpl-num");
          if (num) { num.textContent = shown; }
        }
      }
      if (count) {
        count.textContent = "Showing " + shown + " of " + rows.length + " controls";
      }
      // Reflect the active category on the cards.
      var catSel = document.getElementById("ctlCategory");
      var active = catSel ? catSel.value : "__all";
      for (var k = 0; k < cards.length; k++) {
        var on = (cards[k].getAttribute("data-cat") === active);
        cards[k].classList.toggle("cat-card--active", on);
      }
    }

    for (var s = 0; s < selects.length; s++) {
      if (!selects[s].dataset.wired) {
        selects[s].addEventListener("change", apply);
        selects[s].dataset.wired = "1";
      }
    }

    for (var c = 0; c < cards.length; c++) {
      (function (card) {
        if (card.dataset.wired) { return; }
        card.addEventListener("click", function () {
          var catSel = document.getElementById("ctlCategory");
          if (!catSel) { return; }
          var cat = card.getAttribute("data-cat");
          // Toggle: clicking the active category clears it.
          catSel.value = (catSel.value === cat) ? "__all" : cat;
          apply();
        });
        card.dataset.wired = "1";
      })(cards[c]);
    }

    if (reset && !reset.dataset.wired) {
      reset.addEventListener("click", function () {
        for (var s = 0; s < selects.length; s++) { selects[s].value = "__all"; }
        apply();
      });
      reset.dataset.wired = "1";
    }

    apply();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(wire);
  } else {
    document.addEventListener("DOMContentLoaded", wire);
  }
})();
