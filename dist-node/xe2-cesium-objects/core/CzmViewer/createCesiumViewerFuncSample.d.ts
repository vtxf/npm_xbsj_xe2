export declare const createCesiumViewerFuncSample = "\n####  \u793A\u4F8B\u4EE3\u78011\n```\nasync function initCesiumViewer(container, czmViewer) {\n    const viewer = await XE2.g.defaultCreateCesiumViewerFunc(container, czmViewer);\n\n    // \u82E5\u539FCzm\u7248\u6743\u4FE1\u606F\u5C55\u793A\u4F4D\u7F6E\u906E\u6321\u91CD\u8981\u4FE1\u606F\uFF0C\u53EF\u5C06\u4EE5\u4E0B\u8BED\u53E5\u89E3\u6CE8\u91CA\uFF0C\u5728\u522B\u7684\u4F4D\u7F6E\u5C55\u793A\n    // viewer._cesiumWidget._creditContainer.style.display = \"none\";\n\n    return viewer;\n}\n```\n\n#### \u793A\u4F8B\u4EE3\u78012\n```\nasync function initCesiumViewer(container, czmViewer) {\n    // \u4F7F\u7528\u79BB\u7EBF\u5730\u56FE\uFF0C\u521B\u5EFAviewer\n    const viewer = new Cesium.Viewer(container, {\n        // imageryProvider: provider,\n        // imageryProvider: new Cesium.TileMapServiceImageryProvider({\n        //     url: Cesium.buildModuleUrl(\"Assets/Textures/NaturalEarthII\"),\n        // }),\n        animation: false,\n        baseLayerPicker: false,\n        fullscreenButton: false,\n        geocoder: false,\n        homeButton: false,\n        infoBox: false,\n        sceneModePicker: false,\n        selectionIndicator: false,\n        timeline: false,\n        navigationHelpButton: false,\n        navigationInstructionsInitiallyVisible: false,\n        scene3DOnly: true,\n        // @ts-ignore\n        msaaSamples: czmViewer.msaaSamples,\n    });\n\n    // \u4E0D\u77E5\u9053\u4ECE\u54EA\u4E2A\u7248\u672C\u5F00\u59CB\uFF0CCesium\u9ED8\u8BA4\u4F1A\u589E\u52A0Ion\u5F71\u50CF\uFF01\n    viewer.imageryLayers.removeAll();\n\n    viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date('2022-04-19T20:00:53.10067292911116965Z'));\n\n    // \u539F\u59CB\u8BBE\u7F6E\n    // scene.screenSpaceCameraController.lookEventTypes = { eventType : CameraEventType.LEFT_DRAG, modifier : KeyboardEventModifier.SHIFT };\n    // scene.screenSpaceCameraController.zoomEventTypes = [CameraEventType.RIGHT_DRAG, CameraEventType.WHEEL, CameraEventType.PINCH]\n    // this._originLookEventTypes = scene.screenSpaceCameraController.lookEventTypes;\n    // this._originZoomEventTypes = scene.screenSpaceCameraController.zoomEventTypes;\n    viewer.scene.screenSpaceCameraController.lookEventTypes = [{ eventType: Cesium.CameraEventType.RIGHT_DRAG }, { eventType: Cesium.CameraEventType.RIGHT_DRAG, modifier: Cesium.KeyboardEventModifier.SHIFT }];\n    viewer.scene.screenSpaceCameraController.zoomEventTypes = [Cesium.CameraEventType.WHEEL, Cesium.CameraEventType.PINCH]\n\n    // \u53BB\u9664\u7CFB\u7EDF\u9ED8\u8BA4\u4E8B\u4EF6\n    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);\n    viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);\n\n    // \u82E5\u539FCzm\u7248\u6743\u4FE1\u606F\u5C55\u793A\u4F4D\u7F6E\u906E\u6321\u91CD\u8981\u4FE1\u606F\uFF0C\u53EF\u5C06\u4EE5\u4E0B\u8BED\u53E5\u89E3\u6CE8\u91CA\uFF0C\u5728\u522B\u7684\u4F4D\u7F6E\u5C55\u793A\n    // viewer._cesiumWidget._creditContainer.style.display = \"none\";\n\n    // bloom\u8BBE\u7F6E\n    // const bloom = viewer.scene.postProcessStages.bloom;\n    // bloom.enabled = true;\n    // bloom.glowOnly = false;\n    // bloom.contrast = 119;\n    // bloom.brightness = -0.4;\n    // bloom.delta = 0.9;\n    // bloom.sigma = 3.78;\n    // bloom.stepSize = 5;\n    // bloom.isSelected = false;\n\n    // \u53BB\u6389\u5929\u7A7A\u73AF\u5883\n    // viewer.scene.skyAtmosphere.show = false;\n\n    return viewer;\n}\n```\n";