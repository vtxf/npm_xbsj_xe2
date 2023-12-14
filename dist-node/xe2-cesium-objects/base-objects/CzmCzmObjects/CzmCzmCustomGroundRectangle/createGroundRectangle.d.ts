export default function createGroundRectangle(
    owner: any, 
    center: [number, number, number], 
    width: number, 
    height: number, 
    originX: number, 
    originY: number, 
    rotation: number, 
    image?: string, 
    color?: [number, number, number, number],
    classificationType?: Cesium.ClassificationType,
    allowPicking?: boolean,
): Cesium.GroundPrimitive;