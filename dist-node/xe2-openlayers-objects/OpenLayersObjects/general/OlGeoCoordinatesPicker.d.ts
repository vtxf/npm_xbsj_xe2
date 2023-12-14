import { GeoCoordinatesPicker } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoCoordinatesPicker extends OpenLayersObject<GeoCoordinatesPicker> {
    static readonly type: void;
    constructor(coordinatesPicker: GeoCoordinatesPicker, olViewer: OpenLayersViewer);
    private _createMainCoordinates;
}
