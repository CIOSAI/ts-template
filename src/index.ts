import p5 from "p5"

console.log(fxhash) // the 64 chars hex number fed to your algorithm
const seed = ~~(fxrand() * 123456789)
console.log(seed)

// @ts-ignore
window.$fxhashFeatures = { ...config }

// ------------- VARS ------------- //
const config = {
  frameRate: 144,
}

class Window {
  w: number = 0
  h: number = 0
  s: number = 0
  l: number = 0
  t: number = 0
}

const win = new Window()

let pGlobal: p5

const sketch = (p: p5) => {
  let time: number = 0
  // ------------- SETUP ------------- //
  p.preload = () => {}
  p.setup = () => {
    pGlobal = p

    // Canvas
    win.w = window.innerWidth
    win.h = window.innerHeight
    win.s = Math.min(window.innerWidth, window.innerHeight)
    win.t = (win.h - win.s) / 2
    win.l = (win.w - win.s) / 2

    p.setAttributes("antialias", true)
    p.smooth()
    p.createCanvas(win.w, win.h, p.WEBGL)
    p.frameRate(config.frameRate)
    p.colorMode(p.RGB, 1)

    // You can create shaders like this.
    // const vertSrc = require("./shaders/quad.vert").default
    // shadPost = p.createShader(vertSrc, require("./shaders/depthcore/post.frag").default)
  }

  // ------------- DRAW ------------- //
  p.draw = () => {
    p.color(125)
    p.rect(100, 100, 100, 100)
  }
  p.windowResized = () => {
    p.setup()
  }
}

new p5(sketch)
