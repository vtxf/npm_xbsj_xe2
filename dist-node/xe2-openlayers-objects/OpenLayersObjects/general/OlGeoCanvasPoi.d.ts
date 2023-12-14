import { GeoCanvasPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from 'xbsj-xe2/dist-node/xe2-openlayers-objects/base';
export declare class OlGeoCanvasPoi extends OpenLayersObject<GeoCanvasPoi> {
    static readonly type: void;
    constructor(sceneObject: GeoCanvasPoi, olViewer: OpenLayersViewer);
}
