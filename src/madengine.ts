import { 
  WebGLRenderingContext,
  log,
} from './GL';




log('started...')

const gl = new WebGLRenderingContext('cnvs')


      
      

         const vertices:StaticArray<f32> = [
            -0.5,0.5,0.0,
            -0.5,-0.5,0.0,
            0.5,-0.5,0.0,
            0.5,0.5,0.0 
         ];

         const coords:StaticArray<f32> = [
            0.0,1.0,
            0.0,0.0,
            1.0,0.0,
            1.0,1.0,
         ];

         const indices:StaticArray<i16> = [3,2,1,3,1,0];



         // Create an empty buffer object to store vertex buffer
         var vertex_buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

         // Create an empty buffer object to store vertex buffer
         var coords_buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, coords_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);

         // Unbind the buffer
         //gl.bindBuffer(gl.ARRAY_BUFFER, null);

         // Create an empty buffer object to store Index buffer
         var Index_Buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

         // Unbind the buffer
         //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

         

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

        

         



         // Get the attribute location
         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
         var positionLoc = gl.getAttribLocation(shaderProgram, "position");
         gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
         gl.enableVertexAttribArray(positionLoc);

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, coords_buffer);
         var coordLoc = gl.getAttribLocation(shaderProgram, "texCoord");
         gl.vertexAttribPointer(coordLoc, 2, gl.FLOAT, false, 0, 0);
         gl.enableVertexAttribArray(coordLoc);

         
         // Bind index buffer object
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer); 









      const textureID = gl.loadTexture('texture.jpg')

      const textureLocation = gl.getUniformLocation(shaderProgram, "diffuseTex")
      if(textureLocation){
         gl.activeTexture(gl.TEXTURE0)
         gl.bindTexture(gl.TEXTURE_2D, textureID)
         gl.uniform1i(textureLocation, 0)
      }





export function setModel(ptr:i32,length:i32):void{
   log('model set...')
}















export function displayLoop(delta:f32):void{

         // Clear the canvas
         gl.clearColor(0.5, 0.5, 0.5, 0.9);

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);

         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
         //gl.viewport(0,0,canvas.width,canvas.height);
         gl.viewport(0,0,512,512);

         // Draw the triangle
         gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);

}