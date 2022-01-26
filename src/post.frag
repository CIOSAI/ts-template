precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D tex0;

void main(){
  vec2 uv = gl_FragCoord.xy/u_resolution;
  
  vec4 tex = texture2D(tex0,vec2(uv.x, uv.y));

  vec3 col = tex.rgb;

  gl_FragColor = vec4(col, 1.0);
}