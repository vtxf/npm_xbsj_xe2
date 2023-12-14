import { GeoCustomDivPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmViewDistanceRangeControl } from '../../utils2';
export declare class CzmGeoCustomDivPoi<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends CzmObject<GeoCustomDivPoi<DivClass>> {
    static readonly type: void;
    private _objResetting;
    get objResetting(): ObjResettingWithEvent<DivClass, Listener<any[]>>;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewerVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: GeoCustomDivPoi<DivClass>, czmViewer: CzmViewer);
}
