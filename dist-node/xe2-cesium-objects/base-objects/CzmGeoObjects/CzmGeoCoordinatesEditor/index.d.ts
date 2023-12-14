import { GeoCoordinatesEditor } from 'xbsj-xe2/dist-node/xe2-base-objects';
import { CzmObject, CzmViewer } from '../../../core';
export declare class CzmGeoCoordinatesEditor extends CzmObject<GeoCoordinatesEditor> {
    static readonly type: void;
    constructor(coordinatesEditor: GeoCoordinatesEditor, czmViewer: CzmViewer);
    private _createGrid;
    private _createOriginCoordinates;
    private _createMainCoordinates;
    private _createHelpLines;
    private _createCircle;
}
