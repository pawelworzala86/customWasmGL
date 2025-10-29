import fs from 'fs'

const data=`
/* ClearBufferMask */
export const DEPTH_BUFFER_BIT: GLenum = 0x00000100;
export const STENCIL_BUFFER_BIT: GLenum = 0x00000400;
export const COLOR_BUFFER_BIT: GLenum = 0x00004000;

/* BeginMode */
export const POINTS: GLenum = 0x0000;
export const LINES: GLenum = 0x0001;
export const LINE_LOOP: GLenum = 0x0002;
export const LINE_STRIP: GLenum = 0x0003;
export const TRIANGLES: GLenum = 0x0004;
export const TRIANGLE_STRIP: GLenum = 0x0005;
export const TRIANGLE_FAN: GLenum = 0x0006;

/* AlphaFunction (not supported in ES20) */
/*      NEVER */
/*      LESS */
/*      EQUAL */
/*      LEQUAL */
/*      GREATER */
/*      NOTEQUAL */
/*      GEQUAL */
/*      ALWAYS */

/* BlendingFactorDest */
export const ZERO: GLenum = 0;
export const ONE: GLenum = 1;
export const SRC_COLOR: GLenum = 0x0300;
export const ONE_MINUS_SRC_COLOR: GLenum = 0x0301;
export const SRC_ALPHA: GLenum = 0x0302;
export const ONE_MINUS_SRC_ALPHA: GLenum = 0x0303;
export const DST_ALPHA: GLenum = 0x0304;
export const ONE_MINUS_DST_ALPHA: GLenum = 0x0305;

/* BlendingFactorSrc */
/*      ZERO */
/*      ONE */
export const DST_COLOR: GLenum = 0x0306;
export const ONE_MINUS_DST_COLOR: GLenum = 0x0307;
export const SRC_ALPHA_SATURATE: GLenum = 0x0308;
/*      SRC_ALPHA */
/*      ONE_MINUS_SRC_ALPHA */
/*      DST_ALPHA */
/*      ONE_MINUS_DST_ALPHA */

/* BlendEquationSeparate */
export const FUNC_ADD: GLenum = 0x8006;
export const BLEND_EQUATION: GLenum = 0x8009;
export const BLEND_EQUATION_RGB: GLenum = 0x8009;
export const BLEND_EQUATION_ALPHA: GLenum = 0x883D;

/* BlendSubtract */
export const FUNC_SUBTRACT: GLenum = 0x800A;
export const FUNC_REVERSE_SUBTRACT: GLenum = 0x800B;

/* Separate Blend Functions */
export const BLEND_DST_RGB: GLenum = 0x80C8;
export const BLEND_SRC_RGB: GLenum = 0x80C9;
export const BLEND_DST_ALPHA: GLenum = 0x80CA;
export const BLEND_SRC_ALPHA: GLenum = 0x80CB;
export const CONSTANT_COLOR: GLenum = 0x8001;
export const ONE_MINUS_CONSTANT_COLOR: GLenum = 0x8002;
export const CONSTANT_ALPHA: GLenum = 0x8003;
export const ONE_MINUS_CONSTANT_ALPHA: GLenum = 0x8004;
export const BLEND_COLOR: GLenum = 0x8005;

/* Buffer Objects */
export const ARRAY_BUFFER: GLenum = 0x8892;
export const ELEMENT_ARRAY_BUFFER: GLenum = 0x8893;
export const ARRAY_BUFFER_BINDING: GLenum = 0x8894;
export const ELEMENT_ARRAY_BUFFER_BINDING: GLenum = 0x8895;

export const STREAM_DRAW: GLenum = 0x88E0;
export const STATIC_DRAW: GLenum = 0x88E4;
export const DYNAMIC_DRAW: GLenum = 0x88E8;

export const BUFFER_SIZE: GLenum = 0x8764;
export const BUFFER_USAGE: GLenum = 0x8765;

export const CURRENT_VERTEX_ATTRIB: GLenum = 0x8626;

/* CullFaceMode */
export const FRONT: GLenum = 0x0404;
export const BACK: GLenum = 0x0405;
export const FRONT_AND_BACK: GLenum = 0x0408;

/* DepthFunction */
/*      NEVER */
/*      LESS */
/*      EQUAL */
/*      LEQUAL */
/*      GREATER */
/*      NOTEQUAL */
/*      GEQUAL */
/*      ALWAYS */

/* EnableCap */
/* TEXTURE_2D */
export const CULL_FACE: GLenum = 0x0B44;
export const BLEND: GLenum = 0x0BE2;
export const DITHER: GLenum = 0x0BD0;
export const STENCIL_TEST: GLenum = 0x0B90;
export const DEPTH_TEST: GLenum = 0x0B71;
export const SCISSOR_TEST: GLenum = 0x0C11;
export const POLYGON_OFFSET_FILL: GLenum = 0x8037;
export const SAMPLE_ALPHA_TO_COVERAGE: GLenum = 0x809E;
export const SAMPLE_COVERAGE: GLenum = 0x80A0;

/* ErrorCode */
export const NO_ERROR: GLenum = 0;
export const INVALID_ENUM: GLenum = 0x0500;
export const INVALID_VALUE: GLenum = 0x0501;
export const INVALID_OPERATION: GLenum = 0x0502;
export const OUT_OF_MEMORY: GLenum = 0x0505;

/* FrontFaceDirection */
export const CW: GLenum = 0x0900;
export const CCW: GLenum = 0x0901;

/* GetPName */
export const LINE_WIDTH: GLenum = 0x0B21;
export const ALIASED_POINT_SIZE_RANGE: GLenum = 0x846D;
export const ALIASED_LINE_WIDTH_RANGE: GLenum = 0x846E;
export const CULL_FACE_MODE: GLenum = 0x0B45;
export const FRONT_FACE: GLenum = 0x0B46;
export const DEPTH_RANGE: GLenum = 0x0B70;
export const DEPTH_WRITEMASK: GLenum = 0x0B72;
export const DEPTH_CLEAR_VALUE: GLenum = 0x0B73;
export const DEPTH_FUNC: GLenum = 0x0B74;
export const STENCIL_CLEAR_VALUE: GLenum = 0x0B91;
export const STENCIL_FUNC: GLenum = 0x0B92;
export const STENCIL_FAIL: GLenum = 0x0B94;
export const STENCIL_PASS_DEPTH_FAIL: GLenum = 0x0B95;
export const STENCIL_PASS_DEPTH_PASS: GLenum = 0x0B96;
export const STENCIL_REF: GLenum = 0x0B97;
export const STENCIL_VALUE_MASK: GLenum = 0x0B93;
export const STENCIL_WRITEMASK: GLenum = 0x0B98;
export const STENCIL_BACK_FUNC: GLenum = 0x8800;
export const STENCIL_BACK_FAIL: GLenum = 0x8801;
export const STENCIL_BACK_PASS_DEPTH_FAIL: GLenum = 0x8802;
export const STENCIL_BACK_PASS_DEPTH_PASS: GLenum = 0x8803;
export const STENCIL_BACK_REF: GLenum = 0x8CA3;
export const STENCIL_BACK_VALUE_MASK: GLenum = 0x8CA4;
export const STENCIL_BACK_WRITEMASK: GLenum = 0x8CA5;
export const VIEWPORT: GLenum = 0x0BA2;
export const SCISSOR_BOX: GLenum = 0x0C10;
/*      SCISSOR_TEST */
export const COLOR_CLEAR_VALUE: GLenum = 0x0C22;
export const COLOR_WRITEMASK: GLenum = 0x0C23;
export const UNPACK_ALIGNMENT: GLenum = 0x0CF5;
export const PACK_ALIGNMENT: GLenum = 0x0D05;
export const MAX_TEXTURE_SIZE: GLenum = 0x0D33;
export const MAX_VIEWPORT_DIMS: GLenum = 0x0D3A;
export const SUBPIXEL_BITS: GLenum = 0x0D50;
export const RED_BITS: GLenum = 0x0D52;
export const GREEN_BITS: GLenum = 0x0D53;
export const BLUE_BITS: GLenum = 0x0D54;
export const ALPHA_BITS: GLenum = 0x0D55;
export const DEPTH_BITS: GLenum = 0x0D56;
export const STENCIL_BITS: GLenum = 0x0D57;
export const POLYGON_OFFSET_UNITS: GLenum = 0x2A00;
/*      POLYGON_OFFSET_FILL */
export const POLYGON_OFFSET_FACTOR: GLenum = 0x8038;
export const TEXTURE_BINDING_2D: GLenum = 0x8069;
export const SAMPLE_BUFFERS: GLenum = 0x80A8;
export const SAMPLES: GLenum = 0x80A9;
export const SAMPLE_COVERAGE_VALUE: GLenum = 0x80AA;
export const SAMPLE_COVERAGE_INVERT: GLenum = 0x80AB;

/* GetTextureParameter */
/*      TEXTURE_MAG_FILTER */
/*      TEXTURE_MIN_FILTER */
/*      TEXTURE_WRAP_S */
/*      TEXTURE_WRAP_T */

export const COMPRESSED_TEXTURE_FORMATS: GLenum = 0x86A3;

/* HintMode */
export const DONT_CARE: GLenum = 0x1100;
export const FASTEST: GLenum = 0x1101;
export const NICEST: GLenum = 0x1102;

/* HintTarget */
export const GENERATE_MIPMAP_HINT: GLenum = 0x8192;

/* DataType */
export const BYTE: GLenum = 0x1400;
export const UNSIGNED_BYTE: GLenum = 0x1401;
export const SHORT: GLenum = 0x1402;
export const UNSIGNED_SHORT: GLenum = 0x1403;
export const INT: GLenum = 0x1404;
export const UNSIGNED_INT: GLenum = 0x1405;
export const FLOAT: GLenum = 0x1406;

/* PixelFormat */
export const DEPTH_COMPONENT: GLenum = 0x1902;
export const ALPHA: GLenum = 0x1906;
export const RGB: GLenum = 0x1907;
export const RGBA: GLenum = 0x1908;
export const LUMINANCE: GLenum = 0x1909;
export const LUMINANCE_ALPHA: GLenum = 0x190A;

/* PixelType */
/*      UNSIGNED_BYTE */
export const UNSIGNED_SHORT_4_4_4_4: GLenum = 0x8033;
export const UNSIGNED_SHORT_5_5_5_1: GLenum = 0x8034;
export const UNSIGNED_SHORT_5_6_5: GLenum = 0x8363;

/* Shaders */
export const FRAGMENT_SHADER: GLenum = 0x8B30;
export const VERTEX_SHADER: GLenum = 0x8B31;
export const MAX_VERTEX_ATTRIBS: GLenum = 0x8869;
export const MAX_VERTEX_UNIFORM_VECTORS: GLenum = 0x8DFB;
export const MAX_VARYING_VECTORS: GLenum = 0x8DFC;
export const MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum = 0x8B4D;
export const MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum = 0x8B4C;
export const MAX_TEXTURE_IMAGE_UNITS: GLenum = 0x8872;
export const MAX_FRAGMENT_UNIFORM_VECTORS: GLenum = 0x8DFD;
export const SHADER_TYPE: GLenum = 0x8B4F;
export const DELETE_STATUS: GLenum = 0x8B80;
export const LINK_STATUS: GLenum = 0x8B82;
export const VALIDATE_STATUS: GLenum = 0x8B83;
export const ATTACHED_SHADERS: GLenum = 0x8B85;
export const ACTIVE_UNIFORMS: GLenum = 0x8B86;
export const ACTIVE_ATTRIBUTES: GLenum = 0x8B89;
export const SHADING_LANGUAGE_VERSION: GLenum = 0x8B8C;
export const CURRENT_PROGRAM: GLenum = 0x8B8D;

/* StencilFunction */
export const NEVER: GLenum = 0x0200;
export const LESS: GLenum = 0x0201;
export const EQUAL: GLenum = 0x0202;
export const LEQUAL: GLenum = 0x0203;
export const GREATER: GLenum = 0x0204;
export const NOTEQUAL: GLenum = 0x0205;
export const GEQUAL: GLenum = 0x0206;
export const ALWAYS: GLenum = 0x0207;

/* StencilOp */
/*      ZERO */
export const KEEP: GLenum = 0x1E00;
export const REPLACE: GLenum = 0x1E01;
export const INCR: GLenum = 0x1E02;
export const DECR: GLenum = 0x1E03;
export const INVERT: GLenum = 0x150A;
export const INCR_WRAP: GLenum = 0x8507;
export const DECR_WRAP: GLenum = 0x8508;

/* StringName */
export const VENDOR: GLenum = 0x1F00;
export const RENDERER: GLenum = 0x1F01;
export const VERSION: GLenum = 0x1F02;

/* TextureMagFilter */
export const NEAREST: GLenum = 0x2600;
export const LINEAR: GLenum = 0x2601;

/* TextureMinFilter */
/*      NEAREST */
/*      LINEAR */
export const NEAREST_MIPMAP_NEAREST: GLenum = 0x2700;
export const LINEAR_MIPMAP_NEAREST: GLenum = 0x2701;
export const NEAREST_MIPMAP_LINEAR: GLenum = 0x2702;
export const LINEAR_MIPMAP_LINEAR: GLenum = 0x2703;

/* TextureParameterName */
export const TEXTURE_MAG_FILTER: GLenum = 0x2800;
export const TEXTURE_MIN_FILTER: GLenum = 0x2801;
export const TEXTURE_WRAP_S: GLenum = 0x2802;
export const TEXTURE_WRAP_T: GLenum = 0x2803;

/* TextureTarget */
export const TEXTURE_2D: GLenum = 0x0DE1;
export const TEXTURE: GLenum = 0x1702;

export const TEXTURE_CUBE_MAP: GLenum = 0x8513;
export const TEXTURE_BINDING_CUBE_MAP: GLenum = 0x8514;
export const TEXTURE_CUBE_MAP_POSITIVE_X: GLenum = 0x8515;
export const TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum = 0x8516;
export const TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum = 0x8517;
export const TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum = 0x8518;
export const TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum = 0x8519;
export const TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum = 0x851A;
export const MAX_CUBE_MAP_TEXTURE_SIZE: GLenum = 0x851C;

/* TextureUnit */
export const TEXTURE0: GLenum = 0x84C0;
export const TEXTURE1: GLenum = 0x84C1;
export const TEXTURE2: GLenum = 0x84C2;
export const TEXTURE3: GLenum = 0x84C3;
export const TEXTURE4: GLenum = 0x84C4;
export const TEXTURE5: GLenum = 0x84C5;
export const TEXTURE6: GLenum = 0x84C6;
export const TEXTURE7: GLenum = 0x84C7;
export const TEXTURE8: GLenum = 0x84C8;
export const TEXTURE9: GLenum = 0x84C9;
export const TEXTURE10: GLenum = 0x84CA;
export const TEXTURE11: GLenum = 0x84CB;
export const TEXTURE12: GLenum = 0x84CC;
export const TEXTURE13: GLenum = 0x84CD;
export const TEXTURE14: GLenum = 0x84CE;
export const TEXTURE15: GLenum = 0x84CF;
export const TEXTURE16: GLenum = 0x84D0;
export const TEXTURE17: GLenum = 0x84D1;
export const TEXTURE18: GLenum = 0x84D2;
export const TEXTURE19: GLenum = 0x84D3;
export const TEXTURE20: GLenum = 0x84D4;
export const TEXTURE21: GLenum = 0x84D5;
export const TEXTURE22: GLenum = 0x84D6;
export const TEXTURE23: GLenum = 0x84D7;
export const TEXTURE24: GLenum = 0x84D8;
export const TEXTURE25: GLenum = 0x84D9;
export const TEXTURE26: GLenum = 0x84DA;
export const TEXTURE27: GLenum = 0x84DB;
export const TEXTURE28: GLenum = 0x84DC;
export const TEXTURE29: GLenum = 0x84DD;
export const TEXTURE30: GLenum = 0x84DE;
export const TEXTURE31: GLenum = 0x84DF;
export const ACTIVE_TEXTURE: GLenum = 0x84E0;

/* TextureWrapMode */
export const REPEAT: GLenum = 0x2901;
export const CLAMP_TO_EDGE: GLenum = 0x812F;
export const MIRRORED_REPEAT: GLenum = 0x8370;

/* Uniform Types */
export const FLOAT_VEC2: GLenum = 0x8B50;
export const FLOAT_VEC3: GLenum = 0x8B51;
export const FLOAT_VEC4: GLenum = 0x8B52;
export const INT_VEC2: GLenum = 0x8B53;
export const INT_VEC3: GLenum = 0x8B54;
export const INT_VEC4: GLenum = 0x8B55;
export const BOOL: GLenum = 0x8B56;
export const BOOL_VEC2: GLenum = 0x8B57;
export const BOOL_VEC3: GLenum = 0x8B58;
export const BOOL_VEC4: GLenum = 0x8B59;
export const FLOAT_MAT2: GLenum = 0x8B5A;
export const FLOAT_MAT3: GLenum = 0x8B5B;
export const FLOAT_MAT4: GLenum = 0x8B5C;
export const SAMPLER_2D: GLenum = 0x8B5E;
export const SAMPLER_CUBE: GLenum = 0x8B60;

/* Vertex Arrays */
export const VERTEX_ATTRIB_ARRAY_ENABLED: GLenum = 0x8622;
export const VERTEX_ATTRIB_ARRAY_SIZE: GLenum = 0x8623;
export const VERTEX_ATTRIB_ARRAY_STRIDE: GLenum = 0x8624;
export const VERTEX_ATTRIB_ARRAY_TYPE: GLenum = 0x8625;
export const VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum = 0x886A;
export const VERTEX_ATTRIB_ARRAY_POINTER: GLenum = 0x8645;
export const VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum = 0x889F;

/* Shader Source */
export const COMPILE_STATUS: GLenum = 0x8B81;

/* Shader Precision-Specified Types */
export const LOW_FLOAT: GLenum = 0x8DF0;
export const MEDIUM_FLOAT: GLenum = 0x8DF1;
export const HIGH_FLOAT: GLenum = 0x8DF2;
export const LOW_INT: GLenum = 0x8DF3;
export const MEDIUM_INT: GLenum = 0x8DF4;
export const HIGH_INT: GLenum = 0x8DF5;

/* Framebuffer Object. */
export const FRAMEBUFFER: GLenum = 0x8D40;
export const RENDERBUFFER: GLenum = 0x8D41;

export const RGBA4: GLenum = 0x8056;
export const RGB5_A1: GLenum = 0x8057;
export const RGB565: GLenum = 0x8D62;
export const DEPTH_COMPONENT16: GLenum = 0x81A5;
export const STENCIL_INDEX: GLenum = 0x1901;
export const STENCIL_INDEX8: GLenum = 0x8D48;
export const DEPTH_STENCIL: GLenum = 0x84F9;

export const RENDERBUFFER_WIDTH: GLenum = 0x8D42;
export const RENDERBUFFER_HEIGHT: GLenum = 0x8D43;
export const RENDERBUFFER_INTERNAL_FORMAT: GLenum = 0x8D44;
export const RENDERBUFFER_RED_SIZE: GLenum = 0x8D50;
export const RENDERBUFFER_GREEN_SIZE: GLenum = 0x8D51;
export const RENDERBUFFER_BLUE_SIZE: GLenum = 0x8D52;
export const RENDERBUFFER_ALPHA_SIZE: GLenum = 0x8D53;
export const RENDERBUFFER_DEPTH_SIZE: GLenum = 0x8D54;
export const RENDERBUFFER_STENCIL_SIZE: GLenum = 0x8D55;

export const FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum = 0x8CD0;
export const FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum = 0x8CD1;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum = 0x8CD2;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum = 0x8CD3;

export const COLOR_ATTACHMENT0: GLenum = 0x8CE0;
export const DEPTH_ATTACHMENT: GLenum = 0x8D00;
export const STENCIL_ATTACHMENT: GLenum = 0x8D20;
export const DEPTH_STENCIL_ATTACHMENT: GLenum = 0x821A;

export const NONE: GLenum = 0;

export const FRAMEBUFFER_COMPLETE: GLenum = 0x8CD5;
export const FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum = 0x8CD6;
export const FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum = 0x8CD7;
export const FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum = 0x8CD9;
export const FRAMEBUFFER_UNSUPPORTED: GLenum = 0x8CDD;

export const FRAMEBUFFER_BINDING: GLenum = 0x8CA6;
export const RENDERBUFFER_BINDING: GLenum = 0x8CA7;
export const MAX_RENDERBUFFER_SIZE: GLenum = 0x84E8;

export const INVALID_FRAMEBUFFER_OPERATION: GLenum = 0x0506;

/* WebGL-specific enums */
export const UNPACK_FLIP_Y_WEBGL: GLenum = 0x9240;
export const UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum = 0x9241;
export const CONTEXT_LOST_WEBGL: GLenum = 0x9242;
export const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
export const BROWSER_DEFAULT_WEBGL: GLenum = 0x9244;`

const res = []
data.replace(/export const .*/gm,match=>{
    const name = match.split(':')[0].replace('export const','').trim()
    const value = match.split('=')[1].replace('\;','').trim()
    res.push(`  get ${name}(): GLenum {
		return ${value}
	}`)
})



fs.writeFileSync('./consts.txt',res.join('\n'))