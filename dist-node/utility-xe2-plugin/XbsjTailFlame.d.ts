import { CzmCustomPrimitive } from "xbsj-xe2/dist-node/xe2-cesium-objects";
import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class XbsjTailFlame extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        positionEditing: boolean | undefined;
        rotationEditing: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        maximumScale: number | undefined;
        minimumScale: number | undefined;
        pixelSize: number | undefined;
        localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        angle: number | undefined;
        startRadius: number | undefined;
        endRadius: number | undefined;
        height: number | undefined;
        allowPicking: boolean | undefined;
        image: string | undefined;
    };
    private _customPrimitive;
    get customPrimitive(): CzmCustomPrimitive;
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {
    show: boolean | undefined;
    positionEditing: boolean | undefined;
    rotationEditing: boolean | undefined;
    position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    rotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    scale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    maximumScale: number | undefined;
    minimumScale: number | undefined;
    pixelSize: number | undefined;
    localPosition: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    localRotation: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    localScale: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
};
export declare namespace XbsjTailFlame {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        angle: number | undefined;
        startRadius: number | undefined;
        endRadius: number | undefined;
        height: number | undefined;
        allowPicking: boolean | undefined;
        image: string | undefined;
    };
}
export interface XbsjTailFlame extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjTailFlame.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjTailFlame.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};
