import { ESSceneObject, NativeNumber16Type, PositionEditing } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent, SceneObjectKey } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmClippingPlaneCollectionJsonType } from '../utils';
import { CzmPolylinesPrimitive } from './CzmPolylinesPrimitive';
declare class SceneObjectIdsResetting extends Destroyable {
    private _czmBoxClippingPlanes;
    constructor(_czmBoxClippingPlanes: CzmBoxClippingPlanes);
}
export declare class CzmBoxClippingPlanes extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        enabled: boolean;
        showHelper: boolean;
        applyOnTerrain: boolean;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type>;
        reverse: boolean;
        edgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeWidth: number;
        minSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        maxSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        sceneObjectIds: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[]>;
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
    private _computedClippingPlanes;
    get computedClippingPlanes(): CzmClippingPlaneCollectionJsonType | undefined;
    set computedClippingPlanes(value: CzmClippingPlaneCollectionJsonType | undefined);
    get computedClippingPlanesChanged(): Listener<[CzmClippingPlaneCollectionJsonType | undefined, CzmClippingPlaneCollectionJsonType | undefined]>;
    private _sceneObjectIdsResetting;
    get sceneObjectIdsResetting(): ObjResettingWithEvent<SceneObjectIdsResetting, Listener<[string[], string[]]>>;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    private _polylines;
    get polylines(): CzmPolylinesPrimitive;
    private _polylinesInit;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmBoxClippingPlanes {
    const createDefaultProps: () => {
        enabled: boolean;
        showHelper: boolean;
        applyOnTerrain: boolean;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type>;
        reverse: boolean;
        edgeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        edgeWidth: number;
        minSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        maxSize: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        sceneObjectIds: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[]>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmBoxClippingPlanes extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmBoxClippingPlanes.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmBoxClippingPlanes.createDefaultProps> & {
    type: string;
}>;
export {};
