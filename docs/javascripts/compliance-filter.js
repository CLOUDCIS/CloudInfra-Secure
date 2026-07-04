/* CloudInfra Secure - compliance coverage "browse by standard" filter.
   Runs on every page load, including Material's instant navigation, by
   subscribing to the document$ observable that the theme exposes. */
(function () {
  function wire() {
    var table = document.getElementById("cmplTable");
    var sel = document.getElementById("cmplStd");
    if (!table || !sel) { return; }

    function apply() {
      var v = sel.value;
      var rows = table.querySelectorAll("tbody tr");
      var shown = 0;
      for (var i = 0; i < rows.length; i++) {
        var tags = rows[i].getAttribute("data-standards") || "";
        var match = (v === "__all") || (tags.indexOf("|" + v + "|") !== -1);
        rows[i].style.display = match ? "" : "none";
        if (match) {
          shown++;
          var num = rows[i].querySelector(".cmpl-num");
          if (num) { num.textContent = shown; }
        }
      }
      var count = document.getElementById("cmplCount");
      if (count) {
        count.textContent = "Showing " + shown + " of " + rows.length +
          " controls" + (v === "__all" ? "" : " for " + v);
      }
    }

    if (!sel.dataset.wired) {
      sel.addEventListener("change", apply);
      sel.dataset.wired = "1";
    }
    apply();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(wire);
  } else {
    document.addEventListener("DOMContentLoaded", wire);
  }
})();
