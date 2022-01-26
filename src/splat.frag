precision mediump float;

// uniform vec2 u_resolution;
// uniform float u_time;
// uniform sampler2D prevFrameTex;
// uniform sampler2D splatTex;

void main(){
  vec4 col = vec4(0);
  col.w = 1.;
  col = vec4(1,0.5,0.1,1);


  gl_FragColor = vec4(col);
}









  // vec2 uv = gl_FragCoord.xy/u_resolution;
  
  // vec4 prevFrame = texture2D(prevFrameTex,vec2(uv.x, uv.y));
  // vec4 splat = texture2D(splatTex,vec2(uv.x, uv.y));

  // vec4 col = mix(prevFrame,vec4(splat.xyz,1),splat.w);

  // col = splat;