document.getElementById('menu-toggle').onclick = function() {
    var nav = document.getElementById('nav-links');
    nav.style.display = nav.style.display === "block" ? "none" : "block";
    this.classList.toggle('change');
  }
