import { Destroyable, ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
import { PositionEditing } from '.';
import { SceneObject } from '../scene-manager';
export declare class PointEditing extends Destroyable {
    private _components;
    private _point;
    get point(): [number, number, number] | undefined;
    set point(value: [number, number, number] | undefined);
    get pointChanged(): [number, number, number] | undefined;
    get pointReact(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<[number, number, number] | undefined>;
    private _innerPointEditing;
    get innerPointEditing(): import("xbsj-xe2/dist-node/xe2-base-utils").ReactiveVariable<boolean>;
    private _sPositionsEditing;
    get sPositionEditing(): PositionEditing;
    constructor(positionsReactParams: ReactParamsType<[number, number, number][] | undefined>, pointEditing: ReactParamsType<boolean | undefined> | ReactParamsType<boolean>, _components: {
        add: (sceneObject: SceneObject) => void;
        delete: (sceneObject: SceneObject) => void;
    });
}
