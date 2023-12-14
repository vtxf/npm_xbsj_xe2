import { GeoCanvasPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmViewDistanceRangeControl } from '../../utils2';
export declare class CzmGeoCanvasPoi extends CzmObject<GeoCanvasPoi> {
    static readonly type: void;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewerVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: GeoCanvasPoi, czmViewer: CzmViewer);
}
