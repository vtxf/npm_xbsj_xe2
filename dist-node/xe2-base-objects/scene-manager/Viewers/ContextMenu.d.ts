import { Destroyable, ObservableArray } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare type CommandType = {
    name: string;
    description?: string;
    func: () => void;
};
export declare type CommandGroupType = {
    name: string;
    commands: CommandType[];
};
export declare class ContextMenu extends Destroyable {
    private _show;
    get show(): boolean;
    set show(value: boolean);
    get showChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _windowPosition;
    get windowPosition(): [number, number];
    set windowPosition(value: [number, number]);
    get windowPositionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number], [number, number]]>;
    private _commandGroups;
    get commandGroups(): ObservableArray<CommandGroupType>;
    constructor();
}
