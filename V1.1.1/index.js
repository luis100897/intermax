const d = document;
import nextSlide from "./carrusel.js";
import { menu } from "./menu.js";

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".panel-btn", ".menu", ".menu a");
  setInterval(nextSlide, 5000);
});
