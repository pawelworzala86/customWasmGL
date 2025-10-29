/*import {
  WebGLRenderingContext,
} from './WebGL';*/

import { 
  loadModel, 
  logString,
} from './Engine';

import { 
  WebGLRenderingContext,
} from './GL';


function logStr(str: string):void{
  const kaiPtr = changetype<usize>(String.UTF8.encode(str));
  logString(kaiPtr,str.length)
}








logStr('started...')

const gl = new WebGLRenderingContext('cnvs')


export function displayLoop(): void {
  /*gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  if(!loaded){
    loadModels()
  }

  for(let i=0;i<models.length;i++){
      models[i].render(projection_matrix, camera_matrix)
  }*/
}