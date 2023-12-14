import { PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { CzmMaterialJsonType } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
export declare class CzmRectanglePrimitive extends ESSceneObject {
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
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        rotation: number | undefined;
        stRotation: number | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmRectanglePrimitive {
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
        material: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<CzmMaterialJsonType | undefined>;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        height: number | undefined;
        extrudedHeight: number | undefined;
        rotation: number | undefined;
        stRotation: number | undefined;
    };
}
export interface CzmRectanglePrimitive extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmRectanglePrimitive.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmRectanglePrimitive.createDefaultProps> & {
    type: string;
}>;
export {};
