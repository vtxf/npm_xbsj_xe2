import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-utils";
export declare class RayEditing extends Destroyable {
    private _originReact;
    private _rotationReact;
    private _distanceReact;
    private _editingReact;
    private _components;
    get originReact(): ReactParamsType<[number, number, number] | undefined, any>;
    get rotationReact(): ReactParamsType<[number, number, number], any>;
    get distanceReact(): ReactParamsType<number, any>;
    get editingReact(): ReactParamsType<boolean, any>;
    get components(): {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    };
    private _positionsEditingResetting;
    constructor(_originReact: ReactParamsType<[number, number, number] | undefined>, _rotationReact: ReactParamsType<[number, number, number]>, _distanceReact: ReactParamsType<number>, _editingReact: ReactParamsType<boolean>, _components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    });
}
