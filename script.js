
const toggle = document.getElementById("languageToggle");
let currentLanguage = "fa";
function setLanguage(lang) {
  currentLanguage = lang;
  const isEnglish = lang === "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = isEnglish ? "ltr" : "rtl";
  document.body.setAttribute("dir", isEnglish ? "ltr" : "rtl");
  document.querySelectorAll("[data-fa][data-en]").forEach((el) => {
    const value = el.getAttribute(isEnglish ? "data-en" : "data-fa");
    if (value !== null) el.innerHTML = value;
  });
  toggle.innerHTML = isEnglish ? 'FA <span>↗</span>' : 'EN <span>↗</span>';
  document.title = isEnglish
    ? "Mahdiyar Gharaei | Web Developer & Aerospace Enthusiast"
    : "مهدیار قرائی | توسعه‌دهنده وب و علاقه‌مند به هوافضا";
  document.querySelector('meta[name="description"]').content = isEnglish
    ? "The online portfolio of Mahdiyar Gharaei: web developer, interface designer, and technology enthusiast based in Mashhad, Iran."
    : "وب‌سایت رسمی و رزومه آنلاین مهدیار قرائی؛ توسعه‌دهنده وب، طراح رابط کاربری و علاقه‌مند به فناوری و مهندسی هوافضا.";
}
toggle.addEventListener("click", () => setLanguage(currentLanguage === "fa" ? "en" : "fa"));


const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.querySelector(".nav");
if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener("click", () => {
    const open = mobileMenuToggle.getAttribute("aria-expanded") !== "true";
    mobileMenuToggle.setAttribute("aria-expanded", String(open));
    mobileMenuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileNav.classList.toggle("is-open", open);
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open menu");
      mobileNav.classList.remove("is-open");
    });
  });
}

