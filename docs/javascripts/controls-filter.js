/* CloudInfra Secure - controls reference "filter by delivery" (GPO vs direct).
   Runs on every page load, including Material instant navigation, via document$. */
(function () {
  function wire() {
    var table = document.getElementById("ctlTable");
    var sel = document.getElementById("ctlDelivery");
    if (!table || !sel) { return; }

    function apply() {
      var v = sel.value;
      var rows = table.querySelectorAll("tbody tr");
      var shown = 0;
      for (var i = 0; i < rows.length; i++) {
        var d = rows[i].getAttribute("data-delivery") || "";
        var match = (v === "__all") || (d === v);
        rows[i].style.display = match ? "" : "none";
        if (match) {
          shown++;
          var num = rows[i].querySelector(".cmpl-num");
          if (num) { num.textContent = shown; }
        }
      }
      var count = document.getElementById("ctlCount");
      if (count) {
        var label = (v === "__all") ? "" :
          (v === "gpo" ? " (Group Policy-backed)" : " (direct system settings)");
        count.textContent = "Showing " + shown + " of " + rows.length + " controls" + label;
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
