import { CzmSignalTransmission } from '../../CzmObjects';
import * as Cesium from 'cesium';
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
export declare class SignalTransmissionPrimitive extends Destroyable {
    private _viewer;
    private _nativePrimitive?;
    get nativePrimitive(): Cesium.Primitive | undefined;
    constructor(_viewer: Cesium.Viewer, sceneObject: CzmSignalTransmission, getTextureFunc?: () => Cesium.Texture);
}
