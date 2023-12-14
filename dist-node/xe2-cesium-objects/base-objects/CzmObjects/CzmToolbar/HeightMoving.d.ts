import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from '../../../core';
import { CzmToolbar } from "./index";
export declare class HeightMoving extends Destroyable {
    private _geoToolbar;
    private _div;
    private _czmViewer;
    get geoToolbar(): CzmToolbar;
    get div(): HTMLDivElement;
    get czmViewer(): CzmViewer;
    private _mouseMoving;
    constructor(_geoToolbar: CzmToolbar, _div: HTMLDivElement, _czmViewer: CzmViewer);
}
