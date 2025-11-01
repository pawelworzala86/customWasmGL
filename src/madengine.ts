import { 
  WebGLRenderingContext,
  log,
} from './GL';

import { Shader } from './shader';


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

         

         const shader = new Shader(gl)

        

         



         // Get the attribute location
         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
         var positionLoc = gl.getAttribLocation(shader.program, "position");
         gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
         gl.enableVertexAttribArray(positionLoc);

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, coords_buffer);
         var coordLoc = gl.getAttribLocation(shader.program, "texCoord");
         gl.vertexAttribPointer(coordLoc, 2, gl.FLOAT, false, 0, 0);
         gl.enableVertexAttribArray(coordLoc);

         
         // Bind index buffer object
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer); 









      const textureID = gl.loadTexture('texture.jpg')

      const textureLocation = gl.getUniformLocation(shader.program, "diffuseTex")
      if(textureLocation){
         gl.activeTexture(gl.TEXTURE0)
         gl.bindTexture(gl.TEXTURE_2D, textureID)
         gl.uniform1i(textureLocation, 0)
      }





















export function setModel(ptr:i32,length:i32):void{
   let text = String.UTF8.decodeUnsafe(ptr, length, true);

   log('model set...: ')
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