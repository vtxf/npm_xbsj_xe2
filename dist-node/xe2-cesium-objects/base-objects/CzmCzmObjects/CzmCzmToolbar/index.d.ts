import { GeoCustomDivPoi } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmToolbar } from '../../CzmObjects';
export declare class CzmCzmToolbar extends CzmObject<CzmToolbar> {
    static readonly type: void;
    private _customDiv;
    get customDiv(): GeoCustomDivPoi<{
        destroy(): undefined;
    }>;
    constructor(sceneObject: CzmToolbar, czmViewer: CzmViewer);
}
