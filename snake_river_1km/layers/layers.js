var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1 = new ol.format.GeoJSON();
var features_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1 = format_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.readFeatures(json_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.addFeatures(features_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1);
var lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1, 
                style: style_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1,
                popuplayertitle: "clippedfixed_WA_County_Boundaries.shp — fixed_WA_County_Boundaries — clippedfixed_WA_County_Boundaries",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.png" /> clippedfixed_WA_County_Boundaries.shp — fixed_WA_County_Boundaries — clippedfixed_WA_County_Boundaries'
            });
var format_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2 = new ol.format.GeoJSON();
var features_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2 = format_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.readFeatures(json_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.addFeatures(features_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2);
var lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2, 
                style: style_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2,
                popuplayertitle: "clippedfixed_WA_DNR_Regions.shp — fixed_WA_DNR_Regions — clippedfixed_WA_DNR_Regions",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.png" /> clippedfixed_WA_DNR_Regions.shp — fixed_WA_DNR_Regions — clippedfixed_WA_DNR_Regions'
            });
var format_clippedfixed_NHD_WA_buffered015_3 = new ol.format.GeoJSON();
var features_clippedfixed_NHD_WA_buffered015_3 = format_clippedfixed_NHD_WA_buffered015_3.readFeatures(json_clippedfixed_NHD_WA_buffered015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_NHD_WA_buffered015_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_NHD_WA_buffered015_3.addFeatures(features_clippedfixed_NHD_WA_buffered015_3);
var lyr_clippedfixed_NHD_WA_buffered015_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_NHD_WA_buffered015_3, 
                style: style_clippedfixed_NHD_WA_buffered015_3,
                popuplayertitle: "clippedfixed_NHD_WA_buffered015",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_NHD_WA_buffered015_3.png" /> clippedfixed_NHD_WA_buffered015'
            });
var format_clippedfixed_WAECY_WQ_Improvements_4 = new ol.format.GeoJSON();
var features_clippedfixed_WAECY_WQ_Improvements_4 = format_clippedfixed_WAECY_WQ_Improvements_4.readFeatures(json_clippedfixed_WAECY_WQ_Improvements_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WAECY_WQ_Improvements_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WAECY_WQ_Improvements_4.addFeatures(features_clippedfixed_WAECY_WQ_Improvements_4);
var lyr_clippedfixed_WAECY_WQ_Improvements_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WAECY_WQ_Improvements_4, 
                style: style_clippedfixed_WAECY_WQ_Improvements_4,
                popuplayertitle: "clippedfixed_WAECY_WQ_Improvements",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WAECY_WQ_Improvements_4.png" /> clippedfixed_WAECY_WQ_Improvements'
            });
var format_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5 = new ol.format.GeoJSON();
var features_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5 = format_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.readFeatures(json_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.addFeatures(features_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5);
var lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5, 
                style: style_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5,
                popuplayertitle: "clippedfixed_WSDOT_-_City_Limits.shp — fixed_WSDOT_-_City_Limits — clippedfixed_WSDOT_-_City_Limits",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.png" /> clippedfixed_WSDOT_-_City_Limits.shp — fixed_WSDOT_-_City_Limits — clippedfixed_WSDOT_-_City_Limits'
            });
var format_clippedfixed_WA_DNR_Managed_Land_Parcels_6 = new ol.format.GeoJSON();
var features_clippedfixed_WA_DNR_Managed_Land_Parcels_6 = format_clippedfixed_WA_DNR_Managed_Land_Parcels_6.readFeatures(json_clippedfixed_WA_DNR_Managed_Land_Parcels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WA_DNR_Managed_Land_Parcels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WA_DNR_Managed_Land_Parcels_6.addFeatures(features_clippedfixed_WA_DNR_Managed_Land_Parcels_6);
var lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WA_DNR_Managed_Land_Parcels_6, 
                style: style_clippedfixed_WA_DNR_Managed_Land_Parcels_6,
                popuplayertitle: "clippedfixed_WA_DNR_Managed_Land_Parcels",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WA_DNR_Managed_Land_Parcels_6.png" /> clippedfixed_WA_DNR_Managed_Land_Parcels'
            });
