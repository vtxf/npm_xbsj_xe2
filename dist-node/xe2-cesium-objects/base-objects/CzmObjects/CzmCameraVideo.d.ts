import { ESSceneObject, PickedInfo, RayEditing } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { SceneObjectKey, SceneObjectWithId } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmTexture } from './CzmTexture';
export declare class CzmCameraVideo extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        editing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        fov: number;
        aspectRatio: number;
        near: number;
        far: number;
        showHelperPrimitive: boolean;
        czmTextureId: string | undefined;
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
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _resetWithCameraInfoEvent;
    get resetWithCameraInfoEvent(): Event<[]>;
    resetWithCameraInfo(): void;
    static defaults: {
        position: [number, number, number];
        czmTextureId: string;
        viewerTagsEnums: [string, string][];
    };
    private _rayEditing;
    get rayEditing(): RayEditing;
    private _sharedCzmTextureWithId;
    get sharedCzmTextureWithId(): SceneObjectWithId<CzmTexture>;
    getCurrentCzmTexture(): CzmTexture | undefined;
    private _sharedCzmTextureWithIdTrack;
    private _fovy;
    get fovy(): number;
    set fovy(value: number);
    get fovyChanged(): Listener<[number, number]>;
    private _fovyUpdate;
    private _fovx;
    get fovx(): number;
    set fovx(value: number);
    get fovxChanged(): Listener<[number, number]>;
    private _fovxUpdate;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCameraVideo {
    const createDefaultProps: () => {
        show: boolean;
        editing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number]>;
        fov: number;
        aspectRatio: number;
        near: number;
        far: number;
        showHelperPrimitive: boolean;
        czmTextureId: string | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmCameraVideo extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCameraVideo.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCameraVideo.createDefaultProps> & {
    type: string;
}>;
export {};
