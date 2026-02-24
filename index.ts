
// Esto confirmará si el código llega a ejecutarse
//alert("EJECUTANDO BUNDLE");
//document.body.style.backgroundColor = "purple";
//Dependencys
import './cdn/jquery.js'
import './cdn/jquery.mobile-1.3.2.js'
import './cdn/semantic.min.js'
import './cdn/jquery.mobile-1.3.2.css'
import './cdn/jquery.mobile.structure-1.3.2.css'
import './cdn/jquery.mobile.theme-1.3.2.css'
import './cdn/semantic.min.css'
import './adds.css'
import Matter from "matter-js";
import Alpine from "alpinejs";

//declare window
declare var $: any;
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

