import { Destroyable, ReactParamsType } from "xbsj-xe2/dist-node/xe2-base-utils";
import { SceneObject } from "xbsj-xe2/dist-node/xe2-utils";
export declare class RectangleEditing extends Destroyable {
    private _heightReact;
    private _rectangleReact;
    private _editingReact;
    private _pointEditingReact;
    private _components;
    get heightReact(): ReactParamsType<number, any>;
    get rectangleReact(): ReactParamsType<[number, number, number, number] | undefined, any>;
    get editingReact(): ReactParamsType<boolean, any>;
    get pointEditingReact(): ReactParamsType<boolean, any>;
    get components(): {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    };
    private _positionsEditingResetting;
    private _centerEditingResetting;
    constructor(_heightReact: ReactParamsType<number>, _rectangleReact: ReactParamsType<[number, number, number, number] | undefined>, _editingReact: ReactParamsType<boolean>, _pointEditingReact: ReactParamsType<boolean>, _components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    });
}
