import { UeCloudViewerBase } from "./UeCloudViewerBase";
import { ESFlyToParam, NavigationModeCallFuncParam } from "./UeFuncsType";
import { UePickedInfo } from "./ViewerCreating";
declare const flyToCallFunc: (viewer: UeCloudViewerBase, id?: string | undefined, duration?: number | undefined, flyToParam?: ESFlyToParam | undefined, position?: [number, number, number] | undefined) => Promise<{
    endType: 0 | 1;
} | undefined>;
declare const destroyCallFunc: (viewer: UeCloudViewerBase, id: string) => void;
declare const calcFlyToParamCallFunc: (viewer: UeCloudViewerBase, id: string) => void;
declare const refreshTilesetCallFunc: (viewer: UeCloudViewerBase, id: string) => void;
declare const flyInCallFunc: (viewer: UeCloudViewerBase, id?: string | undefined, position?: [number, number, number] | undefined, rotation?: [number, number, number] | undefined, duration?: number | undefined) => Promise<{
    endType: 0 | 1;
} | undefined>;
declare const flyInDefaultCameraCallFunc: (viewer: UeCloudViewerBase, Duration?: number | undefined) => Promise<{
    error: string | undefined;
} | undefined>;
declare const resetWithCurrentCameraCallFunc: (viewer: UeCloudViewerBase, id: string) => void;
declare const smoothMoveWithRotationCallFunc: (viewer: UeCloudViewerBase, id: string, Destination: [number, number, number], NewRotation: [number, number, number], Time: number) => void;
declare const smoothMoveOnGroundCallFunc: (viewer: UeCloudViewerBase, id: string, Lon: number, Lat: number, Ground: string, Time: number) => void;
declare const smoothMoveWithRotationOnGroundCallFunc: (viewer: UeCloudViewerBase, id: string, NewRotation: [number, number, number], Lon: number, Lat: number, Time: number, Ground: string) => void;
declare const HighlightFeatureCallFunc: (viewer: UeCloudViewerBase, id: string, HlId: string) => void;
declare const HighlightFeatureAndFlyToCallFunc: (viewer: UeCloudViewerBase, id: string, HlId: string, Duration: number) => void;
declare const SetLayerVisibleCallFunc: (viewer: UeCloudViewerBase, id: string, LayerJson: string) => void;
declare const SetLayerColorCallFunc: (viewer: UeCloudViewerBase, id: string, LayerJson: string) => void;
declare const smoothMoveCallFunc: (viewer: UeCloudViewerBase, id: string, Destination: [number, number, number], Time: number) => void;
declare const callFunctionCallFunc: (viewer: UeCloudViewerBase, id: string, fn: string, p: {
    [k: string]: any;
}) => void;
declare const setNodePositionCallFunc: (viewer: UeCloudViewerBase, id: string, NodeName: string, NodePosition: [number, number, number]) => void;
declare const setNodeRotationCallFunc: (viewer: UeCloudViewerBase, id: string, NodeName: string, NodeRotation: [number, number, number]) => void;
declare const setNodeScaleCallFunc: (viewer: UeCloudViewerBase, id: string, NodeName: string, NodeScale: [number, number, number]) => void;
declare const changeNavigationModeCallFunc: (viewer: UeCloudViewerBase, parms: NavigationModeCallFuncParam) => Promise<{
    error: string | undefined;
} | undefined>;
declare const setGlobalPropertyCallFunc: (viewer: UeCloudViewerBase, params: {
    [k: string]: any;
}) => Promise<{
    error: string | undefined;
} | undefined>;
declare const quitCallFunc: (viewer: UeCloudViewerBase) => Promise<{
    error: string | undefined;
} | undefined>;
declare const pickCallFunc: (viewer: UeCloudViewerBase, screenPosition_?: [number, number] | undefined, attachedInfo?: any, parentInfo_?: boolean | undefined) => Promise<UePickedInfo | undefined>;
export { HighlightFeatureAndFlyToCallFunc, HighlightFeatureCallFunc, SetLayerColorCallFunc, SetLayerVisibleCallFunc, calcFlyToParamCallFunc, callFunctionCallFunc, changeNavigationModeCallFunc, destroyCallFunc, flyInCallFunc, flyInDefaultCameraCallFunc, flyToCallFunc, pickCallFunc, quitCallFunc, refreshTilesetCallFunc, resetWithCurrentCameraCallFunc, setGlobalPropertyCallFunc, setNodePositionCallFunc, setNodeRotationCallFunc, setNodeScaleCallFunc, smoothMoveCallFunc, smoothMoveOnGroundCallFunc, smoothMoveWithRotationCallFunc, smoothMoveWithRotationOnGroundCallFunc };
