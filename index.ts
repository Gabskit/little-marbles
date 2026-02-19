//Dependencys
import "./style.css"
import "./cdn/jquery.js"
import "./cdn/jquery.mobile-1.3.2.min.js"
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/shoelace.js';

// Set the base path for Shoelace assets
setBasePath('/www/');

import Matter from "matter-js";
import Alpine from "alpinejs";

//declare window
declare global {
    interface Window {
        Alpine: any;
        $: any;
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

