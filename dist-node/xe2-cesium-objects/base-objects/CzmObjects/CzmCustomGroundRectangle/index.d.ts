import { ESSceneObject, PickedInfo, PointEditing, PositionsEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey, SceneObjectWithId } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmTexture } from "../CzmTexture";
import { CzmClassificationType } from "../base";
export declare type CzmCustomGroundRectangleClassificationType = CzmClassificationType;
export declare class CzmCustomGroundRectangle extends ESSceneObject {
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
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rotation: number;
        stRotation: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        classificationType: CzmClassificationType | undefined;
        czmTextureId: string | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _sharedCzmTextureWithId;
    get sharedCzmTextureWithId(): SceneObjectWithId<CzmTexture>;
    getCurrentCzmTexture(): CzmTexture | undefined;
    private __sharedCzmTextureWithIdTrack;
    static defaults: {
        show: boolean;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: [number, number, number][];
        rectangle: [number, number, number, number];
        color: [number, number, number, number];
        classificationType: CzmClassificationType;
        czmTextureId: string;
        viewerTagsEnums: [string, string][];
    };
    private _positions;
    get positions(): [number, number, number][] | undefined;
    get positionsChanged(): Listener<[[number, number, number][] | undefined, [number, number, number][] | undefined]>;
    set positions(value: [number, number, number][] | undefined);
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _pointEditor;
    get pointEditor(): PointEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmCustomGroundRectangle {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        pointEditing: boolean | undefined;
        rectangle: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rotation: number;
        stRotation: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        classificationType: CzmClassificationType | undefined;
        czmTextureId: string | undefined;
    };
}
export interface CzmCustomGroundRectangle extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmCustomGroundRectangle.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmCustomGroundRectangle.createDefaultProps> & {
    type: string;
}>;
export {};
