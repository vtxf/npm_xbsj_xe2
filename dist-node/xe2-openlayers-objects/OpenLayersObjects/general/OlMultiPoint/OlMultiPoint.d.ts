import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class OlMultiPoint extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        radius: number | undefined;
        zIndex: number | undefined;
        maxPoints: number | undefined;
        minPoints: number | undefined;
        allowDeleting: boolean | undefined;
        allowInserting: boolean | undefined;
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
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlMultiPoint {
    const createDefaultProps: () => {
        show: boolean | undefined;
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        strokeWidth: number | undefined;
        radius: number | undefined;
        zIndex: number | undefined;
        maxPoints: number | undefined;
        minPoints: number | undefined;
        allowDeleting: boolean | undefined;
        allowInserting: boolean | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlMultiPoint extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlMultiPoint.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlMultiPoint.createDefaultProps> & {
    type: string;
}>;
export {};
