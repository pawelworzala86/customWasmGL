export type WebGLRenderingContextId = i32;

export declare function createContextFromCanvas(canvas_id: string): WebGLRenderingContextId;

export class WebGLRenderingContext{

    gl_id: WebGLRenderingContextId;

    constructor(canvas_id: string){
        this.gl_id = createContextFromCanvas(canvas_id);
    }

}