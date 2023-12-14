import * as Cesium from 'cesium';
// import { JsonValue } from '../../xr-base-utils';
import { JsonValue } from 'xbsj-xe2/dist-node/xe2-base-utils';

declare global {
    namespace XE {
        var ready: () => Promise<void>;
        var HTML: {
            cesiumDir: string;
            loadJS: (url: string) => Promise<void>;
        };
        interface Earth {
            sceneTree: {
                root: JsonValue;
            };
            czm: {
                scene: Cesium.Scene;
                viewer: Cesium.Viewer;
            };
            pickPosition(movePosition: {
                x: number;
                y: number;
            }, result?: [number, number, number]): [number, number, number] | undefined;
            camera: {
                rotation: [number, number, number];
                position: [number, number, number];
                readonly flying: boolean;
                flyTo(position: [number, number, number], viewDistance?: number, rotation?: [number, number, number], duration?: number): void;
                flyAround(position: [number, number, number], viewDistance?: number, rotation?: [number, number, number], flyToDuration?: number, aroundSpeed?: number): void;
            },
            xbsjFromJSON(json: JsonValue): void;
            toJSON(): JsonValue;
        }
        var Earth: {
            prototype: Earth;
            new (container: HTMLDivElement): Earth;
        };
        namespace Obj {
            interface XEDestroyable {
                destroy(): void;
            }
            interface Tileset extends XEDestroyable {
                show: boolean;
                url: string;
                xbsjCustomTexture?: Cesium.Texture;
                xbsjCustomShader: {
                    vsHeader?: string;
                    vsBody?: string;
                    fsHeader?: string;
                    fsBody?: string;
                };
                flyTo(): void;
            }
            var Tileset: {
                prototype: Tileset;
                new (earth: any): Tileset;
            };
        }
    
        namespace Tool {
            namespace Math {
                function distance(left: [number, number, number], right: [number, number, number]): number;
                function hpr(origin: [number, number, number], destination: [number, number, number], result?: [number, number, number]): [number, number, number];
            }
        }
    }
}

// export {};
