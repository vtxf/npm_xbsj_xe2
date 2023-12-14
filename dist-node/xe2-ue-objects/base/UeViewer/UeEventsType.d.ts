export declare type UeEventsType = {
    click: {
        et: 'click';
        eid: string;
        objId?: string;
        cartesianIn3D?: [number, number, number];
        screenPosition?: [number, number];
    };
    dbclick: {
        et: 'dbclick';
        eid: string;
        objId?: string;
        cartesianIn3D?: [number, number, number];
        screenPosition?: [number, number];
    };
    propChanged: {
        et: 'propChanged';
        eid: string;
        objId: string;
        props: {
            [k: string]: any;
        };
    };
    widgetEvent: {
        et: 'widgetEvent';
        eid: string;
        objId: string;
        type: "leftClick" | "rightClick" | "mouseEnter" | "mouseLeave" | "childMouseLeave" | "childMouseEnter";
        add?: {
            children?: string[];
            mousePos?: [number, number];
        };
    };
    hoverEvent: {
        et: "hoverEvent";
        eid: string;
        screenPosition: [number, number];
    };
    hoverOutEvent: {
        et: "hoverOutEvent";
        eid: string;
    };
    mouseMoveEvent: {
        et: "mouseMoveEvent";
        eid: string;
        screenPosition: [number, number];
    };
    speechRecognition: {
        "et": "speechRecognition";
        "eid": string;
        "result": string;
        "error": string;
    };
    customMessage: {
        "et": "customMessage";
        "eid": string;
        "message": string;
    };
};
