import "../css/index.css";

// ===== SHOW MENU =====
function shoewMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  }
}
shoewMenu("header-menu", "header-toggle");
