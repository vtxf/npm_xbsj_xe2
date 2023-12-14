import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlLineString } from './OlLineString';
export declare class OlOlLineString extends OpenLayersObject<OlLineString> {
    static readonly type: void;
    constructor(sceneObject: OlLineString, olViewer: OpenLayersViewer);
}
