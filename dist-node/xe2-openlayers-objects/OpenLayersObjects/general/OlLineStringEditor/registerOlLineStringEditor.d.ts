import { OpenLayersViewer } from "../../../base";
import { Listener } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-utils";
export declare function registerOlLineStringEditor(event: Listener, sceneObject: SceneObject, openLayersViewer: OpenLayersViewer, options?: {
    editingPropertyName?: string;
    positionsPropertyName?: string;
    allowDeleting?: boolean;
    allowInserting?: boolean;
    maxPoints?: number;
    minPoints?: number;
    strokeColor?: [number, number, number, number];
}): () => undefined;
