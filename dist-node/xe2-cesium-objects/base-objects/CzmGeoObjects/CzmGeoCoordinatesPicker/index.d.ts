import { GeoCoordinatesPicker } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmGeoCoordinatesPicker extends CzmObject<GeoCoordinatesPicker> {
    static readonly type: void;
    constructor(coordinatesPicker: GeoCoordinatesPicker, czmViewer: CzmViewer);
    private _createMainCoordinates;
}
