import { GeoAxis, GeoPoint, View } from "xbsj-xe2/dist-node/xe2-base-objects";
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmViewer } from "xbsj-xe2/dist-node/xe2-cesium-objects/core";
import { CzmModelPrimitive } from "../../CzmObjects";
export declare class CzmCameraHelper extends Destroyable {
    private _model;
    get model(): CzmModelPrimitive;
    private _geoPoint;
    get geoPoint(): GeoPoint;
    private _geoAxis;
    get geoAxis(): GeoAxis;
    constructor(sceneObject: View, czmViewer: CzmViewer);
}
