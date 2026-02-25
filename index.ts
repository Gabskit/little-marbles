
//dependency
import './cdn/semantic.min.js'
import './cdn/semantic.min.css'
import './adds.css'
import * as Matter from "matter-js";
import Alpine from "alpinejs";
import p5 from 'p5';

//declare window
declare global {
    interface Window {
        Alpine: any;
    }
}
//init libs
var { Engine, Render, Runner, Bodies, Composite } = Matter;

window.Alpine = Alpine
Alpine.start()

//engines start
var engine
var worlda
var balla: any
var ballb: any
var spike: any
var ground: any

const sketch = (p: p5) => {
    p.setup = () => {
        var canvas = p.createCanvas(400,400)
        canvas.parent("con")
        engine = Engine.create()
        worlda = engine.world
        balla = Bodies.circle(200,100,20)
        ballb = Bodies.circle(200,200,20)
        //spike = Bodies.polygon(300,100,3,20)
        ground = Bodies.rectangle(200,380,400,20,{isStatic:true})
        Composite.add(worlda, [balla,ballb,ground])
        Runner.run(engine)
    }
    p.draw = () => {
        p.background(126)
        p.circle(balla.position.x, balla.position.y, 20)
        p.circle(ballb.position.x, ballb.position.y, 20)
        //p.polygon(spike.position.x, spike.position.y, 3, 20)
        p.rect(ground.position.x, ground.position.y, 400, 20)
    }
}

new p5(sketch)

/*Composite.add(worlda, [
    balla,
    ballb,
    spike,
    ground
])*/


//error shower
window.onerror = function(msg, url, line) {
    document.body.innerHTML = `<div style="color:red; background:white; padding:20px;">
        <h1>ERROR DETECTADO:</h1>
        <p>${msg}</p>
        <p>En: ${url} (Línea ${line})</p>
    </div>`;
};

