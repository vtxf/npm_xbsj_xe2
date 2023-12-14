import { Event, Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class MouseMoving extends Destroyable {
    private _div;
    private _diffPos;
    get diffPos(): [number, number] | undefined;
    get diffPosChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number] | undefined, [number, number] | undefined]>;
    private _startEvent;
    get startEvent(): Event<[]>;
    private _stopEvent;
    get stopEvent(): Event<[]>;
    debug: boolean;
    constructor(_div: HTMLDivElement);
}
