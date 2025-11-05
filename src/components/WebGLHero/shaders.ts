// Vertex shader for procedural background
export const backgroundVertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Fragment shader with procedural noise and neon glow
export const backgroundFragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  
  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  // Chromatic aberration
  vec3 chromaticAberration(vec2 uv, float amount) {
    vec2 direction = uv - 0.5;
    float dist = length(direction);
    direction = normalize(direction);
    
    vec2 uvR = uv + direction * amount * dist;
    vec2 uvG = uv;
    vec2 uvB = uv - direction * amount * dist;
    
    return vec3(
      snoise(uvR * 3.0 + uTime * 0.1),
      snoise(uvG * 3.0 + uTime * 0.1),
      snoise(uvB * 3.0 + uTime * 0.1)
    );
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 mouseInfluence = (uMouse - 0.5) * 0.3;
    
    // Procedural noise layers
    float noise1 = snoise(uv * 2.0 + uTime * 0.05 + mouseInfluence);
    float noise2 = snoise(uv * 4.0 - uTime * 0.03);
    float noise3 = snoise(uv * 8.0 + uTime * 0.08);
    
    // Chromatic aberration effect
    vec3 aberration = chromaticAberration(uv, 0.002);
    
    // Neon cyan and violet colors
    vec3 cyan = vec3(0.059, 0.965, 1.0);    // #0ff6ff
    vec3 violet = vec3(0.482, 0.380, 1.0);  // #7b61ff
    vec3 mint = vec3(0.0, 1.0, 0.835);      // #00ffd5
    
    // Mix colors based on noise
    vec3 color = mix(cyan, violet, noise1 * 0.5 + 0.5);
    color = mix(color, mint, noise2 * 0.3);
    
    // Add chromatic aberration
    color += aberration * 0.1;
    
    // Add glow effect
    float glow = pow(noise3 * 0.5 + 0.5, 2.0);
    color += glow * 0.3;
    
    // Vignette effect
    float vignette = 1.0 - length(uv - 0.5) * 0.8;
    color *= vignette;
    
    // Final opacity for transparency
    float alpha = (noise1 + noise2 + noise3) * 0.08 + 0.05;
    
    gl_FragColor = vec4(color, alpha);
  }
`

// Vertex shader for 3D mesh
export const meshVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Deform based on mouse position
    vec3 pos = position;
    float mouseEffect = length(uMouse) * 0.5;
    pos += normal * sin(uTime + position.y * 2.0) * 0.1 * mouseEffect;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

// Fragment shader for 3D mesh with wireframe
export const meshFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    // Fresnel effect
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
    
    // Gradient based on position
    float gradient = (vPosition.y + 1.0) * 0.5;
    vec3 color = mix(uColor1, uColor2, gradient);
    
    // Add fresnel glow
    color += fresnel * vec3(0.059, 0.965, 1.0) * 0.8;
    
    // Pulse effect
    float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
    color *= pulse;
    
    // Reduce overall opacity to prevent text overlap
    gl_FragColor = vec4(color, 0.5);
  }
`
