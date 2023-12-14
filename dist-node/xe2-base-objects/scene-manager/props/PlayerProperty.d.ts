import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { Property } from "./Property";
declare function createPlayingRatio(currentTimeReact: ReactParamsType<number | undefined>, durationReact: ReactParamsType<number | undefined>): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<number>;
export declare type PlayerPropertyDefaults = {
    playing: boolean;
    ratio: number;
    loop: boolean;
};
export declare class PlayerProperty extends Property {
    private _playingReact;
    private _ratioReact;
    private _loopReact;
    static createPlayingRatio: typeof createPlayingRatio;
    private _defaults;
    constructor(name: string, description: string, _playingReact: ReactParamsType<boolean | undefined>, _ratioReact: ReactParamsType<number | undefined>, _loopReact: ReactParamsType<boolean | undefined>, defaults?: Partial<PlayerPropertyDefaults>);
    get type(): string;
    get playingReact(): ReactParamsType<boolean | undefined, any>;
    get ratioReact(): ReactParamsType<number | undefined, any>;
    get loopReact(): ReactParamsType<boolean | undefined, any>;
    get defaults(): {
        playing: boolean;
        ratio: number;
        loop: boolean;
    };
}
export {};
