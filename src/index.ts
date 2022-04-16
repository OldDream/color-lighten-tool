function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16), // r
    parseInt(result[2], 16), // g
    parseInt(result[3], 16) // b
  ] : null;
}

/**
 * 
 * @param inputColor 
 * @param opacity 
 * @returns RGBcolor
 */
function colorLightenTool(inputColor: string = "", opacity: number = 1): string {
  // check color code type HEX or RGB
  const inputColorObj = {
    r: 0,
    g: 0,
    b: 0
  }
  if (inputColor.indexOf('rgb(') !== -1) {
    // inputColor is RGB
    console.log('isRGB')
    const matchColors = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    const match = matchColors.exec(inputColor);
    if (match !== null) {
      inputColorObj.r = Number(match[1])
      inputColorObj.g = Number(match[2])
      inputColorObj.b = Number(match[3])
    }
  } else {
    // inputColor is HEX
    const match = hexToRgb(inputColor)
    if (match !== null) {
      inputColorObj.r = match[0]
      inputColorObj.g = match[1]
      inputColorObj.b = match[2]
    } else {
      return ''
    }
  }
  const bgCol = { r: 255, g: 255, b: 255 };
  const flattenedColor = {
    r: opacity * inputColorObj.r + (1 - opacity) * bgCol.r,
    g: opacity * inputColorObj.g + (1 - opacity) * bgCol.g,
    b: opacity * inputColorObj.b + (1 - opacity) * bgCol.b,
  };
  return `rgb(${flattenedColor.r},${flattenedColor.g},${flattenedColor.b})`
}

export default colorLightenTool