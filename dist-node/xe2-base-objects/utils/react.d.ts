import { ViewCollection } from "../SceneObjects";
export declare function map<T, R>(collection: Iterable<T>, func: (element: T) => R): R[];
export declare function equalsN3(left: [number, number, number] | undefined, right: [number, number, number] | undefined): boolean;
export declare const defaultCssText = "position: absolute;\nleft: 50%;\nbottom: 50px;\ntransform: translate(-50% , 0);\nz-index: 100;\nwidth:560px;\nheight:auto;\nbackground-color:rgba(0, 33, 43,0.6);\npadding: 10px;\nborder-radius: 8px;\n";
export declare const setFuncBtn: (sceneObject: ViewCollection, up: HTMLDivElement) => void;
export declare const setThumbnailList: (sceneObject: ViewCollection, bottom: HTMLDivElement) => void;
