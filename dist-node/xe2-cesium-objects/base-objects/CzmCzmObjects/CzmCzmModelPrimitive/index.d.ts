import * as Cesium from 'cesium';
import { CzmObject, CzmViewer } from '../../../core';
import { CzmModelPrimitive } from '../../CzmObjects';
import { CzmViewDistanceRangeControl } from '../../utils2';
export declare class CzmCzmModelPrimitive extends CzmObject<CzmModelPrimitive> {
    static readonly type: void;
    private _primitive?;
    get primitive(): Cesium.Model | undefined;
    private _customShaderInstance?;
    private _gltf?;
    get gltf(): any;
    private _czmViewVisibleDistanceRangeControl;
    get czmViewerVisibleDistanceRangeControl(): CzmViewDistanceRangeControl;
    get visibleAlpha(): number;
    get visibleAlphaChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[number, number]>;
    private _viewDistanceDebugBinding;
    constructor(sceneObject: CzmModelPrimitive, czmViewer: CzmViewer);
    get ready(): boolean;
}
