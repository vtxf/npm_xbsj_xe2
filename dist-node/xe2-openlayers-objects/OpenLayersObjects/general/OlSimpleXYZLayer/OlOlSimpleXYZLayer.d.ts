import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlSimpleXYZLayer } from './OlSimpleXYZLayer';
import "./gcj02Mecator";
export declare class OlOlSimpleXYZLayer extends OpenLayersObject<OlSimpleXYZLayer> {
    static readonly type: void;
    constructor(sceneObject: OlSimpleXYZLayer, olViewer: OpenLayersViewer);
}
