/// <reference types="cesium" />
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class CursorPositionInfo extends Destroyable {
    private _enabled;
    get enabled(): boolean;
    set enabled(value: boolean);
    get enabledChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _cursorPosition;
    get cursorPosition(): [number, number, number] | undefined;
    get cursorPositionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number] | undefined, [number, number, number] | undefined]>;
    constructor(viewer: Cesium.Viewer);
}
