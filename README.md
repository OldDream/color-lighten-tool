# color-lighten-tool

Output = Input color + opacity + white background


Language : English | [中文](./README.zh-CN.md)

📦 `UMD module` & `ESModule`, offer `.d.ts` file to support Typescript.

### Install

```bash
npm i color-lighten-tool
```



### API

`function colorLightenTool(color: string, opacity: number[, bgColor: {r, g, b}]): string`

```js
import colorLightenTool from 'color-lighten-tool'

const outPutColor = colorLightenTool('rgb(255,0,0)', 0.4) // rgb(255,153,153)
const outPutColor = colorLightenTool('#FF0000', 0.4) // rgb(255,153,153)
```



### DEMO

[Code Sandbox](https://codesandbox.io/s/color-lighten-tool-demo-g1851?file=/index.html)

Or Check `demo.html` in Git for more detail .

