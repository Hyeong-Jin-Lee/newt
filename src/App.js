import About from "./js/about.js";
import Home from "./js/home.js";

const $app = document.querySelector(".App");

const routes = {
  "/": Home,
  "/about": About,
};

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
  history.pushState(null, null, requestedUrl);
  $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("moveToAboutPageBtn")) {
    // Home 페이지의 버튼이 클릭된 경우
    changeUrl("/about");
  } else if (e.target.classList.contains("moveToHomePageBtn")) {
    // About 페이지의 버튼이 클릭된 경우
    changeUrl("/");
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});