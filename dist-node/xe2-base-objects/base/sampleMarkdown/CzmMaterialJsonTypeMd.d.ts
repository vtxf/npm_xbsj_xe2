export declare const CzmMaterialJsonTypeMd = "\n### \u793A\u4F8B\n```javascript\n{\n    \"type\": \"Image\",\n    \"image\": \"${scene-manager-script-dir}/xe2-assets/scene-manager/images/location.png\"\n}\n```\n\n### CzmMaterialJsonType\n```javascript\ntype CzmMaterialJsonType = {\n    type: 'Color';\n    color?: [number, number, number, number];\n} | {\n    type: 'PolylineArrow';\n    color?: [number, number, number, number];\n} | {\n    type: 'PolylineDash';\n    color?: [number, number, number, number];\n    gapColor?: [number, number, number, number];\n    dashLength?: number;\n    dashPattern?: number;\n} | {\n    type: 'PolylineGlow';\n    color?: [number, number, number, number];\n    glowPower?: number;\n    taperPower?: number;\n} | {\n    type: 'PolylineOutline';\n    color?: [number, number, number, number];\n    outlineColor?: [number, number, number, number];\n    outlineWidth?: number;\n} | {\n    type: 'Image';\n    image?: string;\n    repeat?: number;\n} | {\n    type: 'DiffuseMap';\n    image?: string;\n    repeat?: number;\n    channels?: string;\n} | {\n    type: 'AlphaMap';\n    image?: string;\n    repeat?: number;\n    channel?: string;\n} | {\n    type: 'SpecularMap';\n    image?: string;\n    repeat?: number;\n    channel?: string;\n\n} | {\n    type: 'EmissionMap';\n    image?: string;\n    repeat?: number;\n    channels?: string;\n} | {\n    type: 'BumpMap';\n    image?: string;\n    repeat?: number;\n    channel?: string;\n    strength?: number;\n} | {\n    type: 'NormalMap';\n    image?: string;\n    repeat?: number;\n    channels?: string;\n    strength?: number;\n} | {\n    type: 'Grid';\n    color?: [number, number, number, number];\n    cellAlpha?: number;// Alpha value for the cells between grid lines. This will be combined with color.alpha.\n    lineCount?: number; //Object with x and y values specifying the number of columns and rows respectively.\n    lineThickness?: number; //Object with x and y values specifying the thickness of grid lines (in pixels where available).\n    lineOffset?: number; //Object with x and y values specifying the offset of grid lines (range is 0 to 1).\n} | {\n    type: 'Stripe';\n    horizontal?: boolean; //Boolean that determines if the stripes are horizontal or vertical.\n    evenColor?: [number, number, number, number];// rgba color object for the stripe's first color.\n    oddColor?: [number, number, number, number];// rgba color object for the stripe's second color.\n    offset?: number; //that controls at which point into the pattern to begin drawing; with 0.0 being the beginning of the even color, 1.0 the beginning of the odd color, 2.0 being the even color again, and any multiple or fractional values being in between.\n    repeat?: number;// that controls the total number of stripes, half light and half dark.\n} | {\n    type: 'Checkerboard';\n    lightColor?: [number, number, number, number];\n    darkColor?: [number, number, number, number];\n    repeat?: number;\n\n} | {\n    type: 'Dot';\n    lightColor?: [number, number, number, number];\n    darkColor?: [number, number, number, number];\n    repeat?: number;\n} | {\n    type: 'Water';\n    baseWaterColor?: [number, number, number, number];\n    blendColor?: [number, number, number, number];\n    specularMap?: string;\n    normalMap?: string;\n    frequency?: number;\n    animationSpeed?: number;\n    amplitude?: number;\n    specularIntensity?: number;\n} | {\n    type: 'RimLighting';\n    color?: [number, number, number, number];\n    rimColor?: [number, number, number, number];\n    width?: number;\n} | {\n    type: 'Fade';\n    fadeInColor?: [number, number, number, number];\n    fadeOutColor?: [number, number, number, number];\n    maximumDistance?: number;\n    repeat?: number;\n    fadeDirection?: number;\n    time?: number;\n} | {\n    type: 'ElevationContour';\n    color?: [number, number, number, number];\n    spacing?: number;\n    width?: number;\n\n} | {\n    type: 'ElevationRamp';\n    image?: string;\n    minimumHeight?: number;\n    maximumHeight?: number;\n} | {\n    type: 'AspectRamp';\n    image?: string;\n\n} | {\n    type: 'ElevationBand';\n    colors?: [number, number, number, number];\n    heights?: number;\n};\n\n```\n";
