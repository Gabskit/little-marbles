//Dependencys
import Matter from "matter-js";
import Alpine from "alpinejs";

//declare window
declare global {
    interface Window {
        Alpine: any;
    }
}

//init libs
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite

window.Alpine = Alpine
Alpine.start()

//engines start
var engine = Engine.create()

var render = Render.create({
    element: document.body,
    engine: engine
})

//page routing
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll("[data-role='page']") as NodeListOf<HTMLElement>
  pages.forEach(page => {
    page.style.display = "none"
  })
  pages[0].style.display = "block"
});

document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
    const href = target.getAttribute("href")
    if (href) {
        mvtopg(href)
    }
})

function mvtopg(id: string): void {
    const pages = document.querySelectorAll("[data-role='page']") as NodeListOf<HTMLElement>
    pages.forEach(page => {
        const idpg = page.getAttribute("id")
        const idpgprocessed = "#" + idpg
        if (idpgprocessed === id) {
            page.style.display = "block"
        } else {
            page.style.display = "none"
        }
    })
}