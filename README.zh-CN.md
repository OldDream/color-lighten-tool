# color-lighten-tool

一个让颜色变淡的工具，类似于：输入色值 * 透明度 + 白色背景 = 输出色值。

Language : [English]((./README.md)) | 中文



📦 格式多（UMD module + ESModule + Typescript）.



### 安装

```
npm i color-lighten-tool
```



### API

`function colorLightenTool(color: string, opacity: number): string`

```js
import colorLightenTool from 'color-lighten-tool'

const outPutColor = colorLightenTool('rgb(255,0,0)', 0.4) // rgb(255,153,153)
const outPutColor = colorLightenTool('#FF0000', 0.4) // rgb(255,153,153)
````



对于高级用户，可传入自定义背景色，输出 = 输入色值 * 透明度 + 自定义背景色

`function colorLightenTool(color: string, opacity: number[, bgColor: {r: number, g: number, b: number}]): string`



### DEMO

[Code Sandbox](https://codesandbox.io/s/color-lighten-tool-demo-g1851?file=/index.html)

具体代码详见git中的 `demo.html` .

