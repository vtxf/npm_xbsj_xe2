import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { GeoPolyline, GeoPolylineArcType } from "../../GeoPolyline";
import { GeoPolylineEditorImpl } from ".";
import { ObjResettingWithEvent } from "xbsj-xe2/dist-node/xe2-utils";
declare class Polyline extends Destroyable {
    private _polyline;
    get polyline(): GeoPolyline;
    constructor(wrapper: PolylineWrapper);
}
export declare class PolylineWrapper extends Destroyable {
    private _impl;
    static defaults: {
        show: boolean;
        color: [number, number, number, number];
        arcType: GeoPolylineArcType;
        width: number;
    };
    private _show;
    get show(): boolean | undefined;
    get showChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>;
    set show(value: boolean | undefined);
    private _color;
    get color(): [number, number, number, number] | undefined;
    get colorChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number, number] | undefined, [number, number, number, number] | undefined]>;
    set color(value: [number, number, number, number] | undefined);
    private _width;
    get width(): number | undefined;
    get widthChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    set width(value: number | undefined);
    private _arcType;
    get arcType(): GeoPolylineArcType | undefined;
    get arcTypeChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[GeoPolylineArcType | undefined, GeoPolylineArcType | undefined]>;
    set arcType(value: GeoPolylineArcType | undefined);
    get impl(): GeoPolylineEditorImpl;
    private _resetting;
    get resetting(): ObjResettingWithEvent<Polyline, import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean | undefined, boolean | undefined]>>;
    flyTo(duration?: number): void;
    constructor(_impl: GeoPolylineEditorImpl);
}
export {};
