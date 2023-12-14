import { GeoEllipse } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { Listener } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { ObjResettingWithEvent } from 'xbsj-xe2/dist-node/xe2-utils';
import { CzmObject, CzmViewer } from '../../../core';
import { Ellipse } from './Ellipse';
import { GroundEllipse } from './GroundEllipse';
export declare class CzmGeoEllipse extends CzmObject<GeoEllipse> {
    static readonly type: void;
    private _ellipseOrGroundEllipseResetting;
    get ellipseOrGroundEllipseResetting(): ObjResettingWithEvent<GroundEllipse | Ellipse, Listener<[boolean | undefined, boolean | undefined]>>;
    constructor(sceneObject: GeoEllipse, czmViewer: CzmViewer);
}
