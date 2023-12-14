import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from '.';
import { Legend } from "./Legend";
export declare class ViewerLegend extends Destroyable {
    private _czmViewer;
    private _resolution;
    get resolution(): number | undefined;
    set resolution(value: number | undefined);
    get resolutionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _center;
    get center(): [number, number, number] | undefined;
    get centerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number] | undefined, [number, number, number] | undefined]>;
    private _zoom;
    get zoom(): number | undefined;
    get zoomChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _legend;
    get legend(): Legend;
    constructor(_czmViewer: CzmViewer);
}
