import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ComplexImage, ComplexImageType, CzmPixelFormatType, SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare type CzmTextureCopyParams = {
    source: {
        width: number;
        height: number;
        arrayBufferView: ArrayBufferView;
    } | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    xOffset?: number;
    yOffset?: number;
    skipColorSpaceConversion?: boolean;
};
export declare type CzmTextureUriTypeType = ComplexImageType;
export { CzmPixelFormatType };
export declare class CzmTexture extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
        pixelFormat: CzmPixelFormatType;
        flipY: boolean;
        uri: string;
        uriType: ComplexImageType | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static readonly types: string[];
    static readonly suffixTypes: {
        [k: string]: ComplexImageType;
    };
    private _complexImage;
    get complexImage(): ComplexImage;
    copyTexture(params: CzmTextureCopyParams): void;
    copyFromImage(image: HTMLImageElement): void;
    copyFromCanvas(canvas: HTMLCanvasElement): void;
    private _copyFromClipboardProcessing;
    copyFromClipboard(): void;
    constructor(id?: SceneObjectKey);
    static defaults: {
        size: [number, number];
        uriType: string;
        czmPixelFormats: string[];
        uriTypes: string[];
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmTexture {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        enabled: boolean;
        size: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[width: number, height: number] | undefined>;
        pixelFormat: CzmPixelFormatType;
        flipY: boolean;
        uri: string;
        uriType: ComplexImageType | undefined;
    };
}
export interface CzmTexture extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmTexture.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmTexture.createDefaultProps> & {
    type: string;
}>;
