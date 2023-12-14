import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { DepthPolygon } from './DepthPolygon';
import { GroundPolygon } from './GroundPolygon';
import { Polygon } from './Polygon';
import { CzmViewDistanceRangeControl } from '../../utils2';
export declare class CzmGeoPolygon extends CzmObject<GeoPolygon> {
    static readonly type: void;
    private _polygonOrGroundPolygonResetting;
    get polygonOrGroundPolygonResetting(): ObjResettingWithEvent<GroundPolygon | Polygon | DepthPolygon, Listener<[boolean | undefined, boolean | undefined]>>;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: GeoPolygon, czmViewer: CzmViewer);
}
