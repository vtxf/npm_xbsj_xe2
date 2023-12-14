import { JsonValue, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare class TestObject extends ESSceneObject {
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
        testNum2: [number, number] | undefined;
        testNum3: [number, number, number] | undefined;
        testNum4: [number, number, number, number] | undefined;
        testNums: number[] | undefined;
        testNum2s: [number, number][] | undefined;
        testNum3s: [number, number, number][] | undefined;
        testNum4s: [number, number, number, number][] | undefined;
        testStr: string | undefined;
        testStr2: [string, string] | undefined;
        testStr3: [string, string, string] | undefined;
        testStr4: [string, string, string, string] | undefined;
        testStrs: string[] | undefined;
        testStr2s: [string, string][] | undefined;
        testStr3s: [string, string, string][] | undefined;
        testStr4s: [string, string, string, string][] | undefined;
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
    };
    get json(): JsonType;
    set json(value: JsonType);
    testFunc(testNum: number, testStr: string, testbool: boolean, testStrs: string[], testNums: number[], testbools: boolean[]): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("../../props").Property[];
}
export declare namespace TestObject {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<JsonValue>;
        testNum: number | undefined;
        testNum2: [number, number] | undefined;
        testNum3: [number, number, number] | undefined;
        testNum4: [number, number, number, number] | undefined;
        testNums: number[] | undefined;
        testNum2s: [number, number][] | undefined;
        testNum3s: [number, number, number][] | undefined;
        testNum4s: [number, number, number, number][] | undefined;
        testStr: string | undefined;
        testStr2: [string, string] | undefined;
        testStr3: [string, string, string] | undefined;
        testStr4: [string, string, string, string] | undefined;
        testStrs: string[] | undefined;
        testStr2s: [string, string][] | undefined;
        testStr3s: [string, string, string][] | undefined;
        testStr4s: [string, string, string, string][] | undefined;
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
    };
}
export interface TestObject extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof TestObject.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof TestObject.createDefaultProps> & {
    type: string;
}>;
export {};
