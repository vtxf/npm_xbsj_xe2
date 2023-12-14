import { ESSceneObject, NativeNumber16Type, PositionEditing } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent, SceneObjectKey } from 'xbsj-xe2/dist-node/xe2-utils';
import * as Cesium from 'cesium';
import { Czm3DTilesCustomShaderInstanceClassType } from './Czm3DTiles';
import { CzmPolylinesPrimitive } from './CzmPolylinesPrimitive';
declare class SceneObjectIdsResetting extends Destroyable {
    private _czmFlattenedPlane;
    private _sowis;
    private _sowisResetting;
    constructor(_czmFlattenedPlane: CzmFlattenedPlane);
}
export declare class CzmFlattenedPlane extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        enabled: boolean;
        showHelper: boolean;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type>;
        reverse: boolean;
        discard: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        topColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        bottomColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeWidth: number;
        minSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        maxSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        sceneObjectIds: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[]>;
        czmTextureId: string;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    static defaults: {
        position: [number, number, number];
        viewerTagsEnums: [string, string][];
    };
    private _computedCustomShader;
    get computedCustomShader(): Czm3DTilesCustomShaderInstanceClassType | undefined;
    set computedCustomShader(value: Czm3DTilesCustomShaderInstanceClassType | undefined);
    get computedCustomShaderChanged(): Listener<[Czm3DTilesCustomShaderInstanceClassType | undefined, Czm3DTilesCustomShaderInstanceClassType | undefined]>;
    private _sceneObjectIdsResettingEvent;
    private _sceneObjectIdsResetting;
    get sceneObjectIdsResetting(): ObjResettingWithEvent<SceneObjectIdsResetting, import("xbsj-xe2/dist-node/xe2-base-utils").NextAnimateFrameEvent>;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    private _polylines;
    get polylines(): CzmPolylinesPrimitive;
    private _polylinesInit;
    private _finalMatrix;
    get finalMatrix(): Cesium.Matrix4 | undefined;
    set finalMatrix(value: Cesium.Matrix4 | undefined);
    get finalMatrixChanged(): Listener<[Cesium.Matrix4 | undefined, Cesium.Matrix4 | undefined]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmFlattenedPlane {
    const createDefaultProps: () => {
        enabled: boolean;
        showHelper: boolean;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type>;
        reverse: boolean;
        discard: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        topColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        bottomColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeWidth: number;
        minSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        maxSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number]>;
        sceneObjectIds: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[]>;
        czmTextureId: string;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmFlattenedPlane extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmFlattenedPlane.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmFlattenedPlane.createDefaultProps> & {
    type: string;
}>;
export {};
