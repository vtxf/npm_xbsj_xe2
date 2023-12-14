import { View } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmView extends CzmObject<View> {
    static readonly type: void;
    constructor(sceneObject: View, czmViewer: CzmViewer);
    /**
     *
     * @param flag 1表示位置 2表示姿态 4表示视距 1|2|4表示全部
     * @returns
     */
    resetWithCurrentCamera(flag: number): void;
    flyTo(duration?: number, onlyActived?: boolean): void;
}
