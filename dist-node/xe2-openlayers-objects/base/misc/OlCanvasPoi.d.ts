import { CanvasPoi, CanvasPrimitivesContext } from "xbsj-xe2/dist-node/xe2-utils";
import { OlBasePoi } from './OlBasePoi';
import { OlPoisContext } from './OlPoisContext';
export declare class OlCanvasPoi<T extends CanvasPoi> extends OlBasePoi {
    private _canvasPoi;
    constructor(canvasPoiClass: new (canvasPrimitivesContext: CanvasPrimitivesContext) => T, olPoisContext: OlPoisContext);
    get canvasPoi(): T;
}
