import { PickedInfo, PositionEditing, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, JsonValue, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { NativeNumber16Type } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import * as Cesium from 'cesium';
export declare type CzmModelNodeTransformation = {
    translationX: number;
    translationY: number;
    translationZ: number;
    rotationHeading: number;
    rotationPitch: number;
    rotationRoll: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
};
export declare type CzmModelNodeTransformations = {
    [nodeName: string]: CzmModelNodeTransformation;
};
export declare type CzmModelAnimationLoopType = 'NONE' | 'REPEAT' | 'MIRRORED_REPEAT';
export declare function getCzmModelAnimationLoop(value: CzmModelAnimationLoopType): Cesium.ModelAnimationLoop;
export declare type CzmModelAnimationType = {
    name?: string;
    index?: number;
    startTime?: Cesium.JulianDate;
    delay?: number;
    stopTime?: Cesium.JulianDate;
    removeOnStop?: boolean;
    multiplier?: number;
    reverse?: boolean;
    loop?: Cesium.ModelAnimationLoop;
    animationTime?: (duration: number, seconds: number) => number;
};
export declare type CzmModelAnimationJsonType = {
    name?: string;
    index?: number;
    startTime?: number;
    delay?: number;
    stopTime?: number;
    removeOnStop?: boolean;
    multiplier?: number;
    reverse?: boolean;
    loop?: CzmModelAnimationLoopType;
    animationTime?: string;
};
export declare type CzmModelPrimitiveCustomShaderClassType = {
    destroy(): undefined;
    get customShader(): any;
};
export declare type CzmModelPrimitiveCustomShaderInstanceClassType = new (czmModelPrimitive: CzmModelPrimitive, viewer: Viewer) => CzmModelPrimitiveCustomShaderClassType;
export declare class CzmModelPrimitive extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        url: string | undefined;
        positionEditing: boolean;
        allowPicking: boolean | undefined;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        showSceneScale: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        forwardAxis: 0 | 1 | 2 | undefined;
        upAxis: 0 | 1 | 2 | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        silhouetteColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        shadows: "DISABLED" | "ENABLED" | "CAST_ONLY" | "RECEIVE_ONLY" | undefined;
        credit: string | undefined;
        basePath: string | undefined;
        heightReference: "NONE" | "CLAMP_TO_GROUND" | "RELATIVE_TO_GROUND" | undefined;
        distanceDisplayCondition: [number, number] | undefined;
        colorBlendMode: "HIGHLIGHT" | "REPLACE" | "MIX" | undefined;
        incrementallyLoadTextures: boolean | undefined;
        asynchronous: boolean | undefined;
        clampAnimations: boolean | undefined;
        debugShowBoundingVolume: boolean | undefined;
        debugWireframe: boolean | undefined;
        backFaceCulling: boolean | undefined;
        showOutline: boolean | undefined;
        colorBlendAmount: number | undefined;
        silhouetteSize: number | undefined;
        imageBasedLightingFactor: [number, number] | undefined;
        lightColor: [number, number, number] | undefined;
        luminanceAtZenith: number | undefined;
        sphericalHarmonicCoefficients: [number, number, number][] | undefined;
        specularEnvironmentMaps: string | undefined;
        customShaderInstanceClassStr: string | undefined;
        activeAnimationsJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelAnimationJsonType[] | undefined>;
        activeAnimationsAnimateWhilePaused: boolean | undefined;
        nodeTransformations: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelNodeTransformations | undefined>;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
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
    get geoJson(): JsonValue;
    set geoJson(value: JsonValue);
    get geoJsonStr(): string;
    set geoJsonStr(value: string);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _customShaderInstanceClass;
    get customShaderInstanceClass(): CzmModelPrimitiveCustomShaderInstanceClassType | undefined;
    set customShaderInstanceClass(value: CzmModelPrimitiveCustomShaderInstanceClassType | undefined);
    get customShaderInstanceClassChanged(): Listener<[CzmModelPrimitiveCustomShaderInstanceClassType | undefined, CzmModelPrimitiveCustomShaderInstanceClassType | undefined]>;
    private _updateCustomShaderEvent;
    get updateCustomShaderEvent(): Event<[(customShaderInstance: CzmModelPrimitiveCustomShaderClassType, sceneObject: CzmModelPrimitive, viewer: Viewer) => void]>;
    updateCustomShader(func: (customShaderInstance: CzmModelPrimitiveCustomShaderClassType) => void): void;
    private _activeAnimations;
    get activeAnimations(): CzmModelAnimationType[] | undefined;
    get activeAnimationsChanged(): Listener<[CzmModelAnimationType[] | undefined, CzmModelAnimationType[] | undefined]>;
    set activeAnimations(value: CzmModelAnimationType[] | undefined);
    static defaults: {
        activeAnimationsAnimateWhilePaused: boolean;
        viewDistanceRange: [number, number, number, number];
        viewerTagsEnums: [string, string][];
    };
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(id?: SceneObjectKey);
    /**
     * 打开本地目录，加载本地gltf数据，注意只能打开gltf文件所在目录
    */
    openLocalDir(): Promise<void>;
    /**
     * 删除某个node节点的transformation配置
     * @param nodeName
     * @returns
     */
    deleteNodeTransformation(nodeName: string): void;
    setNodeTranslation(nodeName: string, translation: [number, number, number]): void;
    getNodeTranslation(nodeName: string): [number, number, number] | undefined;
    setNodeRotation(nodeName: string, rotation: [number, number, number]): void;
    getNodeRotation(nodeName: string): [number, number, number] | undefined;
    setNodeScale(nodeName: string, scale: [number, number, number]): void;
    getNodeScale(nodeName: string): [number, number, number] | undefined;
    private _printDebugInfoEvent;
    get printDebugInfoEvent(): Event<[]>;
    printDebugInfo(): void;
    private _smoothMoving;
    private _smoothMovingBinding;
    private _smoothMovingBinding2;
    smoothMove(destination: [number, number, number], duration: number): void;
    static defaultUrl: string;
    static defaultSpecularEnvironmentMaps: string;
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmModelPrimitive {
    const createDefaultProps: () => {
        show: boolean | undefined;
        url: string | undefined;
        positionEditing: boolean;
        allowPicking: boolean | undefined;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        showSceneScale: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        forwardAxis: 0 | 1 | 2 | undefined;
        upAxis: 0 | 1 | 2 | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        silhouetteColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        shadows: "DISABLED" | "ENABLED" | "CAST_ONLY" | "RECEIVE_ONLY" | undefined;
        credit: string | undefined;
        basePath: string | undefined;
        heightReference: "NONE" | "CLAMP_TO_GROUND" | "RELATIVE_TO_GROUND" | undefined;
        distanceDisplayCondition: [number, number] | undefined;
        colorBlendMode: "HIGHLIGHT" | "REPLACE" | "MIX" | undefined;
        incrementallyLoadTextures: boolean | undefined;
        asynchronous: boolean | undefined;
        clampAnimations: boolean | undefined;
        debugShowBoundingVolume: boolean | undefined;
        debugWireframe: boolean | undefined;
        backFaceCulling: boolean | undefined;
        showOutline: boolean | undefined;
        colorBlendAmount: number | undefined;
        silhouetteSize: number | undefined;
        imageBasedLightingFactor: [number, number] | undefined;
        lightColor: [number, number, number] | undefined;
        luminanceAtZenith: number | undefined;
        sphericalHarmonicCoefficients: [number, number, number][] | undefined;
        specularEnvironmentMaps: string | undefined;
        customShaderInstanceClassStr: string | undefined;
        activeAnimationsJson: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelAnimationJsonType[] | undefined>;
        activeAnimationsAnimateWhilePaused: boolean | undefined;
        nodeTransformations: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmModelNodeTransformations | undefined>;
        viewDistanceRange: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        viewDistanceDebug: boolean;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
    };
}
export interface CzmModelPrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmModelPrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmModelPrimitive.createDefaultProps> & {
    type: string;
}>;
export {};
