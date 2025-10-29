export function initEngine(importObject) {
    if (importObject.Engine == null) {
        importObject.Engine = {};
    }

    importObject.Engine.logString = function(strPtr,strLen){
        const memory = new Uint8Array(importObject.env.memory.buffer, strPtr, strLen);

        // Dekoduj string UTF-8
        const decoder = new TextDecoder("utf-8");
        const str = decoder.decode(memory);

        // Wyświetl odczytany string
        console.log("String from WASM:", str);
    }
}