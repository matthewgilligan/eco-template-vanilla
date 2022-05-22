import './src/styles/style.css'
// import { sendAlert } from './src/utils/alert'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `


const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href)
  handleLocation();
} 

const routes = {
  404: "/src/pages/404.html",
  "/": "/src/pages/index.html",
  "/about": "/src/pages/about.html",
  "/cv": "/src/pages/cv.html",
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();