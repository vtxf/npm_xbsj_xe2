import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from '../../../core';
export declare class LastCursorPos extends Destroyable {
    private _czmViewer;
    private _winPos;
    get winPos(): [number, number] | undefined;
    set winPos(value: [number, number] | undefined);
    get winPosChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number] | undefined, [number, number] | undefined]>;
    constructor(_czmViewer: CzmViewer);
}
