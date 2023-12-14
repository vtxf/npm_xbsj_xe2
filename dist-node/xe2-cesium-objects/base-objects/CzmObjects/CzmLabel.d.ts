import { ESSceneObject, PickedInfo, PositionEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmLabel extends ESSceneObject {
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
        editing: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        pixelOffset: [number, number] | undefined;
        eyeOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heightReference: "NONE" | "CLAMP_TO_GROUND" | "RELATIVE_TO_GROUND" | undefined;
        horizontalOrigin: "CENTER" | "LEFT" | "RIGHT" | undefined;
        verticalOrigin: "CENTER" | "BOTTOM" | "BASELINE" | "TOP" | undefined;
        scale: number | undefined;
        translucencyByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        pixelOffsetScaleByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        distanceDisplayCondition: [number, number] | undefined;
        scaleByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        style: "FILL" | "OUTLINE" | "FILL_AND_OUTLINE" | undefined;
        backgroundPadding: [number, number] | undefined;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        showBackground: boolean | undefined;
        text: string | undefined;
        font: string | undefined;
        outlineWidth: number | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmLabel {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        editing: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        show: boolean | undefined;
        allowPicking: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        pixelOffset: [number, number] | undefined;
        eyeOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        heightReference: "NONE" | "CLAMP_TO_GROUND" | "RELATIVE_TO_GROUND" | undefined;
        horizontalOrigin: "CENTER" | "LEFT" | "RIGHT" | undefined;
        verticalOrigin: "CENTER" | "BOTTOM" | "BASELINE" | "TOP" | undefined;
        scale: number | undefined;
        translucencyByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        pixelOffsetScaleByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        distanceDisplayCondition: [number, number] | undefined;
        scaleByDistance: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        style: "FILL" | "OUTLINE" | "FILL_AND_OUTLINE" | undefined;
        backgroundPadding: [number, number] | undefined;
        backgroundColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        showBackground: boolean | undefined;
        text: string | undefined;
        font: string | undefined;
        outlineWidth: number | undefined;
    };
}
export interface CzmLabel extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmLabel.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmLabel.createDefaultProps> & {
    type: string;
}>;
export {};
