import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ColorHSL, ColorLevel, CurveChannel } from '../base/colorManipulation/Color';
export declare class OlWMTSLayer extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        curveRgb: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveRed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveGreen: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveBlue: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        colorLevelRgb: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelRed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelGreen: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelBlue: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        allHSL0: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        redHSL1: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        yellowHSL2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        greenHSL3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        cyanHSL4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        blueHSL5: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        magentaHSL6: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        brightness: number | undefined;
        contrast: number | undefined;
        zIndex: number | undefined;
        url: string | undefined;
        urls: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        attributions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        attributionsCollapsible: boolean | undefined;
        cacheSize: number | undefined;
        crossOrigin: string | undefined;
        interpolate: boolean | undefined;
        tileGrid: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        projection: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        reprojectionErrorThreshold: number | undefined;
        requestEncoding: "KVP" | "REST" | undefined;
        layer: string | undefined;
        style: string | undefined;
        tileClass: string | undefined;
        tilePixelRatio: number | undefined;
        format: string | undefined;
        version: string | undefined;
        matrixSet: string | undefined;
        dimensions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        tileLoadFunction: string | undefined;
        wrapX: boolean | undefined;
        transition: number | undefined;
        zDirection: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    static description: {
        colorLevel: string;
        colorHSL: string;
        curve: string;
        brightness: string;
        contrast: string;
        url: string;
        urls: string;
        attributions: string;
        attributionsCollapsible: string;
        cacheSize: string;
        crossOrigin: string;
        interpolate: string;
        tileGrid: string;
        projection: string;
        reprojectionErrorThreshold: string;
        requestEncoding: string;
        layer: string;
        style: string;
        tileClass: string;
        tilePixelRatio: string;
        format: string;
        version: string;
        matrixSet: string;
        dimensions: string;
        tileLoadFunction: string;
        wrapX: string;
        transition: string;
        zDirection: string;
    };
    static default: {
        colorLevel: {
            shadow: number;
            midtones: number;
            highlight: number;
            outputShadow: number;
            outputHighlight: number;
        };
        colorHSL: {
            hue: number;
            saturation: number;
            lightness: number;
        };
        curve: {
            controlPoints: number[][];
            points: number[][];
            density: number;
        };
        brightness: number;
        contrast: number;
        interpolate: boolean;
        attributionsCollapsible: boolean;
        reprojectionErrorThreshold: number;
        requestEncoding: string;
        style: string;
        tilePixelRatio: number;
        format: string;
        version: string;
        tileLoadFunction: string;
        wrapX: boolean;
        transition: number;
        zDirection: number;
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlWMTSLayer {
    const createDefaultProps: () => {
        show: boolean | undefined;
        curveRgb: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveRed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveGreen: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        curveBlue: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CurveChannel | undefined>;
        colorLevelRgb: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelRed: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelGreen: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        colorLevelBlue: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorLevel | undefined>;
        allHSL0: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        redHSL1: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        yellowHSL2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        greenHSL3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        cyanHSL4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        blueHSL5: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        magentaHSL6: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<ColorHSL | undefined>;
        brightness: number | undefined;
        contrast: number | undefined;
        zIndex: number | undefined;
        url: string | undefined;
        urls: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        attributions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        attributionsCollapsible: boolean | undefined;
        cacheSize: number | undefined;
        crossOrigin: string | undefined;
        interpolate: boolean | undefined;
        tileGrid: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        projection: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        reprojectionErrorThreshold: number | undefined;
        requestEncoding: "KVP" | "REST" | undefined;
        layer: string | undefined;
        style: string | undefined;
        tileClass: string | undefined;
        tilePixelRatio: number | undefined;
        format: string | undefined;
        version: string | undefined;
        matrixSet: string | undefined;
        dimensions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        tileLoadFunction: string | undefined;
        wrapX: boolean | undefined;
        transition: number | undefined;
        zDirection: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
    };
}
export interface OlWMTSLayer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlWMTSLayer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlWMTSLayer.createDefaultProps> & {
    type: string;
}>;
export {};
