export function addDiagram(element, dotNetHelper, isRTLEnable) {
    let diagram = Object;
    diagram = $(element).dxDiagram({
        nodes: {
            dataSource: new DevExpress.data.CustomStore({
                loadMode: "raw",
                cacheRawData: false,
                load: function () {
                    if (diagram.nodes_data == undefined) {
                        diagram.nodes_data = '[]';
                    }

                    return JSON.parse(diagram.nodes_data);
                }
            }),
            keyExpr: 'Id',
            textExpr: 'Text',
            typeExpr: 'Type',
            styleExpr: 'Style',
            autoLayout: {
                orientation: 'vertical',
                type: 'tree',
            },
        },
        edges: {
            dataSource: new DevExpress.data.CustomStore({
                loadMode: "raw",
                cacheRawData: false,
                load: function () {
                    if (diagram.edges_data == undefined) {
                        diagram.edges_data = '[]';
                    }

                    return JSON.parse(diagram.edges_data);
                }
            }),
            keyExpr: 'Id',
            textExpr: 'Text',
            fromExpr: 'FromId',
            toExpr: 'ToId',
        },
        editing: {
            allowAddShape: false,
            allowChangeConnection: false,
            allowChangeConnectorPoints: false,
            allowChangeConnectorText: false,
            allowChangeShapeText: false,
            allowDeleteConnector: false,
            allowDeleteShape: false,
        },
        toolbox: {
            visibility: 'disabled'
        },
        mainToolbar: {
            visible: false
        },
        propertiesPanel: {
            visibility: 'disabled'
        },
        useNativeScrolling: true,
        snapToGrid: false,
        readOnly: false,
        simpleView: true,
        showGrid: false,
        rtlEnabled: isRTLEnable,
    }).dxDiagram('instance');

    reload(diagram, dotNetHelper);

    return diagram;
}

function reload(diagram, dotNetHelper) {
    dotNetHelper.invokeMethodAsync('OnGetEdgesDataAsync').then((data) => {
        diagram.edges_data = data;
        diagram.getEdgeDataSource().reload();
    });

    dotNetHelper.invokeMethodAsync('OnGetNodesDataAsync').then((data) => {
        diagram.nodes_data = data;
        diagram.getNodeDataSource().reload();
    });
}

export function refresh(element, dotNetHelper) {
    reload($(element).dxDiagram('instance'), dotNetHelper);
    console.log("refresh");
}

export function dispose(element) {
    if (element) {
        $(element).dxDiagram('dispose');
    }
}