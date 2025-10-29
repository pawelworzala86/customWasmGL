export function initGL(importObject) {
    if (importObject.GL == null) {
        importObject.GL = {};
    }

    const GL = importObject.GL

    const context = []
    importObject.GL.context = context

    const buffer = []
    importObject.GL.buffer = buffer

    const shader = []
    importObject.GL.shader = shader

    const program = []
    importObject.GL.program = program

    importObject.GL.memory = importObject.env.memory;

    importObject.GL.getString = (string_index) => {
        const buffer = GL.memory.buffer;
        const U32 = new Uint32Array(buffer);
        const id_addr = string_index / 4 - 2;
        const id = U32[id_addr];
        if (id !== 0x01) throw Error(`not a string index=${string_index} id=${id}`);
        const len = U32[id_addr + 1];
        const str = new TextDecoder('utf-16').decode(buffer.slice(string_index, string_index + len));
        return str;
    }

    importObject.GL.getArray = (ptr, length, type = 'i32') => {
        const buffer = GL.memory.buffer;

        switch (type) {
            case 'i8':  return new Int8Array(buffer, ptr, length);
            case 'u8':  return new Uint8Array(buffer, ptr, length);
            case 'i16': return new Int16Array(buffer, ptr, length / 2);
            case 'u16': return new Uint16Array(buffer, ptr, length / 2);
            case 'i32': return new Int32Array(buffer, ptr, length / 4);
            case 'u32': return new Uint32Array(buffer, ptr, length / 4);
            case 'f32': return new Float32Array(buffer, ptr, length / 4);
            case 'f64': return new Float64Array(buffer, ptr, length / 8);
            default: throw new Error(`Unsupported type: ${type}`);
        }
    };
    //const arr = importObject.WebGL.getArray(arrayPtr, arrayLen * 4, 'i32');
    //console.log([...arr]);

    importObject.GL.log = (string_index) => {
        const text = GL.getString(string_index)
        console.log(text);
    }

    importObject.GL.createContextFromCanvas = (canvas_id) => {
        const canvasId = GL.getString(canvas_id)
        console.log('TEST ID = ',canvasId)
        const canvas = document.getElementById(canvasId)
        const gl = canvas.getContext('webgl2')
        context.push(gl)
        return context.length-1
    }

    importObject.GL.createBuffer = (gl_id) => {
        const buffer = context[gl_id].createBuffer()
        GL.buffer.push(buffer)
        return GL.buffer.length-1
    }

    importObject.GL.bindBuffer = (gl_id, type, buffer) => {
        context[gl_id].bindBuffer(type, GL.buffer[buffer])
    }

    importObject.GL.bufferData = (gl_id, type, array, arrayLen, kind) => {
        //return context[gl_id].bindBuffer(type, buffer)
        const data = GL.getArray(array, arrayLen, 'i8')
        //console.log('data F32',data)
        context[gl_id].bufferData(type, data, kind);
    }

    importObject.GL.createShader = (gl_id, type) => {
        const shader = context[gl_id].createShader(type)
        GL.shader.push(shader)
        return GL.shader.length-1
    }

    importObject.GL.shaderSource = (gl_id, shaderID, code) => {
        code = GL.getString(code)
        context[gl_id].shaderSource(shader[shaderID],code)
    }

    importObject.GL.compileShader = (gl_id, shaderID) => {
        context[gl_id].compileShader(shader[shaderID])
    }

    importObject.GL.createProgram = (gl_id) => {
        const program = context[gl_id].createProgram()
        GL.program.push(program)
        return GL.program.length-1
    }

    importObject.GL.attachShader = (gl_id,programID,shaderID) => {
        context[gl_id].attachShader(program[programID],shader[shaderID])
    }

    importObject.GL.linkProgram = (gl_id,programID) => {
        context[gl_id].linkProgram(program[programID])
    }

    importObject.GL.useProgram = (gl_id,programID) => {
        context[gl_id].useProgram(program[programID])
    }

    importObject.GL.getAttribLocation = (gl_id,programID, name) => {
        name = GL.getString(name)
        const attrLoc = context[gl_id].getAttribLocation(program[programID], name)
        return attrLoc
    }

    importObject.GL.vertexAttribPointer = (gl_id, attrLoc, size, type, p1, p2, p3) => {
        context[gl_id].vertexAttribPointer(attrLoc, size, type, p1, p2, p3)
    }

    importObject.GL.enableVertexAttribArray = (gl_id, attrLoc) => {
        context[gl_id].enableVertexAttribArray( attrLoc)
    }

    importObject.GL.clearColor = (gl_id, c1,c2,c3,a) => {
        context[gl_id].clearColor( c1,c2,c3,a )
    }

    importObject.GL.enable = (gl_id, kind) => {
        context[gl_id].enable( kind )
    }

    importObject.GL.clear = (gl_id, kind) => {
        context[gl_id].clear( kind )
    }

    importObject.GL.viewport = (gl_id, l1,l2,w,h) => {
        context[gl_id].viewport( l1,l2,w,h )
    }

    importObject.GL.drawElements = (gl_id, kind, length, size, offset) => {
        context[gl_id].drawElements( kind, length, size, offset )
    }

}