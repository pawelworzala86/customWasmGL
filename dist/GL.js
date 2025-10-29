export function initGL(importObject) {
    if (importObject.GL == null) {
        importObject.GL = {};
    }

    const GL = importObject.GL

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

    importObject.GL.createContextFromCanvas = (canvas_id) => {
        console.log('TEST AAA')
        return 0
    }
}