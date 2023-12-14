import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { OlPoisContext } from './OlPoisContext';
export declare class OlBasePoi extends Destroyable {
    protected _olPoisContext: OlPoisContext;
    private _show;
    get show(): boolean;
    set show(value: boolean);
    get showChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _position;
    get position(): [number, number] | undefined;
    set position(value: [number, number] | undefined);
    get positionChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[[number, number] | undefined, [number, number] | undefined]>;
    private _actualShow;
    protected get actualShow(): boolean;
    protected get actualShowChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    constructor(_olPoisContext: OlPoisContext);
}
