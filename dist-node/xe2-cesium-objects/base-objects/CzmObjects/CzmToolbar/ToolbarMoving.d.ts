import { GeoCustomDivPoi } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class ToolbarMoving extends Destroyable {
    private _geoCustomDivPoi;
    private _div;
    get geoCustomDivPoi(): GeoCustomDivPoi<{
        destroy(): undefined;
    }>;
    get div(): HTMLDivElement;
    private _mouseMoving;
    constructor(_geoCustomDivPoi: GeoCustomDivPoi, _div: HTMLDivElement);
}
