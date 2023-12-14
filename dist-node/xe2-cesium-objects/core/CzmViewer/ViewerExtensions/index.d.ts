import { ContainerViewerInteraction } from 'xbsj-xe2/dist-node/xe2-base-objects';
import * as Cesium from 'cesium';
import { Destroyable } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { CzmPoisContext } from "xbsj-xe2/dist-node/xe2-base-cesium";
import { ClassicNavigator } from './ClassicNavigator';
import { CursorInfoWrapper } from "./CursorInfoWrapper";
import { CursorPositionInfo } from './CursorPositionInfo';
import { ImageriesManager } from "./ImageriesManager";
import { PickingManager } from "./PickingManager";
import { TerrainManager } from "./TerrainManager";
export * from './ClassicNavigator';
export * from "./CursorInfoWrapper";
export * from "./ImageriesManager";
export * from "./PickingManager";
export * from "./TerrainManager";
export declare function getViewerExtensions(viewer: Cesium.Viewer): ViewerExtensions | undefined;
export declare function setViewerExtensions(viewer: Cesium.Viewer, viewerExtensions: ViewerExtensions | undefined): void;
export declare class ViewerExtensions extends Destroyable {
    private _viewer;
    private _interactionUseBubble;
    get interactionUseBubble(): ContainerViewerInteraction;
    get interaction(): ContainerViewerInteraction;
    private _interactionUseCapture;
    get interactionUseCapture(): ContainerViewerInteraction;
    private _poiContext;
    get poiContext(): CzmPoisContext;
    private _cameraChanged;
    get cameraChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Event<[]>;
    private _pickingManager;
    get pickingManager(): PickingManager;
    private _imageriesManager;
    get imageriesManager(): ImageriesManager;
    private _terrainManager;
    get terrainManager(): TerrainManager;
    private _cursorInfo;
    get cursorInfo(): CursorInfoWrapper;
    private _classicNavigator;
    get classicNavigator(): ClassicNavigator | undefined;
    get classicNavigatorChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ClassicNavigator | undefined, ClassicNavigator | undefined]>;
    private _needClassicNavigator;
    /**
     * 一旦调用，就不能再关闭！
     */
    needClassicNavigator(): void;
    private _cursorPositionInfo;
    get cursorPositionInfo(): CursorPositionInfo;
    constructor(_viewer: Cesium.Viewer);
}
