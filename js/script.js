function openNav() {
  const menu = document.getElementById("menu");
  menu.style.width = "100%";
  menu.style.right = "0";
  menu.style.display = "block";
  const menutoggle = document.getElementById("menu-toggle");
  menutoggle.style.display = "none";
}

function closeNav() {
  const menu = document.getElementById("menu")
  menu.style.width = "0";
  menu.style.display = "none";
  const menutoggle = document.getElementById("menu-toggle");
  menutoggle.style.display = "flex";
}