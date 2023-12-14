import { GeoImageModel } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoImageModel extends OpenLayersObject<GeoImageModel> {
    static readonly type: void;
    constructor(sceneObject: GeoImageModel, olViewer: OpenLayersViewer);
}
