import { NativeNumber16Type } from 'xbsj-xe2/dist-node/xe2-base-objects';
import * as Cesium from 'cesium';
export declare type CzmClassificationType = 'TERRAIN' | 'CESIUM_3D_TILE' | 'BOTH' | 'NONE';
export declare type CzmSplitDirection = "LEFT" | "NONE" | "RIGHT";
export declare type CzmAxis = "X" | "Y" | "Z";
export declare type CzmShadowMode = 'DISABLED' | 'ENABLED' | 'CAST_ONLY' | 'RECEIVE_ONLY';
export declare const czmEllipsoidWGS84: [number, number, number];
declare type Number3 = [number, number, number];
export declare type CzmImageBasedLightingJsonType = {
    imageBasedLightingFactor?: [number, number];
    luminanceAtZenith?: number;
    sphericalHarmonicCoefficients?: [Number3, Number3, Number3, Number3, Number3, Number3, Number3, Number3, Number3];
    specularEnvironmentMaps?: string;
};
export declare type CzmClippingPlaneJsonType = {
    normal: [number, number, number];
    distance: number;
};
export declare type CzmClippingPlaneCollectionJsonType = {
    planes?: CzmClippingPlaneJsonType[];
    enabled?: boolean;
    modelMatrix?: NativeNumber16Type;
    unionClippingRegions?: boolean;
    edgeColor?: [number, number, number, number];
    edgeWidth?: number;
};
export declare type CzmPointCloudShadingJsonType = {
    attenuation: boolean;
    geometricErrorScale: number;
    maximumAttenuation: number;
    baseResolution?: number;
    eyeDomeLighting: boolean;
    eyeDomeLightingStrength: number;
    eyeDomeLightingRadius: number;
    backFaceCulling: boolean;
    normalShading: boolean;
};
/**
 * Cesium中枚举类型映射
 */
export declare namespace czmPropMaps {
    const heightReferencePropsMap: {
        NONE: Cesium.HeightReference;
        CLAMP_TO_GROUND: Cesium.HeightReference;
        RELATIVE_TO_GROUND: Cesium.HeightReference;
    };
    const shadowPropsMap: {
        DISABLED: Cesium.ShadowMode;
        CAST_ONLY: Cesium.ShadowMode;
        ENABLED: Cesium.ShadowMode;
        RECEIVE_ONLY: Cesium.ShadowMode;
    };
    const classificationTypeMap: {
        TERRAIN: Cesium.ClassificationType;
        CESIUM_3D_TILE: Cesium.ClassificationType;
        BOTH: Cesium.ClassificationType;
        NONE: undefined;
    };
    const textureMinificationFilterType: {
        NEAREST: Cesium.TextureMinificationFilter;
        LINEAR: Cesium.TextureMinificationFilter;
        NEAREST_MIPMAP_NEAREST: Cesium.TextureMinificationFilter;
        LINEAR_MIPMAP_NEAREST: Cesium.TextureMinificationFilter;
        NEAREST_MIPMAP_LINEAR: Cesium.TextureMinificationFilter;
        LINEAR_MIPMAP_LINEAR: Cesium.TextureMinificationFilter;
    };
    const textureMagnificationFilterType: {
        NEAREST: Cesium.TextureMagnificationFilter;
        LINEAR: Cesium.TextureMagnificationFilter;
    };
    const colorBlendModeType: {
        HIGHLIGHT: Cesium.ColorBlendMode;
        REPLACE: Cesium.ColorBlendMode;
        MIX: Cesium.ColorBlendMode;
    };
    const horizontalOriginType: {
        CENTER: Cesium.HorizontalOrigin;
        LEFT: Cesium.HorizontalOrigin;
        RIGHT: Cesium.HorizontalOrigin;
    };
    const verticalOriginOriginType: {
        CENTER: Cesium.VerticalOrigin;
        BOTTOM: Cesium.VerticalOrigin;
        BASELINE: Cesium.VerticalOrigin;
        TOP: Cesium.VerticalOrigin;
    };
    const labelStyleType: {
        FILL: Cesium.LabelStyle;
        OUTLINE: Cesium.LabelStyle;
        FILL_AND_OUTLINE: Cesium.LabelStyle;
    };
    const blendOptionType: {
        OPAQUE: Cesium.BlendOption;
        TRANSLUCENT: Cesium.BlendOption;
        OPAQUE_AND_TRANSLUCENT: Cesium.BlendOption;
    };
}
export {};
