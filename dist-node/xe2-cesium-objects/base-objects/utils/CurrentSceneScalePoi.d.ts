import { CzmViewer } from '../../core';
import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
/**
 * 用来显示设置屏幕像素以后程序自动计算的缩放值
 */
export declare class CurrentSceneScalePoi extends Destroyable {
    constructor(czmViewer: CzmViewer, showSceneScaleReact: ReactParamsType<boolean | undefined>, positionReact: ReactParamsType<[number, number, number] | undefined>, sceneScaleFromPixelSize: ReactParamsType<number | undefined>);
}
