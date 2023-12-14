import { CzmPickedInfo, GeoPolylinePathCameraController, ObjResettingWithEvent, SceneObject, Viewer } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESFlyToParam } from "xbsj-xe2/dist-node/xe2-ue-objects";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import * as Cesium from 'cesium';
import { CameraActionType } from "xbsj-xe2/dist-node/xe2-base-cesium";
import { CzmObject } from "../CzmObject";
import { ViewerInstance } from "./ViewerInstance";
import { defaultCreateCesiumViewerFunc } from './defaultCreateCesiumViewerFunc';
import { getCesiumIonToken } from "./getCesiumIonToken";
import { ViewerLegend } from "./ViewerLegend";
import { CzmClippingPlaneCollectionJsonType } from "xbsj-xe2/dist-node/xe2-cesium-objects/base-objects/utils";
export * from './ViewerExtensions';
declare type NavigationModeType = 'Map' | 'Walk' | 'Line' | 'UserDefined';
export declare class CzmViewer extends Viewer {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        createCesiumViewerFuncStr: string | undefined;
        ionAccessToken: string | undefined;
        flashLighting: boolean | undefined;
        resolutionScale: number | undefined;
        msaaSamples: number | undefined;
        shadows: boolean;
        sceneSplitPosition: number | undefined;
        sceneGlobeShow: boolean | undefined;
        sceneGlobeDepthTestAgainstTerrain: boolean | undefined;
        sceneGlobeEnableLighting: boolean | undefined;
        sceneGlobeShadows: SceneGlobeShadowsType | undefined;
        sceneGlobeTerrainExaggeration: number;
        sceneGlobeTerrainExaggerationRelativeHeight: number;
        sceneGlobeBackFaceCulling: boolean;
        sceneGlobeShowSkirts: boolean;
        sceneGlobeShowWaterEffect: boolean;
        sceneGlobeBaseColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneGlobeCartographicLimitRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneGlobeClippingPlanes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmClippingPlaneCollectionJsonType | undefined>;
        sceneGlobeUndergroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeUndergroundColorAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyEnabled: boolean | undefined;
        sceneGlobeTranslucencyBackFaceAlpha: number | undefined;
        sceneGlobeTranslucencyBackFaceAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyFrontFaceAlpha: number | undefined;
        sceneGlobeTranslucencyFrontFaceAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneSunShow: boolean | undefined;
        sceneSunGlowFactor: number | undefined;
        sceneMoonShow: boolean | undefined;
        sceneMoonTextureUrl: string | undefined;
        sceneMoonOnlySunLighting: boolean | undefined;
        sceneSkyBoxShow: boolean;
        sceneSkyBoxSources: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SceneSkyBoxSourcesType>;
        xbsjUseBackground: boolean;
        xbsjBackgroundImageUri: string;
        xbsjBackgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneSkyAtmosphereShow: boolean;
        xbsjLocalBoxSources: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SceneSkyBoxSourcesType | undefined>;
        sceneFogEnabled: boolean | undefined;
        sceneFogDensity: number | undefined;
        sceneFogScreenSpaceErrorFactor: number | undefined;
        sceneFogMinimumBrightness: number | undefined;
        sceneSsccEnableInputs: boolean | undefined;
        sceneSsccEnableCollisionDetection: boolean | undefined;
        scenePpsfxaaEnabled: boolean | undefined;
        scenePpsAmbientOcclusionEnabled: boolean;
        scenePpsAmbientOcclusionAmbientOcclusionOnly: boolean;
        scenePpsAmbientOcclusionIntensity: number;
        scenePpsAmbientOcclusionBias: number;
        scenePpsAmbientOcclusionLengthCap: number;
        scenePpsAmbientOcclusionStepSize: number;
        scenePpsAmbientOcclusionBlurStepSize: number;
        scenePpsBloomEnabled: boolean;
        scenePpsBloomGlowOnly: boolean;
        scenePpsBloomContrast: number;
        scenePpsBloomBrightness: number;
        scenePpsBloomDelta: number;
        scenePpsBloomSigma: number;
        scenePpsBloomStepSize: number;
        sceneDebugShowFramesPerSecond: boolean | undefined;
        sceneDebugShowCommands: boolean | undefined;
        sceneDebugShowFrustums: boolean | undefined;
        sceneDebugShowFrustumPlanes: boolean | undefined;
        sceneDebugShowDepthFrustum: number | undefined;
        showCesiumInspector: boolean | undefined;
        cesiumInspectorWireframe: boolean | undefined;
        showCesium3DTilesInspector: boolean | undefined;
        navigationMode: NavigationModeType;
        firstPersonKeyboardEnabled: boolean;
        firstPersonMouseEnabled: boolean;
        firstPersonWalkingSpeed: number;
        firstPersonAlwaysWithCamera: boolean;
        firstPersonKeyStatusMap: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<{
            [k: string]: CameraActionType;
        }>;
        clockCurrentTime: number;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        opacity: number | undefined;
        actived: boolean;
        activeStyleEnabled: boolean | undefined;
        zIndex: string | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        sizeRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[widthRatio: number, heightRatio: number, widthOffset: number, heightOffset: number] | undefined>;
        useDefaultContainerWhenNoContainer: boolean | undefined;
        useDefaultStatusDiv: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    get type(): string;
    private _sceneObjectsMap;
    get sceneObjectsMap(): Map<SceneObject, CzmObject<SceneObject> | undefined>;
    get sceneObjects(): IterableIterator<SceneObject>;
    static defaultCreateCesiumViewerFunc: typeof defaultCreateCesiumViewerFunc;
    private _viewer;
    get viewer(): Cesium.Viewer | undefined;
    get viewerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Viewer | undefined, Cesium.Viewer | undefined]>;
    get extensions(): import("./ViewerExtensions").ViewerExtensions | undefined;
    private _fps;
    get fps(): number;
    get fpsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _geoPolylinePathCameraController;
    get geoPolylinePathCameraController(): GeoPolylinePathCameraController;
    /**
     * _disabledInputStack记录外部disable的数量，当为0时才可能正常使用！
     */
    private _disabledInputStack;
    get disabledInputStack(): number;
    get disabledInputStackChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    incrementDisabledInputStack(): void;
    decrementDisabledInputStack(): void;
    private _createCesiumViewerFuncReact;
    get createCesiumViewerFunc(): ((container: HTMLDivElement) => Promise<Cesium.Viewer>) | undefined;
    set createCesiumViewerFunc(value: ((container: HTMLDivElement) => Promise<Cesium.Viewer>) | undefined);
    get createCesiumViewerFuncChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[((container: HTMLDivElement) => Promise<Cesium.Viewer>) | undefined, ((container: HTMLDivElement) => Promise<Cesium.Viewer>) | undefined]>;
    get czmPickedEvent(): Event<[pickedResult: CzmPickedInfo | undefined]>;
    private _cameraChanged;
    get cameraChanged(): Event<[]>;
    private _viewerLegend;
    get viewerLegend(): ViewerLegend;
    private _viewerInstance;
    get viewerInstance(): ObjResettingWithEvent<ViewerInstance, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[Cesium.Viewer | undefined, Cesium.Viewer | undefined]>>;
    constructor(id?: SceneObjectKey, devTags?: string[]);
    private _add;
    private _delete;
    add<T extends SceneObject>(...sceneObjects: T[]): void;
    delete<T extends SceneObject>(...sceneObjects: T[]): void;
    has<T extends SceneObject>(sceneObject: T): boolean;
    getCzmObject(sceneObject: SceneObject): CzmObject<SceneObject> | undefined;
    static getCesiumIonToken: typeof getCesiumIonToken;
    static defaults: {
        ionAccessToken: string;
        flashLighting: boolean;
        resolutionScale: number;
        msaaSamples: number;
        sceneSplitPosition: number;
        sceneGlobeShow: boolean;
        sceneGlobeDepthTestAgainstTerrain: boolean;
        sceneGlobeEnableLighting: boolean;
        sceneGlobeShadows: SceneGlobeShadowsType;
        sceneGlobeTerrainExaggeration: number;
        sceneGlobeUndergroundColor: [number, number, number, number];
        sceneGlobeUndergroundColorAlphaByDistance: [number, number, number, number];
        sceneGlobeTranslucencyEnabled: boolean;
        sceneGlobeTranslucencyBackFaceAlpha: number;
        sceneGlobeTranslucencyBackFaceAlphaByDistance: [number, number, number, number];
        sceneGlobeTranslucencyFrontFaceAlpha: number;
        sceneGlobeTranslucencyFrontFaceAlphaByDistance: [number, number, number, number];
        sceneGlobeTranslucencyRectangle: [number, number, number, number];
        sceneSunShow: boolean;
        sceneSunGlowFactor: number;
        sceneMoonShow: boolean;
        sceneMoonTextureUrl: string;
        sceneMoonOnlySunLighting: boolean;
        sceneSkyBoxSources: SceneSkyBoxSourcesType;
        xbsjLocalBoxSources: SceneSkyBoxSourcesType;
        sceneFogEnabled: boolean;
        sceneFogDensity: number;
        sceneFogScreenSpaceErrorFactor: number;
        sceneFogMinimumBrightness: number;
        sceneSsccEnableInputs: boolean;
        sceneSsccEnableCollisionDetection: boolean;
        scenePpsfxaaEnabled: boolean;
        sceneDebugShowFramesPerSecond: boolean;
        sceneDebugShowCommands: boolean;
        sceneDebugShowFrustums: boolean;
        sceneDebugShowFrustumPlanes: boolean;
        sceneDebugShowDepthFrustum: number;
        showCesiumInspector: boolean;
        cesiumInspectorWireframe: boolean;
        showCesium3DTilesInspector: boolean;
        clockCurrentTime: number;
        viewerTagsEnums: [string, string][];
    };
    static firstPersonKeyStatusMapReadMe: string;
    getProperties(): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
    getCameraInfo(): {
        position: [number, number, number];
        rotation: [number, number, number];
    } | undefined;
    calcFlyToParam(targetPosition: [number, number, number]): ESFlyToParam | undefined;
    flyTo(position: [number, number, number], viewDistance?: number, rotation?: [number, number, number], duration?: number, hdelta?: number, pdelta?: number): Promise<boolean> | undefined;
    /**
     * 截图
     * @param width 宽度，像素单位
     * @param height 高度，像素单位
     * @param format 格式 'image/jpeg' | 'image/png'
     * @returns 返回一个Promise对象，如果截图成功会返回base64位图像
     */
    capture(width?: number, height?: number, format?: 'image/jpeg' | 'image/png'): Promise<string> | undefined;
    pickGlobePosition(windowPos: [number, number]): [number, number, number] | undefined;
    pick(windowPos: [number, number], attachedInfo?: any): Promise<import("xbsj-xe2/dist-node/xe2-base-objects").PickedInfo> | undefined;
    pickPosition(windowPos: [number, number]): Promise<[number, number, number] | undefined> | undefined;
    pickEllipsoid(windowPos: [number, number]): [number, number, number] | undefined;
    changeNavigationMode(Mode: NavigationModeType, Position?: [number, number, number], idOrPath?: string, Speed?: number, HeightOffset?: number, Loop?: boolean): void;
    static getHeightsScartchCarto: Cesium.Cartographic;
    /**
     * 获取某个经纬度上的地形高度，注意有可能获取不到，需要考虑undefined的情况！
     * @param positions
     * @returns 注意高度有可能是undefined!
     */
    getTerrainHeight(position: [number, number] | [number, number, number]): number | undefined;
    /**
     * 获得与视点的距离
     * @param position
     * @returns
     */
    getViewDistance(position: [number, number, number]): number | undefined;
}
export declare type SceneSkyBoxSourcesType = {
    positiveX: string;
    negativeX: string;
    positiveY: string;
    negativeY: string;
    positiveZ: string;
    negativeZ: string;
};
export declare type SceneGlobeShadowsType = 'DISABLED' | 'ENABLED' | 'CAST_ONLY' | 'RECEIVE_ONLY';
export declare namespace CzmViewer {
    const createDefaultProps: () => {
        createCesiumViewerFuncStr: string | undefined;
        ionAccessToken: string | undefined;
        flashLighting: boolean | undefined;
        resolutionScale: number | undefined;
        msaaSamples: number | undefined;
        shadows: boolean;
        sceneSplitPosition: number | undefined;
        sceneGlobeShow: boolean | undefined;
        sceneGlobeDepthTestAgainstTerrain: boolean | undefined;
        sceneGlobeEnableLighting: boolean | undefined;
        sceneGlobeShadows: SceneGlobeShadowsType | undefined;
        sceneGlobeTerrainExaggeration: number;
        sceneGlobeTerrainExaggerationRelativeHeight: number;
        sceneGlobeBackFaceCulling: boolean;
        sceneGlobeShowSkirts: boolean;
        sceneGlobeShowWaterEffect: boolean;
        sceneGlobeBaseColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneGlobeCartographicLimitRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneGlobeClippingPlanes: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmClippingPlaneCollectionJsonType | undefined>;
        sceneGlobeUndergroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeUndergroundColorAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyEnabled: boolean | undefined;
        sceneGlobeTranslucencyBackFaceAlpha: number | undefined;
        sceneGlobeTranslucencyBackFaceAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyFrontFaceAlpha: number | undefined;
        sceneGlobeTranslucencyFrontFaceAlphaByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneGlobeTranslucencyRectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        sceneSunShow: boolean | undefined;
        sceneSunGlowFactor: number | undefined;
        sceneMoonShow: boolean | undefined;
        sceneMoonTextureUrl: string | undefined;
        sceneMoonOnlySunLighting: boolean | undefined;
        sceneSkyBoxShow: boolean;
        sceneSkyBoxSources: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SceneSkyBoxSourcesType>;
        xbsjUseBackground: boolean;
        xbsjBackgroundImageUri: string;
        xbsjBackgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        sceneSkyAtmosphereShow: boolean;
        xbsjLocalBoxSources: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<SceneSkyBoxSourcesType | undefined>;
        sceneFogEnabled: boolean | undefined;
        sceneFogDensity: number | undefined;
        sceneFogScreenSpaceErrorFactor: number | undefined;
        sceneFogMinimumBrightness: number | undefined;
        sceneSsccEnableInputs: boolean | undefined;
        sceneSsccEnableCollisionDetection: boolean | undefined;
        scenePpsfxaaEnabled: boolean | undefined;
        scenePpsAmbientOcclusionEnabled: boolean;
        scenePpsAmbientOcclusionAmbientOcclusionOnly: boolean;
        scenePpsAmbientOcclusionIntensity: number;
        scenePpsAmbientOcclusionBias: number;
        scenePpsAmbientOcclusionLengthCap: number;
        scenePpsAmbientOcclusionStepSize: number;
        scenePpsAmbientOcclusionBlurStepSize: number;
        scenePpsBloomEnabled: boolean;
        scenePpsBloomGlowOnly: boolean;
        scenePpsBloomContrast: number;
        scenePpsBloomBrightness: number;
        scenePpsBloomDelta: number;
        scenePpsBloomSigma: number;
        scenePpsBloomStepSize: number;
        sceneDebugShowFramesPerSecond: boolean | undefined;
        sceneDebugShowCommands: boolean | undefined;
        sceneDebugShowFrustums: boolean | undefined;
        sceneDebugShowFrustumPlanes: boolean | undefined;
        sceneDebugShowDepthFrustum: number | undefined;
        showCesiumInspector: boolean | undefined;
        cesiumInspectorWireframe: boolean | undefined;
        showCesium3DTilesInspector: boolean | undefined;
        navigationMode: NavigationModeType;
        firstPersonKeyboardEnabled: boolean;
        firstPersonMouseEnabled: boolean;
        firstPersonWalkingSpeed: number;
        firstPersonAlwaysWithCamera: boolean;
        firstPersonKeyStatusMap: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<{
            [k: string]: CameraActionType;
        }>;
        clockCurrentTime: number;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        opacity: number | undefined;
        actived: boolean;
        activeStyleEnabled: boolean | undefined;
        zIndex: string | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        sizeRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[widthRatio: number, heightRatio: number, widthOffset: number, heightOffset: number] | undefined>;
        useDefaultContainerWhenNoContainer: boolean | undefined;
        useDefaultStatusDiv: boolean | undefined;
    };
}
export interface CzmViewer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmViewer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmViewer.createDefaultProps> & {
    type: string;
}>;
