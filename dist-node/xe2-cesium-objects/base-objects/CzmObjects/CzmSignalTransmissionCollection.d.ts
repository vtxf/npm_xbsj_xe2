import { ESSceneObject, PickedInfo, Player } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CzmSignalTransmissionCollection extends ESSceneObject {
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
        imageUrl: string | undefined;
        repeat: number | undefined;
        bidirectional: 0 | 1 | 2 | 3 | undefined;
        startTime: number | undefined;
        transmissionTime: number | undefined;
        color: [number, number, number, number] | undefined;
        width: number | undefined;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        brightening: boolean | undefined;
        depthTest: boolean | undefined;
        positionsSet: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][][] | undefined>;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _pickedEvent;
    get pickedEvent(): Event<[PickedInfo]>;
    private _player;
    get player(): Player;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): Listener<[number, number]>;
    constructor(id?: SceneObjectKey);
    static defaults: {
        loop: boolean;
        currentTime: number;
        playerCurrentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        viewerTagsEnums: [string, string][];
    };
    static defaultImageUri: string;
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace CzmSignalTransmissionCollection {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        imageUrl: string | undefined;
        repeat: number | undefined;
        bidirectional: 0 | 1 | 2 | 3 | undefined;
        startTime: number | undefined;
        transmissionTime: number | undefined;
        color: [number, number, number, number] | undefined;
        width: number | undefined;
        arcType: "NONE" | "GEODESIC" | "RHUMB" | undefined;
        brightening: boolean | undefined;
        depthTest: boolean | undefined;
        positionsSet: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number][][] | undefined>;
        allowPicking: boolean | undefined;
        editing: boolean | undefined;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
    };
}
export interface CzmSignalTransmissionCollection extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof CzmSignalTransmissionCollection.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof CzmSignalTransmissionCollection.createDefaultProps> & {
    type: string;
}>;
export {};
