import * as Cesium from 'cesium';
import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import { CzmSignalTransmissionCollection } from '../../CzmObjects/CzmSignalTransmissionCollection';
export declare class SignalTransmissionCollectionPrimitive extends Destroyable {
    private _viewer;
    private _nativePrimitive?;
    get nativePrimitive(): Cesium.Primitive | undefined;
    constructor(_viewer: Cesium.Viewer, sceneObject: CzmSignalTransmissionCollection, getTextureFunc?: () => Cesium.Texture);
}
