import { CzmImageryProviderJsonType, CzmTilingSchemaJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare function getTilingSchemeStr(tilingScheme: CzmTilingSchemaJsonType): "new Cesium.GeographicTilingScheme()" | "new Cesium.WebMercatorTilingScheme()" | undefined;
export declare function getCzmCode(imageryProviderJson: CzmImageryProviderJsonType): string | undefined;
export declare class CzmImagery extends ESSceneObject {
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
        show: boolean | undefined;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        alpha: number | undefined;
        nightAlpha: number | undefined;
        dayAlpha: number | undefined;
        brightness: number | undefined;
        contrast: number | undefined;
        hue: number | undefined;
        saturation: number | undefined;
        gamma: number | undefined;
        splitDirection: CzmSplitDirectionType | undefined;
        minificationFilter: CzmTextureMinificationFilterType | undefined;
        magnificationFilter: CzmTextureMagnificationFilterType | undefined;
        maximumAnisotropy: number | undefined;
        minimumTerrainLevel: number | undefined;
        maximumTerrainLevel: number | undefined;
        cutoutRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        colorToAlpha: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        colorToAlphaThreshold: number | undefined;
        imageryProvider: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmImageryProviderJsonType | undefined>;
        zIndex: number;
        hasAlphaChannel: boolean | undefined;
        pickFeaturesUrl: string | undefined;
        enablePickFeatures: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    getCzmCode(): string | undefined;
    constructor(id?: SceneObjectKey);
    static defaults: {
        show: boolean;
        rectangle: [number, number, number, number];
        alpha: number;
        nightAlpha: number;
        dayAlpha: number;
        brightness: number;
        contrast: number;
        hue: number;
        saturation: number;
        gamma: number;
        splitDirection: CzmSplitDirectionType;
        minificationFilter: CzmTextureMinificationFilterType;
        magnificationFilter: CzmTextureMagnificationFilterType;
        maximumAnisotropy: number;
        minimumTerrainLevel: number;
        maximumTerrainLevel: number;
        cutoutRectangle: [number, number, number, number];
        colorToAlpha: [number, number, number, number];
        colorToAlphaThreshold: number;
        imageryProvider: CzmImageryProviderJsonType;
        zIndex: number;
        hasAlphaChannel: boolean;
        pickFeaturesUrl: string;
        enablePickFeatures: boolean;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare type CzmSplitDirectionType = 'LEFT' | 'NONE' | 'RIGHT';
export declare type CzmTextureMinificationFilterType = 'NEAREST' | 'LINEAR' | 'NEAREST_MIPMAP_NEAREST' | 'LINEAR_MIPMAP_NEAREST' | 'NEAREST_MIPMAP_LINEAR' | 'LINEAR_MIPMAP_LINEAR';
export declare type CzmTextureMagnificationFilterType = 'NEAREST' | 'LINEAR';
export declare namespace CzmImagery {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        alpha: number | undefined;
        nightAlpha: number | undefined;
        dayAlpha: number | undefined;
        brightness: number | undefined;
        contrast: number | undefined;
        hue: number | undefined;
        saturation: number | undefined;
        gamma: number | undefined;
        splitDirection: CzmSplitDirectionType | undefined;
        minificationFilter: CzmTextureMinificationFilterType | undefined;
        magnificationFilter: CzmTextureMagnificationFilterType | undefined;
        maximumAnisotropy: number | undefined;
        minimumTerrainLevel: number | undefined;
        maximumTerrainLevel: number | undefined;
        cutoutRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[west: number, south: number, east: number, north: number] | undefined>;
        colorToAlpha: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        colorToAlphaThreshold: number | undefined;
        imageryProvider: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmImageryProviderJsonType | undefined>;
        zIndex: number;
        hasAlphaChannel: boolean | undefined;
        pickFeaturesUrl: string | undefined;
        enablePickFeatures: boolean | undefined;
    };
}
export interface CzmImagery extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmImagery.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmImagery.createDefaultProps> & {
    type: string;
}>;
export {};
