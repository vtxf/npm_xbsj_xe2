import { JsonValue, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "./ESSceneObject";
export declare class TestPropertyObject extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        testNum: number | undefined;
        testNum2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        testNum3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        testNum4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        testNums: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        testNum2s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        testNum3s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        testNum4s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number][] | undefined>;
        rgbaColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rgbColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        minmax: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        opacity: number | undefined;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number | undefined, number | undefined, number | undefined, number | undefined] | undefined>;
        testStr: string | undefined;
        testStr2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string] | undefined>;
        testStr3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string] | undefined>;
        testStr4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string, string] | undefined>;
        testStrs: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        testStr2s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string][] | undefined>;
        testStr3s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string][] | undefined>;
        testStr4s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string, string][] | undefined>;
        testbool: boolean | undefined;
        testbool2: [boolean, boolean] | undefined;
        testbool3: [boolean, boolean, boolean] | undefined;
        testbool4: [boolean, boolean, boolean, boolean] | undefined;
        testbools: boolean[] | undefined;
        testbool2s: [boolean, boolean][] | undefined;
        testbool3s: [boolean, boolean, boolean][] | undefined;
        testbool4s: [boolean, boolean, boolean, boolean][] | undefined;
        jsonValue: JsonValue;
        jsCode: string | undefined;
        longText: string | undefined;
        markdown: string;
    };
    get json(): JsonType;
    set json(value: JsonType);
    static defaultPropValue: {
        markdown: string;
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("./ESSceneObject").Property[];
}
export declare namespace TestPropertyObject {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        testNum: number | undefined;
        testNum2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        testNum3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        testNum4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        testNums: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number[] | undefined>;
        testNum2s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number][] | undefined>;
        testNum3s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][] | undefined>;
        testNum4s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number][] | undefined>;
        rgbaColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        rgbColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        minmax: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        opacity: number | undefined;
        padding: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number | undefined, number | undefined, number | undefined, number | undefined] | undefined>;
        testStr: string | undefined;
        testStr2: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string] | undefined>;
        testStr3: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string] | undefined>;
        testStr4: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string, string] | undefined>;
        testStrs: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        testStr2s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string][] | undefined>;
        testStr3s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string][] | undefined>;
        testStr4s: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[string, string, string, string][] | undefined>;
        testbool: boolean | undefined;
        testbool2: [boolean, boolean] | undefined;
        testbool3: [boolean, boolean, boolean] | undefined;
        testbool4: [boolean, boolean, boolean, boolean] | undefined;
        testbools: boolean[] | undefined;
        testbool2s: [boolean, boolean][] | undefined;
        testbool3s: [boolean, boolean, boolean][] | undefined;
        testbool4s: [boolean, boolean, boolean, boolean][] | undefined;
        jsonValue: JsonValue;
        jsCode: string | undefined;
        longText: string | undefined;
        markdown: string;
    };
}
export interface TestPropertyObject extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof TestPropertyObject.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof TestPropertyObject.createDefaultProps> & {
    type: string;
}>;
export {};