var format_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7 = new ol.format.GeoJSON();
var features_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7 = format_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.readFeatures(json_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.addFeatures(features_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7);
var lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7, 
                style: style_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7,
                popuplayertitle: "clippedfixed_PARKS_-_Park_Boundaries.shp — fixed_PARKS_-_Park_Boundaries — clippedfixed_PARKS_-_Park_Boundaries",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.png" /> clippedfixed_PARKS_-_Park_Boundaries.shp — fixed_PARKS_-_Park_Boundaries — clippedfixed_PARKS_-_Park_Boundaries'
            });
var format_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8 = new ol.format.GeoJSON();
var features_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8 = format_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.readFeatures(json_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.addFeatures(features_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8);
var lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8, 
                style: style_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8,
                popuplayertitle: "clippedfixed_PRCLandAcquisitions — LandAcquisitions.shp — fixed_PRCLandAcquisitions — LandAcquisitions — clippedfixed_PRCLandAcquisitions — LandAcquisitions",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.png" /> clippedfixed_PRCLandAcquisitions — LandAcquisitions.shp — fixed_PRCLandAcquisitions — LandAcquisitions — clippedfixed_PRCLandAcquisitions — LandAcquisitions'
            });
var format_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9 = new ol.format.GeoJSON();
var features_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9 = format_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.readFeatures(json_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.addFeatures(features_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9);
var lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9, 
                style: style_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9,
                popuplayertitle: "clippedfixed_WA_Major_Public_Lands_(non-DNR).shp — fixed_WA_Major_Public_Lands_(non-DNR) — clippedfixed_WA_Major_Public_Lands_(non-DNR)",
                interactive: true,
                title: '<img src="styles/legend/clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.png" /> clippedfixed_WA_Major_Public_Lands_(non-DNR).shp — fixed_WA_Major_Public_Lands_(non-DNR) — clippedfixed_WA_Major_Public_Lands_(non-DNR)'
            });
var format_clippedDrinking_Water_Systems_10 = new ol.format.GeoJSON();
var features_clippedDrinking_Water_Systems_10 = format_clippedDrinking_Water_Systems_10.readFeatures(json_clippedDrinking_Water_Systems_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedDrinking_Water_Systems_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedDrinking_Water_Systems_10.addFeatures(features_clippedDrinking_Water_Systems_10);
var lyr_clippedDrinking_Water_Systems_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedDrinking_Water_Systems_10, 
                style: style_clippedDrinking_Water_Systems_10,
                popuplayertitle: "clippedDrinking_Water_Systems",
                interactive: true,
                title: '<img src="styles/legend/clippedDrinking_Water_Systems_10.png" /> clippedDrinking_Water_Systems'
            });
var format_clippedWA_DNR_responsible_waters_11 = new ol.format.GeoJSON();
var features_clippedWA_DNR_responsible_waters_11 = format_clippedWA_DNR_responsible_waters_11.readFeatures(json_clippedWA_DNR_responsible_waters_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedWA_DNR_responsible_waters_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedWA_DNR_responsible_waters_11.addFeatures(features_clippedWA_DNR_responsible_waters_11);
var lyr_clippedWA_DNR_responsible_waters_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedWA_DNR_responsible_waters_11, 
                style: style_clippedWA_DNR_responsible_waters_11,
                popuplayertitle: "clippedWA_DNR_responsible_waters",
                interactive: true,
                title: '<img src="styles/legend/clippedWA_DNR_responsible_waters_11.png" /> clippedWA_DNR_responsible_waters'
            });
var format_clippedWaterRightsDiversions_12 = new ol.format.GeoJSON();
var features_clippedWaterRightsDiversions_12 = format_clippedWaterRightsDiversions_12.readFeatures(json_clippedWaterRightsDiversions_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedWaterRightsDiversions_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedWaterRightsDiversions_12.addFeatures(features_clippedWaterRightsDiversions_12);
var lyr_clippedWaterRightsDiversions_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedWaterRightsDiversions_12, 
                style: style_clippedWaterRightsDiversions_12,
                popuplayertitle: "clippedWaterRightsDiversions",
                interactive: true,
                title: '<img src="styles/legend/clippedWaterRightsDiversions_12.png" /> clippedWaterRightsDiversions'
            });
