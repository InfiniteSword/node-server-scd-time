(function borderShow() {
    for (var i = 0; i < 3; i++) {
        (function(i) {
            var border_ctn = document.querySelectorAll(".border-ctn")[i];
            var item = document.querySelectorAll(".items")[i];
            item.addEventListener("mouseover", function() {
                border_ctn.style.width = "202px";
                border_ctn.style.visibility = "visible";
            });
            item.addEventListener("mouseout", function() {
                border_ctn.style.width = "0";
                border_ctn.style.visibility = "hidden";
            });
        })(i);
    }
})();
