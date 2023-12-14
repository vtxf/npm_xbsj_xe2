import { ESSceneObject, PickedInfo } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Event, Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
export declare class OlDivImage extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        zIndex: number | undefined;
        uri: string | undefined;
        imgWidth: number | undefined;
        imgHeight: number | undefined;
        border: string | undefined;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        opacity: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
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
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    constructor(id?: SceneObjectKey);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlDivImage {
    const createDefaultProps: () => {
        show: boolean | undefined;
        position: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number] | undefined>;
        editing: boolean | undefined;
        allowPicking: boolean | undefined;
        zIndex: number | undefined;
        uri: string | undefined;
        imgWidth: number | undefined;
        imgHeight: number | undefined;
        border: string | undefined;
        borderRadius: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number, number] | undefined>;
        opacity: number | undefined;
        originRatioAndOffset: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[leftRatio: number, topRatio: number, leftOffset: number, topOffset: number] | undefined>;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlDivImage extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlDivImage.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlDivImage.createDefaultProps> & {
    type: string;
}>;
export {};
