import { ESSceneObject, PickedInfo, PositionEditing } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmCustomPrimitive } from "xbsj-xe2/dist-node/xe2-cesium-objects";
export declare class XbsjRadarDetectionVolume extends ESSceneObject {
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
        hollowOut: boolean | undefined;
        startingAngle: number | undefined;
        envelopeAngle: number | undefined;
        topConeAngle: number | undefined;
        allowPicking: boolean | undefined;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        radius: number | undefined;
        fill: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineWidth: number | undefined;
        segments: number | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _getAvailableSegments;
    private _getAvailableRadius;
    private _getArcLength;
    private _getAvailableTopConeAngle;
    private _customPrimitive;
    get customPrimitive(): CzmCustomPrimitive;
    private _sPositionEditing;
    get sPositionEditing(): PositionEditing;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace XbsjRadarDetectionVolume {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        hollowOut: boolean | undefined;
        startingAngle: number | undefined;
        envelopeAngle: number | undefined;
        topConeAngle: number | undefined;
        allowPicking: boolean | undefined;
        positionEditing: boolean;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
        radius: number | undefined;
        fill: boolean | undefined;
        fillColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineColor: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        outlineWidth: number | undefined;
        segments: number | undefined;
    };
}
export interface XbsjRadarDetectionVolume extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjRadarDetectionVolume.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjRadarDetectionVolume.createDefaultProps> & {
    type: string;
}>;
export {};
