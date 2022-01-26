// @ts-nocheck
// import "./p5.min.js"
// import "p5"
import p5, { Shader } from "p5"
import { Camera, RendererGL } from "p5"
import exp, { Vector, Vector3, Vector4, Matrix4 } from "@0b5vr/experimental"

console.log(fxhash) // the 64 chars hex number fed to your algorithm
const seed = ~~(fxrand() * 123456789)
console.log(seed)

window.$fxhashFeatures = {
  ...config,
}

// ------------- VARS ------------- //
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

const PI2: number = Math.PI * 2.0
const PI: number = Math.PI

class WMath {
  static macos(x: number) {
    return Math.acos(x)
  }
  static masin(x: number) {
    return Math.asin(x)
  }
  static matan(y, x) {
    return Math.atan2(y, x)
  }
  static mcos(x) {
    return Math.cos(x)
  }
  static msin(x) {
    return Math.sin(x)
  }
  static cos2(x) {
    return [Math.cos(x[0]), Math.cos(x[1])]
  }
  static cos3(x) {
    return [Math.cos(x[0]), Math.cos(x[1]), Math.cos(x[2])]
  }
  static sin2(x) {
    return [Math.sin(x[0]), Math.sin(x[1])]
  }
  static sin3(x) {
    return [Math.sin(x[0]), Math.sin(x[1]), Math.sin(x[2])]
  }
  static sin4(x) {
    return [Math.sin(x[0]), Math.sin(x[1]), Math.sin(x[2]), Math.sin(x[3])]
  }
  static SC(x) {
    return [Math.sin(x), Math.cos(x)]
  }
  static add2(a, b) {
    return [a[0] + b[0], a[1] + b[1]]
  }
  static add3(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  }
  static add31(a, b) {
    return [a[0] + b, a[1] + b, a[2] + b]
  }
  static add4(a, b) {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]
  }
  static sub3(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
  }
  static sub2(a, b) {
    return [a[0] - b[0], a[1] - b[1]]
  }
  static dot3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  }
  static abs3(a) {
    return [a[0] > 0 ? a[0] : -a[0], a[1] > 0 ? a[1] : -a[1], a[2] > 0 ? a[2] : -a[2]]
  }
  static scale2(a, b) {
    return [a[0] * b, a[1] * b]
  }
  static scale3(a, b) {
    return [a[0] * b, a[1] * b, a[2] * b]
  }
  static scale4(a, b) {
    return [a[0] * b, a[1] * b, a[2] * b, a[3] * b]
  }
  static mul3(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]
  }
  static mul4(a, b) {
    return [a[0] * b[0], a[1] * b[1], a[2] * b[2], a[3] * b[3]]
  }
  static mymix(a, b, f) {
    return a * (1.0 - f) + b * f
  }
  static mymix22(a, b, f) {
    return [a[0] * (1.0 - f[0]) + b[0] * f[0], a[1] * (1.0 - f[1]) + b[1] * f[1]]
  }
  static mix1(a, b, f) {
    return a * (1.0 - f) + b * f
  }
  static mix3(a, b, f) {
    return add3(scale3(a, 1.0 - f), scale3(b, f))
  }
  static length2(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1])
  }
  static length3(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
  }
  static length4(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3])
  }
  static normalize3(a) {
    return scale3(a, 1.0 / length3(a))
  }
  static normalize4(a) {
    return scale4(a, 1.0 / length4(a))
  }
  static cross(a, b) {
    return [a[1] * b[2] - b[1] * a[2], a[2] * b[0] - b[2] * a[0], a[0] * b[1] - b[0] * a[1]]
  }
  G = 0.5 + Math.sqrt(5 / 4)
  static fract1(a) {
    return a - Math.floor(a)
  }
  static floor2(a) {
    return [Math.floor(a[0]), Math.floor(a[1])]
  }
  static fract2(a) {
    return [fract1(a[0]), fract1(a[1])]
  }
  static fract3(a) {
    return [fract1(a[0]), fract1(a[1]), fract1(a[2])]
  }
  static fract4(a) {
    return [fract1(a[0]), fract1(a[1]), fract1(a[2]), fract1(a[3])]
  }
  static clamp1(a, a1, a2) {
    return a < a1 ? a1 : a > a2 ? a2 : a
  }
  static clamp31(a, a1, a2) {
    return [clamp1(a[0], a1, a2), clamp1(a[1], a1, a2), clamp1(a[2], a1, a2)]
  }
  static rotX(ph, v) {
    return [v[0], v[1] * mcos(ph) + v[2] * msin(ph), v[2] * mcos(ph) - v[1] * msin(ph)]
  }
  static rotY(ph, v) {
    return [v[0] * mcos(ph) + v[2] * msin(ph), v[1], v[2] * mcos(ph) - v[0] * msin(ph)]
  }
  static rotZ(ph, v) {
    return [v[0] * mcos(ph) + v[1] * msin(ph), v[1] * mcos(ph) - v[0] * msin(ph), v[2]]
  }
  static hsv2rgb(c) {
    var K = [1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0]
    var p = abs3(sub3(scale3(fract3(add3([c[0], c[0], c[0]], K)), 6.0), [3, 3, 3]))
    return scale3(mix3([1, 1, 1], clamp31(sub3(p, [1, 1, 1]), 0.0, 1.0), c[1]), c[2])
  }
}

