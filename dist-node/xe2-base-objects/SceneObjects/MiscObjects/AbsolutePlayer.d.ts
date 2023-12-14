import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { ESSceneObject } from "../ESSceneObject";
import { Player } from "./Player";
export declare class AbsolutePlayer extends ESSceneObject {
    static readonly type: string;
    get typeName(): string;
    get defaultProps(): {
        currentTime: number | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        playing: boolean | undefined;
        loop: boolean | undefined;
        speed: number | undefined;
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
        currentTime: number;
        startTime: number;
        stopTime: number;
        playing: boolean;
        loop: boolean;
        speed: number;
        viewerTagsEnums: [string, string][];
    };
    private _player;
    get player(): Player;
    get ratio(): number;
    get ratioChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    set ratio(value: number);
    constructor(id?: string);
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace AbsolutePlayer {
    const createDefaultProps: () => {
        currentTime: number | undefined;
        startTime: number | undefined;
        stopTime: number | undefined;
        playing: boolean | undefined;
        loop: boolean | undefined;
        speed: number | undefined;
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
    };
}
export interface AbsolutePlayer extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof AbsolutePlayer.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof AbsolutePlayer.createDefaultProps> & {
    type: string;
}>;
export {};
