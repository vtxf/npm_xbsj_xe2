import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class PositionsCenter extends Destroyable {
    private _center;
    get centerReact(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    get center(): [number, number, number] | undefined;
    get centerChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number, number] | undefined, [number, number, number] | undefined]>;
    constructor(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>);
}
