import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmTexture } from '../../CzmObjects';
import { CzmTexture as CzmNativeTexture } from 'xbsj-xe2/dist-node/xe2-base-cesium';
export declare class CzmCzmTexture extends CzmObject<CzmTexture> {
    static readonly type: void;
    private _czmNativeTexture;
    get czmNativeTexture(): CzmNativeTexture;
    getDefaultTexture(): Cesium.Texture;
    get texture(): Cesium.Texture;
    constructor(sceneObject: CzmTexture, czmViewer: CzmViewer);
}
