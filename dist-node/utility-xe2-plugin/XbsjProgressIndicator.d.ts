import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjPropSceneObjectIndicator extends ESSceneObject {
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
        text: string | undefined;
        opacity: number | undefined;
        top: number | undefined;
        left: number | undefined;
        fontSize: number | undefined;
        zIndex: string | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderWidth: number | undefined;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderStyle: "hidden" | "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace XbsjPropSceneObjectIndicator {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        text: string | undefined;
        opacity: number | undefined;
        top: number | undefined;
        left: number | undefined;
        fontSize: number | undefined;
        zIndex: string | undefined;
        color: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderWidth: number | undefined;
        borderColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        borderStyle: "hidden" | "none" | "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | undefined;
    };
}
export interface XbsjPropSceneObjectIndicator extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjPropSceneObjectIndicator.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjPropSceneObjectIndicator.createDefaultProps> & {
    type: string;
}>;
export {};
