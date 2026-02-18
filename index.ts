//Dependencys
import "./style.css"
import "flyonui/flyonui"
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
    element: document.getElementById("main") as HTMLElement,
    engine: engine
})

Render.run(render)

