import { GeoPolyline } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Destroyable, Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmViewDistanceRangeControl } from '../../utils2';
declare class Polyline extends Destroyable {
    constructor(sceneObject: GeoPolyline, czmViewer: CzmViewer, czmGeoPolyline: CzmGeoPolyline);
}
declare class GroundPolyline extends Destroyable {
    constructor(sceneObject: GeoPolyline, czmViewer: CzmViewer, czmGeoPolyline: CzmGeoPolyline);
}
export declare class CzmGeoPolyline extends CzmObject<GeoPolyline> {
    static readonly type: void;
    private _polylineOrGroundPolylineResetting;
    get polylineOrGroundPolylineResetting(): ObjResettingWithEvent<Polyline | GroundPolyline, Listener<[boolean | undefined, boolean | undefined]>>;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: GeoPolyline, czmViewer: CzmViewer);
}
export {};
