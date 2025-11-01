import { 
  WebGLRenderingContext,
  log,
} from './GL';

import { Shader } from './shader';


log('started...')

const gl = new WebGLRenderingContext('cnvs')





class Mesh{
   vertex_buffer: i32;
   vertices:StaticArray<f32>;
   constructor(){

      this.vertices = [
            0.5,0.5,0.0,
            0.5,-0.5,0.0,
            -0.5,-0.5,0.0,
            0.5,0.5,0.0,
            -0.5,-0.5,0.0,
            -0.5,0.5,0.0,
         ];

         const coords:StaticArray<f32> = [
            1.0,1.0,
            1.0,0.0,
            0.0,0.0,
            1.0,1.0,
            0.0,0.0,
            0.0,1.0,
         ];

      
         /*const vertices:StaticArray<f32> = [
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

         const indices:StaticArray<i16> = [3,2,1,3,1,0];*/



         // Create an empty buffer object to store vertex buffer
         var vertex_buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

         // Create an empty buffer object to store vertex buffer
         var coords_buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, coords_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);

         // Unbind the buffer
         //gl.bindBuffer(gl.ARRAY_BUFFER, null);

         /*// Create an empty buffer object to store Index buffer
         var Index_Buffer = gl.createBuffer();

         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
*/
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
         //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer); 









      const textureID = gl.loadTexture('texture.jpg')

      const textureLocation = gl.getUniformLocation(shader.program, "diffuseTex")
      if(textureLocation){
         gl.activeTexture(gl.TEXTURE0)
         gl.bindTexture(gl.TEXTURE_2D, textureID)
         gl.uniform1i(textureLocation, 0)
      }


      this.vertex_buffer = vertex_buffer
   }
   render():void{
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertex_buffer);
      // Draw the triangle
      //gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
      gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length/3);
   }
}









const mesh:Mesh = new Mesh()






class cMesh {
  position: Array<f32> = new Array<f32>();
  normal: Array<f32>   = new Array<f32>();
  coord: Array<f32>    = new Array<f32>();
}

let current: cMesh = new cMesh();
let meshes = new Array<cMesh>();

export function loadOBJ(obj: string): Array<cMesh> {

  let modelPos = new Array<Array<f32>>();
  let modelNorm = new Array<Array<f32>>();
  let modelUV = new Array<Array<f32>>();

  const newMesh=(): void => {
    current = new cMesh();
    meshes.push(current);
  }

  const lines = obj.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.length == 0 || line.startsWith("#")) continue;

    let parts = line.split(" ");
    let key = parts[0];
    let params = parts.slice(1);

    if (key == "o") {
      newMesh();
    } else if (key == "v") {
      modelPos.push(params.map<f32>(p => <f32>parseFloat(p)));
    } else if (key == "vn") {
      modelNorm.push(params.map<f32>(p => <f32>parseFloat(p)));
    } else if (key == "vt") {
      modelUV.push(params.map<f32>(p => <f32>parseFloat(p)));
    } else if (key == "f" && current) {
      for (let j = 0; j < 3; j++) {
        let idx = params[j].split("/").map<i32>(a => I32.parseInt(a));
        let v = modelPos[idx[0] - 1];
        current.position.push(v[0]); current.position.push(v[1]); current.position.push(v[2]);

        let t = modelUV[idx[1] - 1];
        current.coord.push(t[0]); current.coord.push(t[1]);

        let n = modelNorm[idx[2] - 1];
        current.normal.push(n[0]); current.normal.push(n[1]); current.normal.push(n[2]);
      }
    }
  }

  return meshes;
}










export function setModel(ptr:i32,length:i32):void{
   let text = String.UTF8.decodeUnsafe(ptr, length, true);




   const elements:Array<cMesh> = loadOBJ(text)
   const mesh:cMesh = elements[0]

   log('mesh...: '+mesh.position.length.toString())













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


         mesh.render()

}