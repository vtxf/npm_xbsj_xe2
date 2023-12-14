import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlView } from './OlView';
export declare class OlOlView extends OpenLayersObject<OlView> {
    static readonly type: void;
    constructor(sceneObject: OlView, olViewer: OpenLayersViewer);
}