let pGlobal: p5

class UVConvert {
  static UVToNDC(v: p5.Vector): p5.Vector {
    return pGlobal.createVector(v.x + 0.5, v.y + 0.5, v.z + 0.5)
  }
  static NDCToScreen(v: p5.Vector): p5.Vector {
    const maxAxis = Math.max(win.w, win.h)
    return pGlobal.createVector((v.x + 0.5) * maxAxis, (v.y + 0.5) * maxAxis, (v.z + 0.5) * maxAxis)
  }
}

const sketch = (p: p5) => {
  let shad: p5.Shader
  let shadPost: p5.Shader
  let shadSplat: p5.Shader
  let pg: p5.Graphics
  let pgStamp: p5.Graphics
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
    p.createCanvas(win.w, win.h, p.WEBGL)
    p.frameRate(config.frameRate)
    p.colorMode(p.HSB, 1)

    // Shaders
    const vertSrc = require("./quad.vert").default
    shad = p.createShader(vertSrc, require("./shad.frag").default)
    shadPost = p.createShader(vertSrc, require("./post.frag").default)
    shadSplat = p.createShader(vertSrc, require("./splat.frag").default)

    // Pg
    pg = p.createGraphics(win.w, win.h, p.WEBGL)
    pg.background(255)
    pg.rectMode(p.CENTER)

    pgStamp = p.createGraphics(win.w, win.h, p.WEBGL)
    pgStamp.rectMode(p.CENTER)
    pgStamp.background(255)
  }

  // ------------- DRAW ------------- //
  p.draw = () => {
    // Stamp
    // pgStamp.clear()
    // pg.clear()

    // let cnt = 20
    // let trail: Array<p5.Vector> = []
    // let startPos: p5.Vector = p.createVector()
    // for (let i = 0; i < cnt; i++) {
    //   trail.push(startPos.add(fxrand() * 2 - 1, fxrand() * 2 - 1).copy())
    // }

    // // pgStamp.fill(155, 0, 0)
    // pgStamp.noFill()
    // pgStamp.stroke(155)
    // pgStamp.strokeWeight(20)
    // pgStamp.beginShape()
    // for (let i = 0; i < cnt; i++) {
    //   let v: p5.Vector = UVConvert.NDCToScreen(trail[i])
    //   v = p.createVector(win.w * fxrand(), win.h * fxrand(), 0)
    //   pgStamp.vertex(v.x, v.y)
    // }
    // pgStamp.endShape()
    // pgStamp.endShape("close")

    // Plot
    // shadSplat.setUniform("u_resolution", [win.w, win.h])
    // shadSplat.setUniform("u_time", p.millis() / 1000)
    // shadSplat.setUniform("u_frame", p.frameCount)
    // shadSplat.setUniform("prevFrameTex", pg)
    // shadSplat.setUniform("splatTex", pgStamp)
    pg.shader(shadSplat)
    // pg.quad(-1, -1, 1, -1, 1, 1, -1, 1)
    pg.rect(0, 0, win.w, win.h)

    // Composite
    // shadPost.setUniform("u_resolution", [win.w, win.h])
    // shadPost.setUniform("u_time", p.millis() / 1000)
    // shadPost.setUniform("u_frame", p.frameCount)
    // shadPost.setUniform("tex0", pg)
    // p.shader(shadPost)
    // p.quad(-1, -1, 1, -1, 1, 1, -1, 1)

    p.image(pg, 0, 0, win.w, win.h)
  }
  p.windowResized = () => {
    p.setup()
  }
}

new p5(sketch)
