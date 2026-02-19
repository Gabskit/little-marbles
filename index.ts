import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
//import '@shoelace-style/shoelace/dist/components/button/button.js';

// Esto confirmará si el código llega a ejecutarse
//alert("EJECUTANDO BUNDLE");
//document.body.style.backgroundColor = "purple";
//Dependencys
import "./style.css"
import "./cdn/jquery.js"
import "./cdn/jquery.mobile-1.3.2.min.js"
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/shoelace.js';
import Matter from "matter-js";
import Alpine from "alpinejs";
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

//basepath
setBasePath("/")

//declare window
declare global {
    interface Window {
        Alpine: any;
        $: any;
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

Render.run(render)

//error shower
window.onerror = function(msg, url, line) {
    document.body.innerHTML = `<div style="color:red; background:white; padding:20px;">
        <h1>ERROR DETECTADO:</h1>
        <p>${msg}</p>
        <p>En: ${url} (Línea ${line})</p>
    </div>`;
};