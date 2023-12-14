import { Destroyable, Event } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { GeoCoordinatesEditorAndPicker } from '../../../GeoCoordinatesEditorAndPicker';
import { EditingPositionRefType } from '../../utils/createEditingPositionRef';
import { PenSplineVertex } from '../../PenSplineVertex';
export declare class MenuPoiCommandProcessing extends Destroyable {
    private _poiAddingEvent;
    get poiAddingEvent(): Event<[vertex: PenSplineVertex]>;
    constructor(commandEvent: Event<[vertex: PenSplineVertex, commandName: string]>, editingVertexRef: EditingPositionRefType, deleteFunc: (vertex: PenSplineVertex) => void, geoCoordinatesEditorAndPicker: GeoCoordinatesEditorAndPicker);
}
