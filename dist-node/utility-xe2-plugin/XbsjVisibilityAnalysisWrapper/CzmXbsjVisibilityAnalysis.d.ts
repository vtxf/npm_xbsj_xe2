import { CzmObject, CzmViewer } from 'xbsj-xe2/dist-node/xe2-cesium-objects';
import { XbsjVisibilityAnalysis } from './XbsjVisibilityAnalysis';
export declare class CzmXbsjVisibilityAnalysis extends CzmObject<XbsjVisibilityAnalysis> {
    static readonly type: void;
    constructor(visibilityAnalysis: XbsjVisibilityAnalysis, czmViewer: CzmViewer);
}
