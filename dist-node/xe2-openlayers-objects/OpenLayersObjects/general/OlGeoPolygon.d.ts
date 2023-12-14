import { GeoPolygon } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoPolygon extends OpenLayersObject<GeoPolygon> {
    static readonly type: void;
    constructor(sceneObject: GeoPolygon, olViewer: OpenLayersViewer);
}
