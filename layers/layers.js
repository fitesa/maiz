var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IndicedeHumedad_1 = new ol.format.GeoJSON();
var features_IndicedeHumedad_1 = format_IndicedeHumedad_1.readFeatures(json_IndicedeHumedad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad_1.addFeatures(features_IndicedeHumedad_1);
var lyr_IndicedeHumedad_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad_1, 
                style: style_IndicedeHumedad_1,
                interactive: false,
    title: 'Indice de Humedad<br />\
    <img src="styles/legend/IndicedeHumedad_1_0.png" /> -0,28 - -0,18<br />\
    <img src="styles/legend/IndicedeHumedad_1_1.png" /> -0,18 - -0,09<br />\
    <img src="styles/legend/IndicedeHumedad_1_2.png" /> -0,09 - 0,01<br />\
    <img src="styles/legend/IndicedeHumedad_1_3.png" /> 0,01 - 0,11<br />\
    <img src="styles/legend/IndicedeHumedad_1_4.png" /> 0,11 - 0,20<br />'
        });
var format_IndicedeVegetacion_2 = new ol.format.GeoJSON();
var features_IndicedeVegetacion_2 = format_IndicedeVegetacion_2.readFeatures(json_IndicedeVegetacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion_2.addFeatures(features_IndicedeVegetacion_2);
var lyr_IndicedeVegetacion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion_2, 
                style: style_IndicedeVegetacion_2,
                interactive: false,
    title: 'Indice de Vegetacion<br />\
    <img src="styles/legend/IndicedeVegetacion_2_0.png" /> 0,09 - 0,21<br />\
    <img src="styles/legend/IndicedeVegetacion_2_1.png" /> 0,21 - 0,34<br />\
    <img src="styles/legend/IndicedeVegetacion_2_2.png" /> 0,34 - 0,47<br />\
    <img src="styles/legend/IndicedeVegetacion_2_3.png" /> 0,47 - 0,60<br />\
    <img src="styles/legend/IndicedeVegetacion_2_4.png" /> 0,60 - 0,73<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_IndicedeHumedad_1.setVisible(true);lyr_IndicedeVegetacion_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_IndicedeHumedad_1,lyr_IndicedeVegetacion_2];
lyr_IndicedeHumedad_1.set('fieldAliases', {'NDMI': '', });
lyr_IndicedeVegetacion_2.set('fieldAliases', {'NDVI': '', });
lyr_IndicedeHumedad_1.set('fieldImages', {'NDMI': '', });
lyr_IndicedeVegetacion_2.set('fieldImages', {'NDVI': '', });
lyr_IndicedeHumedad_1.set('fieldLabels', {'NDMI': 'no label', });
lyr_IndicedeVegetacion_2.set('fieldLabels', {'NDVI': 'no label', });
lyr_IndicedeVegetacion_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});