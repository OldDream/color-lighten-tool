declare type RBGColor = {
    r: number;
    g: number;
    b: number;
};
/**
 * input color * opacity + white background = output
 * @param inputColor a HEX (6 characters) or RGB color string
 * @param opacity from 1 to 0, default 1
 * @param bgCol background color, default #fff, white
 * @returns RGB color string
 */
declare function colorLightenTool(inputColor?: string, opacity?: number, bgCol?: RBGColor): string;

export { colorLightenTool as default };
