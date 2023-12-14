import { ESSceneObject } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { SceneObjectKey } from 'xbsj-xe2/dist-node/xe2-utils';
/**
 * 注意这个类和CzmGlobeMaterial都会修改scene.globe.material这个属性，所以是互斥的，不能同时使用！
 */
export declare class CzmGlobeLevelMaterial extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        enabled: boolean;
        inputShadows: [number, number, number];
        inputHighlights: [number, number, number];
        midtones: [number, number, number];
        outputShadows: [number, number, number];
        outputHighlights: [number, number, number];
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
    static defaults: {
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmGlobeLevelMaterial {
    const createDefaultProps: () => {
        enabled: boolean;
        inputShadows: [number, number, number];
        inputHighlights: [number, number, number];
        midtones: [number, number, number];
        outputShadows: [number, number, number];
        outputHighlights: [number, number, number];
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface CzmGlobeLevelMaterial extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmGlobeLevelMaterial.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmGlobeLevelMaterial.createDefaultProps> & {
    type: string;
}>;
export {};