var format_clippedHighandLowRiskWaterBodies_13 = new ol.format.GeoJSON();
var features_clippedHighandLowRiskWaterBodies_13 = format_clippedHighandLowRiskWaterBodies_13.readFeatures(json_clippedHighandLowRiskWaterBodies_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedHighandLowRiskWaterBodies_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedHighandLowRiskWaterBodies_13.addFeatures(features_clippedHighandLowRiskWaterBodies_13);
var lyr_clippedHighandLowRiskWaterBodies_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedHighandLowRiskWaterBodies_13, 
                style: style_clippedHighandLowRiskWaterBodies_13,
                popuplayertitle: "clippedHighandLowRiskWaterBodies",
                interactive: true,
                title: '<img src="styles/legend/clippedHighandLowRiskWaterBodies_13.png" /> clippedHighandLowRiskWaterBodies'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.setVisible(true);lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.setVisible(true);lyr_clippedfixed_NHD_WA_buffered015_3.setVisible(true);lyr_clippedfixed_WAECY_WQ_Improvements_4.setVisible(true);lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.setVisible(true);lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6.setVisible(true);lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.setVisible(true);lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.setVisible(true);lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.setVisible(true);lyr_clippedDrinking_Water_Systems_10.setVisible(true);lyr_clippedWA_DNR_responsible_waters_11.setVisible(true);lyr_clippedWaterRightsDiversions_12.setVisible(true);lyr_clippedHighandLowRiskWaterBodies_13.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1,lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2,lyr_clippedfixed_NHD_WA_buffered015_3,lyr_clippedfixed_WAECY_WQ_Improvements_4,lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5,lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6,lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7,lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8,lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9,lyr_clippedDrinking_Water_Systems_10,lyr_clippedWA_DNR_responsible_waters_11,lyr_clippedWaterRightsDiversions_12,lyr_clippedHighandLowRiskWaterBodies_13];
lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_NHD_WA_buffered015_3.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_WAECY_WQ_Improvements_4.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_clippedDrinking_Water_Systems_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PwsId': 'PwsId', 'Suffix': 'Suffix', 'WS_Name': 'WS_Name', 'Region': 'Region', 'County': 'County', 'WS_Grp': 'WS_Grp', 'WS_Type': 'WS_Type', 'OwnerID': 'OwnerID', 'Ownership': 'Ownership', 'Contact_F_Name': 'Contact_F_Name', 'Contact_L_Name': 'Contact_L_Name', 'Contact_Phone': 'Contact_Phone', 'WS_Address1': 'WS_Address1', 'WS_Address2': 'WS_Address2', 'WS_City': 'WS_City', 'WS_State': 'WS_State', 'WS_Zip': 'WS_Zip', 'EMailAddr': 'EMailAddr', 'FT_ResPop': 'FT_ResPop', 'MaxTotalPop': 'MaxTotalPop', 'Total_Conn': 'Total_Conn', 'DOH_Apprvd_Srvcs': 'DOH_Apprvd_Srvcs', 'Connection_Category': 'Connection_Category', 'WS_Status': 'WS_Status', 'WS_Inactive_Date': 'WS_Inactive_Date', 'EffctDate': 'EffctDate', 'GroupADate': 'GroupADate', 'SMAId': 'SMAId', 'ResConn': 'ResConn', 'GWMA': 'GWMA', 'JuriCode': 'JuriCode', 'LERootId': 'LERootId', 'ServiceArea': 'ServiceArea', });
lyr_clippedWA_DNR_responsible_waters_11.set('fieldAliases', {'Water Body Common Name': 'Water Body Common Name', 'Water Body Category': 'Water Body Category', 'Reservoir Name': 'Reservoir Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'County': 'County', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', 'Entities': 'Entities', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'NHD_WA — NHDWaterbody.shp_Permanent_', 'NHD_WA — NHDWaterbody.shp_FDate': 'NHD_WA — NHDWaterbody.shp_FDate', 'NHD_WA — NHDWaterbody.shp_Resolution': 'NHD_WA — NHDWaterbody.shp_Resolution', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'NHD_WA — NHDWaterbody.shp_GNIS_ID', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'NHD_WA — NHDWaterbody.shp_AreaSqKm', 'NHD_WA — NHDWaterbody.shp_Elevation': 'NHD_WA — NHDWaterbody.shp_Elevation', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'NHD_WA — NHDWaterbody.shp_ReachCode', 'NHD_WA — NHDWaterbody.shp_FType': 'NHD_WA — NHDWaterbody.shp_FType', 'NHD_WA — NHDWaterbody.shp_FCode': 'NHD_WA — NHDWaterbody.shp_FCode', 'NHD_WA — NHDWaterbody.shp_Visibility': 'NHD_WA — NHDWaterbody.shp_Visibility', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'NHD_WA — NHDWaterbody.shp_GlobalID', });
lyr_clippedWaterRightsDiversions_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_Identifier': 'Permanent_Identifier', 'EventDate': 'EventDate', 'ReachCode': 'ReachCode', 'ReachSMDate': 'ReachSMDate', 'ReachResolution': 'ReachResolution', 'Feature_Permanent_Identifier': 'Feature_Permanent_Identifier', 'FeatureClassRef': 'FeatureClassRef', 'Source_Originator': 'Source_Originator', 'Source_DataDesc': 'Source_DataDesc', 'FeatureDetailURL': 'FeatureDetailURL', 'Measure': 'Measure', 'EventType': 'EventType', 'D_Point_ID': 'D_Point_ID', 'EventOffset': 'EventOffset', 'doc_cfs_qt': 'doc_cfs_qt', 'Source_FeatureID': 'Source_FeatureID', 'WR_REPORT_STATUS': 'WR_REPORT_STATUS', 'WR_Doc_NR': 'WR_Doc_NR', 'WR_DOC_ID': 'WR_DOC_ID', 'Fill_CD': 'Fill_CD', 'WR_Doc_Typ': 'WR_Doc_Typ', 'Quality_CD': 'Quality_CD', 'wr_doc_i_2': 'wr_doc_i_2', 'region_cd': 'region_cd', 'wr_doc_fil': 'wr_doc_fil', 'doc_type_c': 'doc_type_c', 'doc_gpm_qt': 'doc_gpm_qt', 'doc_acre_f': 'doc_acre_f', 'acres_irr_': 'acres_irr_', 'purpose_li': 'purpose_li', 'wr_doc_cer': 'wr_doc_cer', 'last_nm': 'last_nm', 'first_nm': 'first_nm', 'mi_nm': 'mi_nm', 'business_n': 'business_n', 'line1_ad': 'line1_ad', 'line2_ad': 'line2_ad', 'mail_ad': 'mail_ad', 'city_nm': 'city_nm', 'state_cd': 'state_cd', 'zip_cd': 'zip_cd', 'WR_Doc_N_1': 'WR_Doc_N_1', 'GlobalID': 'GlobalID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', });
lyr_clippedHighandLowRiskWaterBodies_13.set('fieldAliases', {'County': 'County', 'Water Body System': 'Water Body System', 'Water Body Common Name': 'Water Body Common Name', 'Monitoring Schedule': 'Monitoring Schedule', 'Water Body #': 'Water Body #', 'Reservoir Name': 'Reservoir Name', 'Water Body Category': 'Water Body Category', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', });
lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_NHD_WA_buffered015_3.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_WAECY_WQ_Improvements_4.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_clippedDrinking_Water_Systems_10.set('fieldImages', {'OBJECTID': 'Range', 'PwsId': 'TextEdit', 'Suffix': 'TextEdit', 'WS_Name': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'WS_Grp': 'TextEdit', 'WS_Type': 'TextEdit', 'OwnerID': 'TextEdit', 'Ownership': 'TextEdit', 'Contact_F_Name': 'TextEdit', 'Contact_L_Name': 'TextEdit', 'Contact_Phone': 'TextEdit', 'WS_Address1': 'TextEdit', 'WS_Address2': 'TextEdit', 'WS_City': 'TextEdit', 'WS_State': 'TextEdit', 'WS_Zip': 'TextEdit', 'EMailAddr': 'TextEdit', 'FT_ResPop': 'Range', 'MaxTotalPop': 'Range', 'Total_Conn': 'Range', 'DOH_Apprvd_Srvcs': 'Range', 'Connection_Category': 'TextEdit', 'WS_Status': 'TextEdit', 'WS_Inactive_Date': 'DateTime', 'EffctDate': 'TextEdit', 'GroupADate': 'DateTime', 'SMAId': 'TextEdit', 'ResConn': 'Range', 'GWMA': 'TextEdit', 'JuriCode': 'TextEdit', 'LERootId': 'TextEdit', 'ServiceArea': 'TextEdit', });
lyr_clippedWA_DNR_responsible_waters_11.set('fieldImages', {'Water Body Common Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'County': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', 'Entities': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_FDate': 'DateTime', 'NHD_WA — NHDWaterbody.shp_Resolution': 'Range', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_Elevation': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_FType': 'Range', 'NHD_WA — NHDWaterbody.shp_FCode': 'Range', 'NHD_WA — NHDWaterbody.shp_Visibility': 'Range', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'TextEdit', });
lyr_clippedWaterRightsDiversions_12.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_Identifier': 'TextEdit', 'EventDate': 'TextEdit', 'ReachCode': 'TextEdit', 'ReachSMDate': 'TextEdit', 'ReachResolution': 'Range', 'Feature_Permanent_Identifier': 'TextEdit', 'FeatureClassRef': 'Range', 'Source_Originator': 'TextEdit', 'Source_DataDesc': 'TextEdit', 'FeatureDetailURL': 'TextEdit', 'Measure': 'TextEdit', 'EventType': 'Range', 'D_Point_ID': 'Range', 'EventOffset': 'TextEdit', 'doc_cfs_qt': 'TextEdit', 'Source_FeatureID': 'TextEdit', 'WR_REPORT_STATUS': 'TextEdit', 'WR_Doc_NR': 'TextEdit', 'WR_DOC_ID': 'Range', 'Fill_CD': 'Range', 'WR_Doc_Typ': 'TextEdit', 'Quality_CD': 'TextEdit', 'wr_doc_i_2': 'Range', 'region_cd': 'TextEdit', 'wr_doc_fil': 'TextEdit', 'doc_type_c': 'TextEdit', 'doc_gpm_qt': 'TextEdit', 'doc_acre_f': 'TextEdit', 'acres_irr_': 'TextEdit', 'purpose_li': 'TextEdit', 'wr_doc_cer': 'TextEdit', 'last_nm': 'TextEdit', 'first_nm': 'TextEdit', 'mi_nm': 'TextEdit', 'business_n': 'TextEdit', 'line1_ad': 'TextEdit', 'line2_ad': 'TextEdit', 'mail_ad': 'TextEdit', 'city_nm': 'TextEdit', 'state_cd': 'TextEdit', 'zip_cd': 'TextEdit', 'WR_Doc_N_1': 'TextEdit', 'GlobalID': 'TextEdit', 'created_user': 'TextEdit', 'created_date': 'TextEdit', 'last_edited_user': 'TextEdit', 'last_edited_date': 'TextEdit', });
lyr_clippedHighandLowRiskWaterBodies_13.set('fieldImages', {'County': '', 'Water Body System': '', 'Water Body Common Name': '', 'Monitoring Schedule': '', 'Water Body #': '', 'Reservoir Name': '', 'Water Body Category': '', 'Latitude': '', 'Longitude': '', 'WDFW Region #': '', 'Mountain Range': '', });
lyr_clippedfixed_WA_County_Boundariesshpfixed_WA_County_Boundariesclippedfixed_WA_County_Boundaries_1.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_WA_DNR_Regionsshpfixed_WA_DNR_Regionsclippedfixed_WA_DNR_Regions_2.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_NHD_WA_buffered015_3.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_WAECY_WQ_Improvements_4.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_WSDOT__City_Limitsshpfixed_WSDOT__City_Limitsclippedfixed_WSDOT__City_Limits_5.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_WA_DNR_Managed_Land_Parcels_6.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_PARKS__Park_Boundariesshpfixed_PARKS__Park_Boundariesclippedfixed_PARKS__Park_Boundaries_7.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_PRCLandAcquisitionsLandAcquisitionsshpfixed_PRCLandAcquisitionsLandAcquisitionsclippedfixed_PRCLandAcquisitionsLandAcquisitions_8.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedfixed_WA_Major_Public_Lands_nonDNRshpfixed_WA_Major_Public_Lands_nonDNRclippedfixed_WA_Major_Public_Lands_nonDNR_9.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_clippedDrinking_Water_Systems_10.set('fieldLabels', {'OBJECTID': 'no label', 'PwsId': 'no label', 'Suffix': 'no label', 'WS_Name': 'no label', 'Region': 'no label', 'County': 'no label', 'WS_Grp': 'no label', 'WS_Type': 'no label', 'OwnerID': 'no label', 'Ownership': 'no label', 'Contact_F_Name': 'no label', 'Contact_L_Name': 'no label', 'Contact_Phone': 'no label', 'WS_Address1': 'no label', 'WS_Address2': 'no label', 'WS_City': 'no label', 'WS_State': 'no label', 'WS_Zip': 'no label', 'EMailAddr': 'no label', 'FT_ResPop': 'no label', 'MaxTotalPop': 'no label', 'Total_Conn': 'no label', 'DOH_Apprvd_Srvcs': 'no label', 'Connection_Category': 'no label', 'WS_Status': 'no label', 'WS_Inactive_Date': 'no label', 'EffctDate': 'no label', 'GroupADate': 'no label', 'SMAId': 'no label', 'ResConn': 'no label', 'GWMA': 'no label', 'JuriCode': 'no label', 'LERootId': 'no label', 'ServiceArea': 'no label', });
lyr_clippedWA_DNR_responsible_waters_11.set('fieldLabels', {'Water Body Common Name': 'no label', 'Water Body Category': 'no label', 'Reservoir Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'County': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', 'Entities': 'no label', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'no label', 'NHD_WA — NHDWaterbody.shp_FDate': 'no label', 'NHD_WA — NHDWaterbody.shp_Resolution': 'no label', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'no label', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'no label', 'NHD_WA — NHDWaterbody.shp_Elevation': 'no label', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'no label', 'NHD_WA — NHDWaterbody.shp_FType': 'no label', 'NHD_WA — NHDWaterbody.shp_FCode': 'no label', 'NHD_WA — NHDWaterbody.shp_Visibility': 'no label', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'no label', });
lyr_clippedWaterRightsDiversions_12.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_Identifier': 'no label', 'EventDate': 'no label', 'ReachCode': 'no label', 'ReachSMDate': 'no label', 'ReachResolution': 'no label', 'Feature_Permanent_Identifier': 'no label', 'FeatureClassRef': 'no label', 'Source_Originator': 'no label', 'Source_DataDesc': 'no label', 'FeatureDetailURL': 'no label', 'Measure': 'no label', 'EventType': 'no label', 'D_Point_ID': 'no label', 'EventOffset': 'no label', 'doc_cfs_qt': 'no label', 'Source_FeatureID': 'no label', 'WR_REPORT_STATUS': 'no label', 'WR_Doc_NR': 'no label', 'WR_DOC_ID': 'no label', 'Fill_CD': 'no label', 'WR_Doc_Typ': 'no label', 'Quality_CD': 'no label', 'wr_doc_i_2': 'no label', 'region_cd': 'no label', 'wr_doc_fil': 'no label', 'doc_type_c': 'no label', 'doc_gpm_qt': 'no label', 'doc_acre_f': 'no label', 'acres_irr_': 'no label', 'purpose_li': 'no label', 'wr_doc_cer': 'no label', 'last_nm': 'no label', 'first_nm': 'no label', 'mi_nm': 'no label', 'business_n': 'no label', 'line1_ad': 'no label', 'line2_ad': 'no label', 'mail_ad': 'no label', 'city_nm': 'no label', 'state_cd': 'no label', 'zip_cd': 'no label', 'WR_Doc_N_1': 'no label', 'GlobalID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', });
lyr_clippedHighandLowRiskWaterBodies_13.set('fieldLabels', {'County': 'no label', 'Water Body System': 'no label', 'Water Body Common Name': 'no label', 'Monitoring Schedule': 'no label', 'Water Body #': 'no label', 'Reservoir Name': 'no label', 'Water Body Category': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', });
lyr_clippedHighandLowRiskWaterBodies_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});