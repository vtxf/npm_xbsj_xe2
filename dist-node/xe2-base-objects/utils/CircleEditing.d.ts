import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-utils";
export declare class CircleEditing extends Destroyable {
    private _centerReact;
    private _radiusReact;
    private _editingReact;
    private _components;
    get centerReact(): ReactParamsType<[number, number, number] | undefined, any>;
    get radiusReact(): ReactParamsType<number, any>;
    get editingReact(): ReactParamsType<boolean, any>;
    get components(): {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    };
    private _positionsEditingResetting;
    constructor(_centerReact: ReactParamsType<[number, number, number] | undefined>, _radiusReact: ReactParamsType<number>, _editingReact: ReactParamsType<boolean>, _components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    });
}
