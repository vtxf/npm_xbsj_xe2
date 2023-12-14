import { OpenLayersViewer } from "../../../base";
import { Listener } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-utils";
export declare function registerOlPointEditor(event: Listener, sceneObject: SceneObject, openLayersViewer: OpenLayersViewer, options?: {
    editingPropertyName?: string;
    positionPropertyName?: string;
    positionComponentsNum?: number;
}): () => undefined;
