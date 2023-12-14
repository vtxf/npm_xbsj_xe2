import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Listener, PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { OlRectangle } from "../OlRectangle";
export declare class OlScreenCapture extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        show: boolean | undefined;
        editing: boolean | undefined;
        zIndex: number | undefined;
        uri: string | undefined;
        width: number | undefined;
        height: number | undefined;
        scale: number | undefined;
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
    private _flyToEvent;
    get flyToEvent(): Listener<[number | undefined]>;
    flyTo(duration?: number): void;
    private _rectangle;
    get rectangle(): OlRectangle;
    constructor(id?: SceneObjectKey);
    reset(): void;
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
export declare namespace OlScreenCapture {
    const createDefaultProps: () => {
        show: boolean | undefined;
        editing: boolean | undefined;
        zIndex: number | undefined;
        uri: string | undefined;
        width: number | undefined;
        height: number | undefined;
        scale: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface OlScreenCapture extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof OlScreenCapture.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof OlScreenCapture.createDefaultProps> & {
    type: string;
}>;
export {};
