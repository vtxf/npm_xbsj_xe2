import { ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { Property } from "./Property";
export declare type ViewPlayerPropertyDefaults = {
    playing: boolean;
    loop: boolean;
    index: number;
};
export declare class ViewPlayerProperty extends Property {
    private _playingReact;
    private _stopFn;
    private _loopReact;
    private _defaults;
    constructor(name: string, description: string, _playingReact: ReactParamsType<boolean | undefined>, _stopFn: () => void, _loopReact: ReactParamsType<boolean | undefined>, defaults?: Partial<ViewPlayerPropertyDefaults>);
    get type(): string;
    get playingReact(): ReactParamsType<boolean | undefined, any>;
    get loopReact(): ReactParamsType<boolean | undefined, any>;
    get stopFn(): () => void;
    get defaults(): {
        playing: boolean;
        loop: boolean;
    };
}
