import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class OlLineStringEditor extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        enabled: boolean | undefined;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
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
export declare namespace OlLineStringEditor {
    const createDefaultProps: () => {
        positions: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        enabled: boolean | undefined;
        strokeColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
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
export interface OlLineStringEditor extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlLineStringEditor.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlLineStringEditor.createDefaultProps> & {
    type: string;
}>;
export {};
