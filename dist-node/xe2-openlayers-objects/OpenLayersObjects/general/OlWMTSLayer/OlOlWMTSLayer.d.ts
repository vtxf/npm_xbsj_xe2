import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlWMTSLayer } from './OlWMTSLayer';
export declare class OlOlWMTSLayer extends OpenLayersObject<OlWMTSLayer> {
    static readonly type: void;
    constructor(sceneObject: OlWMTSLayer, olViewer: OpenLayersViewer);
}
