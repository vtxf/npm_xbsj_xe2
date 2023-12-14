import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import * as Cesium from 'cesium';
export declare class CursorInfoWrapper extends Destroyable {
    private _viewer;
    private _text;
    get text(): string;
    set text(value: string);
    get textChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string, string]>;
    private _show;
    get show(): boolean;
    set show(value: boolean);
    get showChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    constructor(_viewer: Cesium.Viewer);
}
