const userToggle = document.getElementById("user-toggle");
const userDropdown = document.getElementById("user-dropdown");
const openLogin = document.getElementById("open-login");
const closeModalBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");
const loginForm = document.getElementById("login-form");
userToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  const open = userDropdown.hidden;
  userDropdown.hidden = !open;
  userToggle.setAttribute("aria-expanded", String(open));
});

userDropdown.addEventListener("click", function (e) {
  const item = e.target.closest("li");
  if (!item) return;

  console.log("Account action:", item.dataset.action);
  userDropdown.hidden = true;
  userToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", function (e) {
  if (!e.target.closest("#user-menu")) {
    userDropdown.hidden = true;
    userToggle.setAttribute("aria-expanded", "false");
  }
});

const productTabs = document.getElementById("product-tabs");

productTabs.addEventListener("click", function (e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  document.querySelectorAll(".tab-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  document.querySelectorAll(".tab-panel").forEach(function (p) {
    p.classList.remove("active");
  });

  btn.classList.add("active");
  document.getElementById(btn.dataset.tab).classList.add("active");
});


function openModal() {
  overlay.hidden = false;
}

function closeModal() {
  overlay.hidden = true;
}

openLogin.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", function (e) {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.hidden) closeModal();
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  closeModal();
});