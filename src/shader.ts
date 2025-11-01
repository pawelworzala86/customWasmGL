import { 
  WebGLRenderingContext,
} from './GL';

export class Shader{
    program: i32;
    constructor(gl:WebGLRenderingContext){
        // Vertex shader source code
                 var vertCode = `#version 300 es
        
        layout(location = 0) in vec3 position;
        layout(location = 1) in vec2 texCoord;
        
        out vec2 v_coord;
        
        void main(void) {
           gl_Position = vec4(position, 1.0);
        
           v_coord = texCoord;
        }`
        
                 // Create a vertex shader object
                 var vertShader = gl.createShader(gl.VERTEX_SHADER);
        
                 // Attach vertex shader source code
                 gl.shaderSource(vertShader, vertCode);
        
                 // Compile the vertex shader
                 gl.compileShader(vertShader);
        
                 // Fragment shader source code
                 var fragCode = `#version 300 es
        precision mediump float;
        
        in vec2 v_coord;
        
        uniform sampler2D diffuseTex;
        
        layout(location = 0) out vec4 color;
        
        void main(void) {
           color = texture(diffuseTex, v_coord);
           //vec4(v_coord.x, v_coord.y, 1.0, 1.0);
        }`
        
                 // Create fragment shader object 
                 var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
        
                 // Attach fragment shader source code
                 gl.shaderSource(fragShader, fragCode);
        
                 // Compile the fragmentt shader
                 gl.compileShader(fragShader);
        
                 // Create a shader program object to
                 // store the combined shader program
                 var shaderProgram = gl.createProgram();
        
                 // Attach a vertex shader
                 gl.attachShader(shaderProgram, vertShader);
        
                 // Attach a fragment shader
                 gl.attachShader(shaderProgram, fragShader);
        
                 // Link both the programs
                 gl.linkProgram(shaderProgram);
        
                 // Use the combined shader program object
                 gl.useProgram(shaderProgram);

        this.program = shaderProgram
    }
}