import { CzmBillboardPrimitiveType, NativeNumber16Type } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmBillboardPrimitiveCollection extends ESSceneObject {
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
        debugShowBoundingVolume: boolean | undefined;
        blendOption: "OPAQUE" | "TRANSLUCENT" | "OPAQUE_AND_TRANSLUCENT" | undefined;
        billboardPrimitiveOptions: CzmBillboardPrimitiveType[] | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: SceneObjectKey);
    static defaults: {
        blendOption: string;
        show: boolean;
        debugShowBoundingVolume: boolean;
        viewerTagsEnums: [string, string][];
    };
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmBillboardPrimitiveCollection {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        debugShowBoundingVolume: boolean | undefined;
        blendOption: "OPAQUE" | "TRANSLUCENT" | "OPAQUE_AND_TRANSLUCENT" | undefined;
        billboardPrimitiveOptions: CzmBillboardPrimitiveType[] | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localModelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
        modelMatrix: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<NativeNumber16Type | undefined>;
    };
}
export interface CzmBillboardPrimitiveCollection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmBillboardPrimitiveCollection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmBillboardPrimitiveCollection.createDefaultProps> & {
    type: string;
}>;
export {};
