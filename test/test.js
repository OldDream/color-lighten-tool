// test.js  jest配置文件
import colorLightenTool from  '../src/index'

test('Input rgb rgb(255,0,0) + 0.4 opacity', () => {
  colorLightenTool()
  expect(colorLightenTool('rgb(255,0,0)', 0.4)).toBe('rgb(255,153,153)')
});


test('Input HEX #FF0000 + 0.4 opacity', () => {
  colorLightenTool()
  expect(colorLightenTool('#FF0000', 0.4)).toBe('rgb(255,153,153)')
});
