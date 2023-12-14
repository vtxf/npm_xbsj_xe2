import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare function getLegendNum(f: number): number[] | undefined;
export declare class Legend extends Destroyable {
    private _lengthInPixels;
    get lengthInPixels(): number | undefined;
    set lengthInPixels(value: number | undefined);
    get lengthInPixelsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _resolution;
    get resolution(): number | undefined;
    set resolution(value: number | undefined);
    get resolutionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _computedLengthInPixels;
    get computedLengthInPixels(): number | undefined;
    get computedLengthInPixelsChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _computedLengthInMeters;
    get computedLengthInMeters(): number | undefined;
    get computedLengthInMetersChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number | undefined, number | undefined]>;
    private _computedLengthInStr;
    get computedLengthInStr(): string | undefined;
    get computedLengthInStrChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[string | undefined, string | undefined]>;
    constructor();
}
