import { OpenLayersObject, OpenLayersViewer } from '../../../base';
import { OlBezierSpline } from './OlBezierSpline';
export declare class OlOlBezierSpline extends OpenLayersObject<OlBezierSpline> {
    static readonly type: void;
    constructor(sceneObject: OlBezierSpline, olViewer: OpenLayersViewer);
}
