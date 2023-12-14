import { CustomDiv, Player } from "xbsj-xe2/dist-node/xe2-base-objects";
import { ESSceneObject } from "xbsj-xe2/dist-node/xe2-base-objects";
import { PartialWithUndefinedReactivePropsToNativeProps, ReactivePropsToNativePropsAndChanged } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare type PlayerDivClass<PlayerDiv extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> = new (subContainer: HTMLDivElement, player: Player, playerUi: XbsjPlayerUI<any>) => PlayerDiv;
export declare class XbsjPlayerUI<PlayerDiv extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends ESSceneObject {
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
        playerId: string | undefined;
        playerDivClassStr: string | undefined;
    };
    private _customDiv;
    get customDiv(): CustomDiv<{
        destroy(): undefined;
    }>;
    get json(): JsonType;
    set json(value: JsonType);
    private _playerDivClassReact;
    get playerDivClass(): PlayerDivClass<PlayerDiv> | undefined;
    set playerDivClass(value: PlayerDivClass<PlayerDiv> | undefined);
    get playerDivClassChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[PlayerDivClass<PlayerDiv> | undefined, PlayerDivClass<PlayerDiv> | undefined]>;
    constructor(id?: string);
    getProperties(language?: string): import("xbsj-xe2/dist-node/xe2-base-objects").Property[];
}
declare const extraComponentProps: {};
export declare namespace XbsjPlayerUI {
    const createDefaultProps: () => {
        execOnceFuncStr: string | undefined;
        updateFuncStr: string | undefined;
        toDestroyFuncStr: string | undefined;
        name: string;
        ref: string | undefined;
        devTags: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<string[] | undefined>;
        extras: import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<import("xbsj-xe2/dist-node/xe2-base-utils").JsonValue>;
        show: boolean | undefined;
        playerId: string | undefined;
        playerDivClassStr: string | undefined;
    };
}
export interface XbsjPlayerUI<PlayerDiv extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends ReactivePropsToNativePropsAndChanged<ReturnType<typeof XbsjPlayerUI.createDefaultProps> & typeof extraComponentProps> {
}
declare type JsonType = PartialWithUndefinedReactivePropsToNativeProps<ReturnType<typeof XbsjPlayerUI.createDefaultProps> & typeof extraComponentProps & {
    type: string;
}>;
export {};
