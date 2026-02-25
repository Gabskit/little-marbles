
//dependency
import './cdn/semantic.min.js'
import './cdn/semantic.min.css'
import './adds.css'
import Matter from "matter-js";
import Alpine from "alpinejs";

//declare window
declare global {
    interface Window {
        Alpine: any;
    }
}
//console.log("REGISTRANDO COMPONENTES...");
//alert("JS funcionavndo");
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

//Render.run(render)

//error shower
window.onerror = function(msg, url, line) {
    document.body.innerHTML = `<div style="color:red; background:white; padding:20px;">
        <h1>ERROR DETECTADO:</h1>
        <p>${msg}</p>
        <p>En: ${url} (Línea ${line})</p>
    </div>`;
};

