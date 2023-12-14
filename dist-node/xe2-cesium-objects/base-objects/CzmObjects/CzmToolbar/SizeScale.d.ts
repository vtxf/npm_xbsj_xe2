import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmToolbar } from "./index";
export declare class SizeScale extends Destroyable {
    private _geoToolbar;
    private _div;
    get geoToolbar(): CzmToolbar;
    get div(): HTMLDivElement;
    private _mouseMoving;
    constructor(_geoToolbar: CzmToolbar, _div: HTMLDivElement);
}
