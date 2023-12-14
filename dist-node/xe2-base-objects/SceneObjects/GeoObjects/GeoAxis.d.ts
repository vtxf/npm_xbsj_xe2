import { PickedInfo } from "../../scene-manager";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
import { PointEditing, PositionsEditing } from "../../utils";
export declare class GeoAxis extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
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
    get startPosition(): [number, number, number] | undefined;
    set startPosition(value: [number, number, number] | undefined);
    get startPositionChanged(): Listener<[[number, number, number][] | undefined, [number, number, number][] | undefined]>;
    get stopPosition(): [number, number, number] | undefined;
    set stopPosition(value: [number, number, number] | undefined);
    get stopPositionChanged(): Listener<[[number, number, number][] | undefined, [number, number, number][] | undefined]>;
    static defaults: {
        positions: [number, number, number][];
        viewerTagsEnums: [string, string][];
    };
    private _sPositionsEditing;
    get sPositionsEditing(): PositionsEditing;
    private _pointEditor;
    get pointEditor(): PointEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace GeoAxis {
    const createDefaultProps: () => {
        show: boolean;
        allowPicking: boolean;
        editing: boolean;
        pointEditing: boolean;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        width: number;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number]>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface GeoAxis extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof GeoAxis.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof GeoAxis.createDefaultProps> & {
    type: string;
}>;
export {};
