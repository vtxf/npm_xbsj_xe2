import { GeoCustomDivPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { OpenLayersObject, OpenLayersViewer } from '../../base';
export declare class OlGeoCustomDivPoi<DivClass extends {
    destroy(): undefined;
} = {
    destroy(): undefined;
}> extends OpenLayersObject<GeoCustomDivPoi<DivClass>> {
    static readonly type: void;
    constructor(sceneObject: GeoCustomDivPoi<DivClass>, olViewer: OpenLayersViewer);
}
