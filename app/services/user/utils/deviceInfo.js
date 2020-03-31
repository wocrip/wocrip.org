export const GetGPUName = () => {
  const canvas = document.createElement('canvas')
  let gl, debugInfo, vendor
  let renderer = ""

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  } catch (e) {
  }

  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
  }

  return renderer
}
