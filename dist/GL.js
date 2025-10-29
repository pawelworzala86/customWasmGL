export function initGL(importObject) {
    if (importObject.GL == null) {
        importObject.GL = {};
    }

    const GL = importObject.GL

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
        const buffer = WebGL.memory.buffer;

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
        return 0
    }
}