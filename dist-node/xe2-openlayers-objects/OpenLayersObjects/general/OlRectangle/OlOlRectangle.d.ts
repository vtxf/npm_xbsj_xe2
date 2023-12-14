import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlRectangle } from './OlRectangle';
export declare class OlOlRectangle extends OpenLayersObject<OlRectangle> {
    static readonly type: void;
    constructor(sceneObject: OlRectangle, olViewer: OpenLayersViewer);
}
