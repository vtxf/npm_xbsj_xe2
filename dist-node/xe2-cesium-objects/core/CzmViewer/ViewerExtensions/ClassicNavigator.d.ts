import { Destroyable } from "xbsj-xe2/dist-node/xe2-base-utils";
import * as Cesium from 'cesium';
export declare type ClassicNavigatorCssStyle = [left: number | undefined, top: number | undefined, right: number | undefined, bottom: number | undefined];
export declare class ClassicNavigator extends Destroyable {
    private _viewer;
    private _showCompass;
    get showCompass(): boolean;
    set showCompass(value: boolean);
    get showCompassChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _compassStyle;
    get compassStyle(): ClassicNavigatorCssStyle | undefined;
    set compassStyle(value: ClassicNavigatorCssStyle | undefined);
    get compassStyleChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ClassicNavigatorCssStyle | undefined, ClassicNavigatorCssStyle | undefined]>;
    private _showDistanceLegend;
    get showDistanceLegend(): boolean;
    set showDistanceLegend(value: boolean);
    get showDistanceLegendChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[boolean, boolean]>;
    private _distanceLegendStyle;
    get distanceLegendStyle(): ClassicNavigatorCssStyle | undefined;
    set distanceLegendStyle(value: ClassicNavigatorCssStyle | undefined);
    get distanceLegendStyleChanged(): import("xbsj-xe2/dist-node/xe2-base-utils").Listener<[ClassicNavigatorCssStyle | undefined, ClassicNavigatorCssStyle | undefined]>;
    constructor(_viewer: Cesium.Viewer);
}
