import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObjectKey } from "xbsj-xe2/dist-node/xe2-utils";
import { ESSceneObject } from "../ESSceneObject";
export declare type PlayerChannelType = [id: string, startTimeStamp: number, duration: number];
export declare class Player extends ESSceneObject {
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
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
        channels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PlayerChannelType[] | undefined>;
    };
    get json(): JsonType;
    set json(value: JsonType);
    private _ratio;
    get ratio(): number;
    set ratio(value: number);
    get ratioChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _subPlayers;
    static defaults: {
        loop: boolean;
        currentTime: number;
        duration: number;
        speed: number;
        playing: boolean;
        channels: boolean;
        ratio: number;
        viewerTagsEnums: [string, string][];
    };
    constructor(id?: SceneObjectKey);
    static channelsReadMe: string;
    getProperties(language?: string): import("../ESSceneObject").Property[];
}
export declare namespace Player {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        loop: boolean | undefined;
        currentTime: number | undefined;
        duration: number | undefined;
        speed: number | undefined;
        playing: boolean | undefined;
        channels: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<PlayerChannelType[] | undefined>;
    };
}
export interface Player extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof Player.createDefaultProps>> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof Player.createDefaultProps> & {
    type: string;
}>;
export {};
