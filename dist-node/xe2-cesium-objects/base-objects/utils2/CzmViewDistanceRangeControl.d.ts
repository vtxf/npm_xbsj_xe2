import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Listener, ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmViewer } from '../../core';
declare class ViewDistanceDebugInner extends Destroyable {
    private _geoDivText;
    constructor(control: CzmViewDistanceRangeControl);
}
declare class ViewDistanceDebug extends Destroyable {
    private _control;
    private _debugObjResetting;
    get debugObjResetting(): ObjResettingWithEvent<ViewDistanceDebugInner, Listener<[boolean, boolean]>>;
    constructor(_control: CzmViewDistanceRangeControl);
}
export declare class CzmViewDistanceRangeControl extends Destroyable {
    private _czmViewer;
    private _positionReact;
    private _visibleAlpha;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): Listener<[number, number]>;
    private _viewDistance;
    get viewDistance(): number;
    set viewDistance(value: number);
    get viewDistanceChanged(): Listener<[number, number]>;
    private _debug;
    get debug(): boolean;
    set debug(value: boolean);
    get debugChanged(): Listener<[boolean, boolean]>;
    get positionReact(): ReactParamsType<[number, number, number] | undefined, any>;
    get czmViewer(): CzmViewer;
    private _viewDistanceDebug;
    get viewDistanceDebug(): ViewDistanceDebug;
    constructor(_czmViewer: CzmViewer, viewDistanceRangeReact: ReactParamsType<[number, number, number, number] | undefined>, _positionReact: ReactParamsType<[number, number, number] | undefined>, radiusReact?: ReactParamsType<number | undefined>);
}
export {};
