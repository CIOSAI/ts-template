// @ts-nocheck
// import "./p5.min.js"
// import "p5"
import p5 from "p5"
import { Camera, RendererGL } from "p5"

console.log(fxhash) // the 64 chars hex number fed to your algorithm
const seed = ~~(fxrand() * 123456789)
console.log(seed)

window.$fxhashFeatures = {
  ...config,
}

const config = {
  frameRate: 60,
}

const win = {
  /** width */
  w: null,
  /** height */
  h: null,
  /** size */
  s: null,
  /** left */
  l: null,
  /** top */
  t: null,
}

const sketch = (p: p5) => {
  function init() {
    win.w = window.innerWidth
    win.h = window.innerHeight
    win.s = Math.min(window.innerWidth, window.innerHeight)
    win.t = (win.h - win.s) / 2
    win.l = (win.w - win.s) / 2
    p.createCanvas(win.w, win.h)
    p.frameRate(config.frameRate)
    p.draw()
  }
  p.setup = () => {
    init()
    p.colorMode(p.HSB, 1)
    // p.noiseSeed()
    p.draw()
  }
  p.draw = () => {
    p.background(0)
    // p.circle(10, 10, 10)

    p.rectMode(p.CENTER)

    let cnt = 20
    for (let i = 0; i < cnt; i++) {
      for (let j = 0; j < cnt; j++) {
        p.circle((i / cnt) * win.w, (j / cnt) * win.h, 3)
      }
    }
    // p.background(0.9, 0.1, 0.125)

    //   // top left of square
    //   translate(win.l, win.t)

    //   // center 0,0
    //   //translate(pos.s / 2 + pos.l, pos.s / 2 + pos.t);

    //   noFill()
    //   stroke(0, 0, 1)

    //   const { num, noiseScale } = config
    //   const size = win.s / num
    //   rectMode(CENTER)
    //   for (let i = 0; i < num; i++) {
    //     for (let j = 0; j < num; j++) {
    //       square((i + 0.5) * size, (j + 0.5) * size, size * noise(noiseScale * i, noiseScale * j, noiseScale * (i | j)))
    //       square((i + 0.5) * size, (j + 0.5) * size, size * noise(noiseScale * i, noiseScale * j, noiseScale * (i ^ j)))
    //     }
    //   }

    //   noLoop()
  }
  p.windowResized = () => {
    init()
  }
}
new p5(sketch)

// window.setup = () => {
//   init()
//   colorMode(HSB, 1)
//   noiseSeed(config.noiseSeed)
// }

// window.windowResized = () => {
//   init()
// }

// window.draw = () => {
//   p5.background(0.9, 0.1, 0.125)

//   // top left of square
//   translate(win.l, win.t)

//   // center 0,0
//   //translate(pos.s / 2 + pos.l, pos.s / 2 + pos.t);

//   noFill()
//   stroke(0, 0, 1)

//   const { num, noiseScale } = config
//   const size = win.s / num
//   rectMode(CENTER)
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       square((i + 0.5) * size, (j + 0.5) * size, size * noise(noiseScale * i, noiseScale * j, noiseScale * (i | j)))
//       square((i + 0.5) * size, (j + 0.5) * size, size * noise(noiseScale * i, noiseScale * j, noiseScale * (i ^ j)))
//     }
//   }

//   noLoop()
// }
