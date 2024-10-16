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
var format_WA_County_Boundaries_1 = new ol.format.GeoJSON();
var features_WA_County_Boundaries_1 = format_WA_County_Boundaries_1.readFeatures(json_WA_County_Boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_County_Boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_County_Boundaries_1.addFeatures(features_WA_County_Boundaries_1);
var lyr_WA_County_Boundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_County_Boundaries_1, 
                style: style_WA_County_Boundaries_1,
                popuplayertitle: "WA_County_Boundaries",
                interactive: true,
                title: '<img src="styles/legend/WA_County_Boundaries_1.png" /> WA_County_Boundaries'
            });
var format_WA_DNR_Regions_2 = new ol.format.GeoJSON();
var features_WA_DNR_Regions_2 = format_WA_DNR_Regions_2.readFeatures(json_WA_DNR_Regions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_DNR_Regions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_DNR_Regions_2.addFeatures(features_WA_DNR_Regions_2);
var lyr_WA_DNR_Regions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_DNR_Regions_2, 
                style: style_WA_DNR_Regions_2,
                popuplayertitle: "WA_DNR_Regions",
                interactive: true,
                title: '<img src="styles/legend/WA_DNR_Regions_2.png" /> WA_DNR_Regions'
            });
var format_WSDOT__Regions_3 = new ol.format.GeoJSON();
var features_WSDOT__Regions_3 = format_WSDOT__Regions_3.readFeatures(json_WSDOT__Regions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDOT__Regions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDOT__Regions_3.addFeatures(features_WSDOT__Regions_3);
var lyr_WSDOT__Regions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDOT__Regions_3, 
                style: style_WSDOT__Regions_3,
                popuplayertitle: "WSDOT_-_Regions",
                interactive: true,
                title: '<img src="styles/legend/WSDOT__Regions_3.png" /> WSDOT_-_Regions'
            });
var format_WAECY_WQ_Improvements_4 = new ol.format.GeoJSON();
var features_WAECY_WQ_Improvements_4 = format_WAECY_WQ_Improvements_4.readFeatures(json_WAECY_WQ_Improvements_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAECY_WQ_Improvements_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAECY_WQ_Improvements_4.addFeatures(features_WAECY_WQ_Improvements_4);
var lyr_WAECY_WQ_Improvements_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAECY_WQ_Improvements_4, 
                style: style_WAECY_WQ_Improvements_4,
                popuplayertitle: "WAECY_WQ_Improvements",
                interactive: true,
                title: '<img src="styles/legend/WAECY_WQ_Improvements_4.png" /> WAECY_WQ_Improvements'
            });
var format_WSDOTCity_Limits_5 = new ol.format.GeoJSON();
var features_WSDOTCity_Limits_5 = format_WSDOTCity_Limits_5.readFeatures(json_WSDOTCity_Limits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDOTCity_Limits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDOTCity_Limits_5.addFeatures(features_WSDOTCity_Limits_5);
var lyr_WSDOTCity_Limits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDOTCity_Limits_5, 
                style: style_WSDOTCity_Limits_5,
                popuplayertitle: "WSDOTCity_Limits",
                interactive: true,
                title: '<img src="styles/legend/WSDOTCity_Limits_5.png" /> WSDOTCity_Limits'
            });
var format_WQMunicipal_Stormwater_6 = new ol.format.GeoJSON();
var features_WQMunicipal_Stormwater_6 = format_WQMunicipal_Stormwater_6.readFeatures(json_WQMunicipal_Stormwater_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WQMunicipal_Stormwater_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQMunicipal_Stormwater_6.addFeatures(features_WQMunicipal_Stormwater_6);
var lyr_WQMunicipal_Stormwater_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WQMunicipal_Stormwater_6, 
                style: style_WQMunicipal_Stormwater_6,
                popuplayertitle: "WQMunicipal_Stormwater",
                interactive: true,
                title: '<img src="styles/legend/WQMunicipal_Stormwater_6.png" /> WQMunicipal_Stormwater'
            });
var format_PARKS__Park_Boundaries_7 = new ol.format.GeoJSON();
var features_PARKS__Park_Boundaries_7 = format_PARKS__Park_Boundaries_7.readFeatures(json_PARKS__Park_Boundaries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARKS__Park_Boundaries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARKS__Park_Boundaries_7.addFeatures(features_PARKS__Park_Boundaries_7);
var lyr_PARKS__Park_Boundaries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARKS__Park_Boundaries_7, 
                style: style_PARKS__Park_Boundaries_7,
                popuplayertitle: "PARKS_-_Park_Boundaries",
                interactive: true,
                title: '<img src="styles/legend/PARKS__Park_Boundaries_7.png" /> PARKS_-_Park_Boundaries'
            });
var format_PRCLandAcquisitions_8 = new ol.format.GeoJSON();
var features_PRCLandAcquisitions_8 = format_PRCLandAcquisitions_8.readFeatures(json_PRCLandAcquisitions_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRCLandAcquisitions_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRCLandAcquisitions_8.addFeatures(features_PRCLandAcquisitions_8);
var lyr_PRCLandAcquisitions_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRCLandAcquisitions_8, 
                style: style_PRCLandAcquisitions_8,
                popuplayertitle: "PRCLandAcquisitions",
                interactive: true,
                title: '<img src="styles/legend/PRCLandAcquisitions_8.png" /> PRCLandAcquisitions'
            });
var format_WA_DNR_Managed_Land_Parcels_9 = new ol.format.GeoJSON();
var features_WA_DNR_Managed_Land_Parcels_9 = format_WA_DNR_Managed_Land_Parcels_9.readFeatures(json_WA_DNR_Managed_Land_Parcels_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_DNR_Managed_Land_Parcels_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_DNR_Managed_Land_Parcels_9.addFeatures(features_WA_DNR_Managed_Land_Parcels_9);
var lyr_WA_DNR_Managed_Land_Parcels_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_DNR_Managed_Land_Parcels_9, 
                style: style_WA_DNR_Managed_Land_Parcels_9,
                popuplayertitle: "WA_DNR_Managed_Land_Parcels",
                interactive: true,
                title: '<img src="styles/legend/WA_DNR_Managed_Land_Parcels_9.png" /> WA_DNR_Managed_Land_Parcels'
            });
var format_WA_Major_Public_Lands_nonDNR_10 = new ol.format.GeoJSON();
var features_WA_Major_Public_Lands_nonDNR_10 = format_WA_Major_Public_Lands_nonDNR_10.readFeatures(json_WA_Major_Public_Lands_nonDNR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_Major_Public_Lands_nonDNR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_Major_Public_Lands_nonDNR_10.addFeatures(features_WA_Major_Public_Lands_nonDNR_10);
var lyr_WA_Major_Public_Lands_nonDNR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_Major_Public_Lands_nonDNR_10, 
                style: style_WA_Major_Public_Lands_nonDNR_10,
                popuplayertitle: "WA_Major_Public_Lands_(non-DNR)",
                interactive: true,
                title: '<img src="styles/legend/WA_Major_Public_Lands_nonDNR_10.png" /> WA_Major_Public_Lands_(non-DNR)'
            });
var format_Drinking_Water_Systems_11 = new ol.format.GeoJSON();
var features_Drinking_Water_Systems_11 = format_Drinking_Water_Systems_11.readFeatures(json_Drinking_Water_Systems_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drinking_Water_Systems_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drinking_Water_Systems_11.addFeatures(features_Drinking_Water_Systems_11);
var lyr_Drinking_Water_Systems_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drinking_Water_Systems_11, 
                style: style_Drinking_Water_Systems_11,
                popuplayertitle: "Drinking_Water_Systems",
                interactive: true,
                title: '<img src="styles/legend/Drinking_Water_Systems_11.png" /> Drinking_Water_Systems'
            });
var format_WaterRightsDiversions_12 = new ol.format.GeoJSON();
var features_WaterRightsDiversions_12 = format_WaterRightsDiversions_12.readFeatures(json_WaterRightsDiversions_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterRightsDiversions_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterRightsDiversions_12.addFeatures(features_WaterRightsDiversions_12);
var lyr_WaterRightsDiversions_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterRightsDiversions_12, 
                style: style_WaterRightsDiversions_12,
                popuplayertitle: "WaterRightsDiversions",
                interactive: true,
                title: '<img src="styles/legend/WaterRightsDiversions_12.png" /> WaterRightsDiversions'
            });
var format_Sites_NOT_Monitored_13 = new ol.format.GeoJSON();
var features_Sites_NOT_Monitored_13 = format_Sites_NOT_Monitored_13.readFeatures(json_Sites_NOT_Monitored_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sites_NOT_Monitored_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_NOT_Monitored_13.addFeatures(features_Sites_NOT_Monitored_13);
var lyr_Sites_NOT_Monitored_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_NOT_Monitored_13, 
                style: style_Sites_NOT_Monitored_13,
                popuplayertitle: "Sites_NOT_Monitored",
                interactive: true,
                title: '<img src="styles/legend/Sites_NOT_Monitored_13.png" /> Sites_NOT_Monitored'
            });
var format_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14 = new ol.format.GeoJSON();
var features_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14 = format_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.readFeatures(json_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.addFeatures(features_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14);
var lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14, 
                style: style_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14,
                popuplayertitle: "Waterbody Fisheries Management Responsibilities(Waterbody Table (A2))",
                interactive: true,
                title: '<img src="styles/legend/WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.png" /> Waterbody Fisheries Management Responsibilities(Waterbody Table (A2))'
            });
var format_Sites_Monitored_15 = new ol.format.GeoJSON();
var features_Sites_Monitored_15 = format_Sites_Monitored_15.readFeatures(json_Sites_Monitored_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sites_Monitored_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sites_Monitored_15.addFeatures(features_Sites_Monitored_15);
var lyr_Sites_Monitored_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sites_Monitored_15, 
                style: style_Sites_Monitored_15,
                popuplayertitle: "Sites_Monitored",
                interactive: true,
                title: '<img src="styles/legend/Sites_Monitored_15.png" /> Sites_Monitored'
            });
var format_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16 = new ol.format.GeoJSON();
var features_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16 = format_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.readFeatures(json_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.addFeatures(features_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16);
var lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16, 
                style: style_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16,
                popuplayertitle: "ZebraQuagga Mussel Monitoring Schedule April 2024-2(Sites)",
                interactive: true,
                title: '<img src="styles/legend/ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.png" /> ZebraQuagga Mussel Monitoring Schedule April 2024-2(Sites)'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_WA_County_Boundaries_1.setVisible(true);lyr_WA_DNR_Regions_2.setVisible(true);lyr_WSDOT__Regions_3.setVisible(true);lyr_WAECY_WQ_Improvements_4.setVisible(true);lyr_WSDOTCity_Limits_5.setVisible(true);lyr_WQMunicipal_Stormwater_6.setVisible(true);lyr_PARKS__Park_Boundaries_7.setVisible(true);lyr_PRCLandAcquisitions_8.setVisible(true);lyr_WA_DNR_Managed_Land_Parcels_9.setVisible(true);lyr_WA_Major_Public_Lands_nonDNR_10.setVisible(true);lyr_Drinking_Water_Systems_11.setVisible(true);lyr_WaterRightsDiversions_12.setVisible(true);lyr_Sites_NOT_Monitored_13.setVisible(true);lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.setVisible(true);lyr_Sites_Monitored_15.setVisible(true);lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_WA_County_Boundaries_1,lyr_WA_DNR_Regions_2,lyr_WSDOT__Regions_3,lyr_WAECY_WQ_Improvements_4,lyr_WSDOTCity_Limits_5,lyr_WQMunicipal_Stormwater_6,lyr_PARKS__Park_Boundaries_7,lyr_PRCLandAcquisitions_8,lyr_WA_DNR_Managed_Land_Parcels_9,lyr_WA_Major_Public_Lands_nonDNR_10,lyr_Drinking_Water_Systems_11,lyr_WaterRightsDiversions_12,lyr_Sites_NOT_Monitored_13,lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14,lyr_Sites_Monitored_15,lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16];
lyr_WA_County_Boundaries_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'JURISDICT_': 'JURISDICT_', 'JURISDIC_1': 'JURISDIC_1', 'JURISDIC_2': 'JURISDIC_2', 'JURISDIC_3': 'JURISDIC_3', 'JURISDIC_4': 'JURISDIC_4', 'JURISDIC_5': 'JURISDIC_5', 'JURISDIC_6': 'JURISDIC_6', 'EDIT_DATE': 'EDIT_DATE', 'EDIT_STATU': 'EDIT_STATU', 'EDIT_WHO': 'EDIT_WHO', 'GLOBALID': 'GLOBALID', });
lyr_WA_DNR_Regions_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'JURISDICT_': 'JURISDICT_', 'JURISDIC_1': 'JURISDIC_1', 'JURISDIC_2': 'JURISDIC_2', 'JURISDIC_3': 'JURISDIC_3', 'JURISDIC_4': 'JURISDIC_4', 'JURISDIC_5': 'JURISDIC_5', 'JURISDIC_6': 'JURISDIC_6', 'EDIT_DATE': 'EDIT_DATE', 'EDIT_STATU': 'EDIT_STATU', 'EDIT_WHO': 'EDIT_WHO', 'GLOBALID': 'GLOBALID', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', });
lyr_WSDOT__Regions_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'RegionAbbr': 'RegionAbbr', 'DistrictNu': 'DistrictNu', 'RegionName': 'RegionName', 'GlobalID': 'GlobalID', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_WAECY_WQ_Improvements_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FOOT_TYPE': 'FOOT_TYPE', 'AREA_NM': 'AREA_NM', 'Area_sqmi': 'Area_sqmi', 'Area_acres': 'Area_acres', 'PARAM': 'PARAM', 'TMDL_ID': 'TMDL_ID', 'FEATURE_DA': 'FEATURE_DA', 'WRIA_NR': 'WRIA_NR', 'START_YR': 'START_YR', 'COMMENTS': 'COMMENTS', 'W_LNK': 'W_LNK', 'R_LNK': 'R_LNK', 'IP_LNK': 'IP_LNK', 'STATUS': 'STATUS', 'TypeDispla': 'TypeDispla', 'StatusDisp': 'StatusDisp', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_WSDOTCity_Limits_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CityName': 'CityName', 'CountySeat': 'CountySeat', 'CityGNISPl': 'CityGNISPl', 'LastUpdate': 'LastUpdate', 'CountyFIPS': 'CountyFIPS', 'MajorCity': 'MajorCity', 'CityFIPSLo': 'CityFIPSLo', 'OFMCityCod': 'OFMCityCod', 'GlobalID': 'GlobalID', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_WQMunicipal_Stormwater_6.set('fieldAliases', {'fid': 'fid', 'TYPE': 'TYPE', 'PERMIT_NUM': 'PERMIT_NUM', 'PERMIT': 'PERMIT', 'JURISDICTI': 'JURISDICTI', 'CITY_NAME': 'CITY_NAME', 'UGA_NAME': 'UGA_NAME', 'INCORPORAT': 'INCORPORAT', 'COUNTY_NAM': 'COUNTY_NAM', 'UA_NAME': 'UA_NAME', 'UA_TYPE': 'UA_TYPE', 'SYMBOLOGY': 'SYMBOLOGY', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_PARKS__Park_Boundaries_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ParkName': 'ParkName', 'Category': 'Category', 'ParkCode': 'ParkCode', 'WebPage': 'WebPage', 'Abbrv': 'Abbrv', 'Descriptio': 'Descriptio', 'Imagelink': 'Imagelink', 'Management': 'Management', 'Manageme_1': 'Manageme_1', 'Lat_Entran': 'Lat_Entran', 'Long_Entra': 'Long_Entra', 'PublicRoad': 'PublicRoad', 'ParkMgmntA': 'ParkMgmntA', 'ParkSubReg': 'ParkSubReg', 'ParkRegion': 'ParkRegion', 'SubRegionM': 'SubRegionM', 'Acres': 'Acres', 'LABEL_LOCA': 'LABEL_LOCA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_PRCLandAcquisitions_8.set('fieldAliases', {'fid': 'fid', 'ParkCode': 'ParkCode', 'PAcq': 'PAcq', 'Tenure': 'Tenure', 'Map': 'Map', 'GISAcres': 'GISAcres', 'SourceFile': 'SourceFile', 'Overlap': 'Overlap', 'GIS_Notes': 'GIS_Notes', 'ModifiedBy': 'ModifiedBy', 'ModifiedDa': 'ModifiedDa', 'ParkName': 'ParkName', 'ParkNameHi': 'ParkNameHi', 'County': 'County', 'Category': 'Category', 'PARKCODEID': 'PARKCODEID', 'PID': 'PID', 'UNITID': 'UNITID', 'PARCELID': 'PARCELID', 'PPMSCODE': 'PPMSCODE', 'PACRES': 'PACRES', 'PFRESH': 'PFRESH', 'PSALT': 'PSALT', 'PTYPE': 'PTYPE', 'PTYPEEXT': 'PTYPEEXT', 'PCOST': 'PCOST', 'PSECTION': 'PSECTION', 'PTWP': 'PTWP', 'PDIRECTWE': 'PDIRECTWE', 'PRNG': 'PRNG', 'PFUNDSOUR': 'PFUNDSOUR', 'PEXCH': 'PEXCH', 'POTHER': 'POTHER', 'PDATE': 'PDATE', 'PLEGDIST': 'PLEGDIST', 'PSCORPDIST': 'PSCORPDIST', 'PCOUNTY': 'PCOUNTY', 'PTRANSDT': 'PTRANSDT', 'PAUDITOR': 'PAUDITOR', 'PINSCODE': 'PINSCODE', 'PCDATE': 'PCDATE', 'PGRANTOR': 'PGRANTOR', 'PCITY': 'PCITY', 'COMMENTS': 'COMMENTS', 'PCOMMT1': 'PCOMMT1', 'PCOMMT2': 'PCOMMT2', 'PVALUE': 'PVALUE', 'PEXPDATE': 'PEXPDATE', 'PASSESSOR': 'PASSESSOR', 'MAP_1': 'MAP_1', 'INSTRUCODE': 'INSTRUCODE', 'INSTRUNAME': 'INSTRUNAME', 'BSIGNIFIES': 'BSIGNIFIES', 'BNOTSPECIF': 'BNOTSPECIF', });
lyr_WA_DNR_Managed_Land_Parcels_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PARCEL_SYS': 'PARCEL_SYS', 'PARCEL_TYP': 'PARCEL_TYP', 'PARCEL_LAB': 'PARCEL_LAB', 'PARCEL_NM': 'PARCEL_NM', 'REVERSION_': 'REVERSION_', 'OWN_RIGHT_': 'OWN_RIGHT_', 'SURFACE_RI': 'SURFACE_RI', 'MINERAL_RI': 'MINERAL_RI', 'TIMBER_RIG': 'TIMBER_RIG', 'SURFACE_TR': 'SURFACE_TR', 'MINERAL_TR': 'MINERAL_TR', 'TIMBER_TRU': 'TIMBER_TRU', 'OWNER_AGEN': 'OWNER_AGEN', 'STEWARD_AG': 'STEWARD_AG', 'MANAGER_AG': 'MANAGER_AG', 'TIMBER_OWN': 'TIMBER_OWN', 'TIMBER_EXP': 'TIMBER_EXP', 'ORIGINAL_P': 'ORIGINAL_P', 'COUNTY_JUR': 'COUNTY_JUR', 'COUNTY_PAR': 'COUNTY_PAR', 'REGION_JUR': 'REGION_JUR', 'HCP_JURISD': 'HCP_JURISD', 'HCP_DESG_C': 'HCP_DESG_C', 'HCP_DESG_D': 'HCP_DESG_D', 'HCP_WITHDR': 'HCP_WITHDR', 'PARCEL_DES': 'PARCEL_DES', 'EDIT_DATE': 'EDIT_DATE', 'EDIT_STATU': 'EDIT_STATU', 'EDIT_WHO': 'EDIT_WHO', 'EASEMENT_T': 'EASEMENT_T', 'PARCEL_ACQ': 'PARCEL_ACQ', 'PARCEL_DIS': 'PARCEL_DIS', 'GLOBALID': 'GLOBALID', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', });
lyr_WA_Major_Public_Lands_nonDNR_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'OWNER': 'OWNER', 'MANAGER': 'MANAGER', 'MANAGEMENT': 'MANAGEMENT', 'GLOBALID': 'GLOBALID', });
lyr_Drinking_Water_Systems_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PwsId': 'PwsId', 'Suffix': 'Suffix', 'WS_Name': 'WS_Name', 'Region': 'Region', 'County': 'County', 'WS_Grp': 'WS_Grp', 'WS_Type': 'WS_Type', 'OwnerID': 'OwnerID', 'Ownership': 'Ownership', 'Contact_F_Name': 'Contact_F_Name', 'Contact_L_Name': 'Contact_L_Name', 'Contact_Phone': 'Contact_Phone', 'WS_Address1': 'WS_Address1', 'WS_Address2': 'WS_Address2', 'WS_City': 'WS_City', 'WS_State': 'WS_State', 'WS_Zip': 'WS_Zip', 'EMailAddr': 'EMailAddr', 'FT_ResPop': 'FT_ResPop', 'MaxTotalPop': 'MaxTotalPop', 'Total_Conn': 'Total_Conn', 'DOH_Apprvd_Srvcs': 'DOH_Apprvd_Srvcs', 'Connection_Category': 'Connection_Category', 'WS_Status': 'WS_Status', 'WS_Inactive_Date': 'WS_Inactive_Date', 'EffctDate': 'EffctDate', 'GroupADate': 'GroupADate', 'SMAId': 'SMAId', 'ResConn': 'ResConn', 'GWMA': 'GWMA', 'JuriCode': 'JuriCode', 'LERootId': 'LERootId', 'ServiceArea': 'ServiceArea', });
lyr_WaterRightsDiversions_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_Identifier': 'Permanent_Identifier', 'EventDate': 'EventDate', 'ReachCode': 'ReachCode', 'ReachSMDate': 'ReachSMDate', 'ReachResolution': 'ReachResolution', 'Feature_Permanent_Identifier': 'Feature_Permanent_Identifier', 'FeatureClassRef': 'FeatureClassRef', 'Source_Originator': 'Source_Originator', 'Source_DataDesc': 'Source_DataDesc', 'FeatureDetailURL': 'FeatureDetailURL', 'Measure': 'Measure', 'EventType': 'EventType', 'D_Point_ID': 'D_Point_ID', 'EventOffset': 'EventOffset', 'doc_cfs_qt': 'doc_cfs_qt', 'Source_FeatureID': 'Source_FeatureID', 'WR_REPORT_STATUS': 'WR_REPORT_STATUS', 'WR_Doc_NR': 'WR_Doc_NR', 'WR_DOC_ID': 'WR_DOC_ID', 'Fill_CD': 'Fill_CD', 'WR_Doc_Typ': 'WR_Doc_Typ', 'Quality_CD': 'Quality_CD', 'wr_doc_i_2': 'wr_doc_i_2', 'region_cd': 'region_cd', 'wr_doc_fil': 'wr_doc_fil', 'doc_type_c': 'doc_type_c', 'doc_gpm_qt': 'doc_gpm_qt', 'doc_acre_f': 'doc_acre_f', 'acres_irr_': 'acres_irr_', 'purpose_li': 'purpose_li', 'wr_doc_cer': 'wr_doc_cer', 'last_nm': 'last_nm', 'first_nm': 'first_nm', 'mi_nm': 'mi_nm', 'business_n': 'business_n', 'line1_ad': 'line1_ad', 'line2_ad': 'line2_ad', 'mail_ad': 'mail_ad', 'city_nm': 'city_nm', 'state_cd': 'state_cd', 'zip_cd': 'zip_cd', 'WR_Doc_N_1': 'WR_Doc_N_1', 'GlobalID': 'GlobalID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', });
lyr_Sites_NOT_Monitored_13.set('fieldAliases', {'Monitoring Schedule': 'Monitoring Schedule', 'Water Body #': 'Water Body #', 'Water Body System': 'Water Body System', 'Water Body Common Name': 'Water Body Common Name', 'Reservoir Name': 'Reservoir Name', 'Water Body Category': 'Water Body Category', 'Site #': 'Site #', 'Site Name': 'Site Name', 'County': 'County', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', });
lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.set('fieldAliases', {'Water Body Common Name': 'Water Body Common Name', 'Water Body Category': 'Water Body Category', 'Reservoir Name': 'Reservoir Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'County': 'County', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', 'Entities': 'Entities', });
lyr_Sites_Monitored_15.set('fieldAliases', {'Monitoring Schedule': 'Monitoring Schedule', 'Water Body #': 'Water Body #', 'Water Body System': 'Water Body System', 'Water Body Common Name': 'Water Body Common Name', 'Reservoir Name': 'Reservoir Name', 'Water Body Category': 'Water Body Category', 'Site #': 'Site #', 'Site Name': 'Site Name', 'County': 'County', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', });
lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.set('fieldAliases', {'Water Body #': 'Water Body #', 'Water Body Common Name': 'Water Body Common Name', 'Water Body Watershed': 'Water Body Watershed', 'Water Body Category': 'Water Body Category', 'Reservoir Name': 'Reservoir Name', 'Site #': 'Site #', 'Site': 'Site', 'Substrate Location': 'Substrate Location', 'Substrate Attached To': 'Substrate Attached To', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'County': 'County', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', 'Monitoring Schedule': 'Monitoring Schedule', });
lyr_WA_County_Boundaries_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'JURISDICT_': 'Range', 'JURISDIC_1': 'Range', 'JURISDIC_2': 'TextEdit', 'JURISDIC_3': 'TextEdit', 'JURISDIC_4': 'Range', 'JURISDIC_5': 'Range', 'JURISDIC_6': 'TextEdit', 'EDIT_DATE': 'DateTime', 'EDIT_STATU': 'Range', 'EDIT_WHO': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_WA_DNR_Regions_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'JURISDICT_': 'Range', 'JURISDIC_1': 'Range', 'JURISDIC_2': 'TextEdit', 'JURISDIC_3': 'TextEdit', 'JURISDIC_4': 'Range', 'JURISDIC_5': 'TextEdit', 'JURISDIC_6': 'TextEdit', 'EDIT_DATE': 'DateTime', 'EDIT_STATU': 'Range', 'EDIT_WHO': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPELEN': 'TextEdit', });
lyr_WSDOT__Regions_3.set('fieldImages', {'OBJECTID': 'Range', 'RegionAbbr': 'TextEdit', 'DistrictNu': 'Range', 'RegionName': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', });
lyr_WAECY_WQ_Improvements_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FOOT_TYPE': 'TextEdit', 'AREA_NM': 'TextEdit', 'Area_sqmi': 'TextEdit', 'Area_acres': 'TextEdit', 'PARAM': 'TextEdit', 'TMDL_ID': 'Range', 'FEATURE_DA': 'DateTime', 'WRIA_NR': 'TextEdit', 'START_YR': 'Range', 'COMMENTS': 'TextEdit', 'W_LNK': 'TextEdit', 'R_LNK': 'TextEdit', 'IP_LNK': 'TextEdit', 'STATUS': 'TextEdit', 'TypeDispla': 'TextEdit', 'StatusDisp': 'TextEdit', 'CreationDa': 'TextEdit', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_WSDOTCity_Limits_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'CityName': 'TextEdit', 'CountySeat': 'TextEdit', 'CityGNISPl': 'Range', 'LastUpdate': 'DateTime', 'CountyFIPS': 'TextEdit', 'MajorCity': 'TextEdit', 'CityFIPSLo': 'TextEdit', 'OFMCityCod': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', });
lyr_WQMunicipal_Stormwater_6.set('fieldImages', {'fid': 'TextEdit', 'TYPE': 'TextEdit', 'PERMIT_NUM': 'TextEdit', 'PERMIT': 'TextEdit', 'JURISDICTI': 'TextEdit', 'CITY_NAME': 'TextEdit', 'UGA_NAME': 'TextEdit', 'INCORPORAT': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'UA_NAME': 'TextEdit', 'UA_TYPE': 'TextEdit', 'SYMBOLOGY': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_PARKS__Park_Boundaries_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ParkName': 'TextEdit', 'Category': 'TextEdit', 'ParkCode': 'Range', 'WebPage': 'TextEdit', 'Abbrv': 'TextEdit', 'Descriptio': 'TextEdit', 'Imagelink': 'TextEdit', 'Management': 'TextEdit', 'Manageme_1': 'TextEdit', 'Lat_Entran': 'TextEdit', 'Long_Entra': 'TextEdit', 'PublicRoad': 'TextEdit', 'ParkMgmntA': 'TextEdit', 'ParkSubReg': 'TextEdit', 'ParkRegion': 'TextEdit', 'SubRegionM': 'TextEdit', 'Acres': 'TextEdit', 'LABEL_LOCA': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_PRCLandAcquisitions_8.set('fieldImages', {'fid': 'TextEdit', 'ParkCode': 'TextEdit', 'PAcq': 'TextEdit', 'Tenure': 'TextEdit', 'Map': 'TextEdit', 'GISAcres': 'TextEdit', 'SourceFile': 'TextEdit', 'Overlap': 'Range', 'GIS_Notes': 'TextEdit', 'ModifiedBy': 'Range', 'ModifiedDa': 'DateTime', 'ParkName': 'TextEdit', 'ParkNameHi': 'TextEdit', 'County': 'TextEdit', 'Category': 'TextEdit', 'PARKCODEID': 'TextEdit', 'PID': 'TextEdit', 'UNITID': 'TextEdit', 'PARCELID': 'TextEdit', 'PPMSCODE': 'TextEdit', 'PACRES': 'TextEdit', 'PFRESH': 'TextEdit', 'PSALT': 'TextEdit', 'PTYPE': 'TextEdit', 'PTYPEEXT': 'TextEdit', 'PCOST': 'TextEdit', 'PSECTION': 'TextEdit', 'PTWP': 'TextEdit', 'PDIRECTWE': 'TextEdit', 'PRNG': 'TextEdit', 'PFUNDSOUR': 'TextEdit', 'PEXCH': 'TextEdit', 'POTHER': 'TextEdit', 'PDATE': 'DateTime', 'PLEGDIST': 'TextEdit', 'PSCORPDIST': 'TextEdit', 'PCOUNTY': 'TextEdit', 'PTRANSDT': 'DateTime', 'PAUDITOR': 'TextEdit', 'PINSCODE': 'TextEdit', 'PCDATE': 'DateTime', 'PGRANTOR': 'TextEdit', 'PCITY': 'TextEdit', 'COMMENTS': 'TextEdit', 'PCOMMT1': 'TextEdit', 'PCOMMT2': 'TextEdit', 'PVALUE': 'TextEdit', 'PEXPDATE': 'DateTime', 'PASSESSOR': 'TextEdit', 'MAP_1': 'TextEdit', 'INSTRUCODE': 'TextEdit', 'INSTRUNAME': 'TextEdit', 'BSIGNIFIES': 'Range', 'BNOTSPECIF': 'Range', });
lyr_WA_DNR_Managed_Land_Parcels_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'PARCEL_SYS': 'TextEdit', 'PARCEL_TYP': 'TextEdit', 'PARCEL_LAB': 'TextEdit', 'PARCEL_NM': 'TextEdit', 'REVERSION_': 'TextEdit', 'OWN_RIGHT_': 'TextEdit', 'SURFACE_RI': 'TextEdit', 'MINERAL_RI': 'TextEdit', 'TIMBER_RIG': 'TextEdit', 'SURFACE_TR': 'TextEdit', 'MINERAL_TR': 'TextEdit', 'TIMBER_TRU': 'TextEdit', 'OWNER_AGEN': 'TextEdit', 'STEWARD_AG': 'TextEdit', 'MANAGER_AG': 'TextEdit', 'TIMBER_OWN': 'TextEdit', 'TIMBER_EXP': 'TextEdit', 'ORIGINAL_P': 'TextEdit', 'COUNTY_JUR': 'TextEdit', 'COUNTY_PAR': 'TextEdit', 'REGION_JUR': 'TextEdit', 'HCP_JURISD': 'TextEdit', 'HCP_DESG_C': 'TextEdit', 'HCP_DESG_D': 'TextEdit', 'HCP_WITHDR': 'TextEdit', 'PARCEL_DES': 'TextEdit', 'EDIT_DATE': 'DateTime', 'EDIT_STATU': 'TextEdit', 'EDIT_WHO': 'TextEdit', 'EASEMENT_T': 'TextEdit', 'PARCEL_ACQ': 'TextEdit', 'PARCEL_DIS': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPELEN': 'TextEdit', });
lyr_WA_Major_Public_Lands_nonDNR_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'MANAGER': 'TextEdit', 'MANAGEMENT': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_Drinking_Water_Systems_11.set('fieldImages', {'OBJECTID': 'Range', 'PwsId': 'TextEdit', 'Suffix': 'TextEdit', 'WS_Name': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'WS_Grp': 'TextEdit', 'WS_Type': 'TextEdit', 'OwnerID': 'TextEdit', 'Ownership': 'TextEdit', 'Contact_F_Name': 'TextEdit', 'Contact_L_Name': 'TextEdit', 'Contact_Phone': 'TextEdit', 'WS_Address1': 'TextEdit', 'WS_Address2': 'TextEdit', 'WS_City': 'TextEdit', 'WS_State': 'TextEdit', 'WS_Zip': 'TextEdit', 'EMailAddr': 'TextEdit', 'FT_ResPop': 'Range', 'MaxTotalPop': 'Range', 'Total_Conn': 'Range', 'DOH_Apprvd_Srvcs': 'Range', 'Connection_Category': 'TextEdit', 'WS_Status': 'TextEdit', 'WS_Inactive_Date': 'DateTime', 'EffctDate': 'TextEdit', 'GroupADate': 'DateTime', 'SMAId': 'TextEdit', 'ResConn': 'Range', 'GWMA': 'TextEdit', 'JuriCode': 'TextEdit', 'LERootId': 'TextEdit', 'ServiceArea': 'TextEdit', });
lyr_WaterRightsDiversions_12.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_Identifier': 'TextEdit', 'EventDate': 'TextEdit', 'ReachCode': 'TextEdit', 'ReachSMDate': 'TextEdit', 'ReachResolution': 'Range', 'Feature_Permanent_Identifier': 'TextEdit', 'FeatureClassRef': 'Range', 'Source_Originator': 'TextEdit', 'Source_DataDesc': 'TextEdit', 'FeatureDetailURL': 'TextEdit', 'Measure': 'TextEdit', 'EventType': 'Range', 'D_Point_ID': 'Range', 'EventOffset': 'TextEdit', 'doc_cfs_qt': 'TextEdit', 'Source_FeatureID': 'TextEdit', 'WR_REPORT_STATUS': 'TextEdit', 'WR_Doc_NR': 'TextEdit', 'WR_DOC_ID': 'Range', 'Fill_CD': 'Range', 'WR_Doc_Typ': 'TextEdit', 'Quality_CD': 'TextEdit', 'wr_doc_i_2': 'Range', 'region_cd': 'TextEdit', 'wr_doc_fil': 'TextEdit', 'doc_type_c': 'TextEdit', 'doc_gpm_qt': 'TextEdit', 'doc_acre_f': 'TextEdit', 'acres_irr_': 'TextEdit', 'purpose_li': 'TextEdit', 'wr_doc_cer': 'TextEdit', 'last_nm': 'TextEdit', 'first_nm': 'TextEdit', 'mi_nm': 'TextEdit', 'business_n': 'TextEdit', 'line1_ad': 'TextEdit', 'line2_ad': 'TextEdit', 'mail_ad': 'TextEdit', 'city_nm': 'TextEdit', 'state_cd': 'TextEdit', 'zip_cd': 'TextEdit', 'WR_Doc_N_1': 'TextEdit', 'GlobalID': 'TextEdit', 'created_user': 'TextEdit', 'created_date': 'TextEdit', 'last_edited_user': 'TextEdit', 'last_edited_date': 'TextEdit', });
lyr_Sites_NOT_Monitored_13.set('fieldImages', {'Monitoring Schedule': 'TextEdit', 'Water Body #': 'Range', 'Water Body System': 'TextEdit', 'Water Body Common Name': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Site #': 'Range', 'Site Name': 'TextEdit', 'County': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', });
lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.set('fieldImages', {'Water Body Common Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'County': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', 'Entities': 'TextEdit', });
lyr_Sites_Monitored_15.set('fieldImages', {'Monitoring Schedule': 'TextEdit', 'Water Body #': 'Range', 'Water Body System': 'TextEdit', 'Water Body Common Name': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Site #': 'Range', 'Site Name': 'TextEdit', 'County': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', });
lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.set('fieldImages', {'Water Body #': 'Range', 'Water Body Common Name': 'TextEdit', 'Water Body Watershed': 'TextEdit', 'Water Body Category': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Site #': 'Range', 'Site': 'TextEdit', 'Substrate Location': 'TextEdit', 'Substrate Attached To': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'County': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', 'Monitoring Schedule': 'TextEdit', });
lyr_WA_County_Boundaries_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'JURISDICT_': 'no label', 'JURISDIC_1': 'no label', 'JURISDIC_2': 'no label', 'JURISDIC_3': 'no label', 'JURISDIC_4': 'no label', 'JURISDIC_5': 'no label', 'JURISDIC_6': 'no label', 'EDIT_DATE': 'no label', 'EDIT_STATU': 'no label', 'EDIT_WHO': 'no label', 'GLOBALID': 'no label', });
lyr_WA_DNR_Regions_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'JURISDICT_': 'no label', 'JURISDIC_1': 'no label', 'JURISDIC_2': 'no label', 'JURISDIC_3': 'no label', 'JURISDIC_4': 'no label', 'JURISDIC_5': 'no label', 'JURISDIC_6': 'no label', 'EDIT_DATE': 'no label', 'EDIT_STATU': 'no label', 'EDIT_WHO': 'no label', 'GLOBALID': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', });
lyr_WSDOT__Regions_3.set('fieldLabels', {'OBJECTID': 'no label', 'RegionAbbr': 'no label', 'DistrictNu': 'no label', 'RegionName': 'no label', 'GlobalID': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', });
lyr_WAECY_WQ_Improvements_4.set('fieldLabels', {'OBJECTID': 'no label', 'FOOT_TYPE': 'no label', 'AREA_NM': 'no label', 'Area_sqmi': 'no label', 'Area_acres': 'no label', 'PARAM': 'no label', 'TMDL_ID': 'no label', 'FEATURE_DA': 'no label', 'WRIA_NR': 'no label', 'START_YR': 'no label', 'COMMENTS': 'no label', 'W_LNK': 'no label', 'R_LNK': 'no label', 'IP_LNK': 'no label', 'STATUS': 'no label', 'TypeDispla': 'no label', 'StatusDisp': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_WSDOTCity_Limits_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CityName': 'no label', 'CountySeat': 'no label', 'CityGNISPl': 'no label', 'LastUpdate': 'no label', 'CountyFIPS': 'no label', 'MajorCity': 'no label', 'CityFIPSLo': 'no label', 'OFMCityCod': 'no label', 'GlobalID': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', });
lyr_WQMunicipal_Stormwater_6.set('fieldLabels', {'fid': 'no label', 'TYPE': 'no label', 'PERMIT_NUM': 'no label', 'PERMIT': 'no label', 'JURISDICTI': 'no label', 'CITY_NAME': 'no label', 'UGA_NAME': 'no label', 'INCORPORAT': 'no label', 'COUNTY_NAM': 'no label', 'UA_NAME': 'no label', 'UA_TYPE': 'no label', 'SYMBOLOGY': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', });
lyr_PARKS__Park_Boundaries_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ParkName': 'no label', 'Category': 'no label', 'ParkCode': 'no label', 'WebPage': 'no label', 'Abbrv': 'no label', 'Descriptio': 'no label', 'Imagelink': 'no label', 'Management': 'no label', 'Manageme_1': 'no label', 'Lat_Entran': 'no label', 'Long_Entra': 'no label', 'PublicRoad': 'no label', 'ParkMgmntA': 'no label', 'ParkSubReg': 'no label', 'ParkRegion': 'no label', 'SubRegionM': 'no label', 'Acres': 'no label', 'LABEL_LOCA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_PRCLandAcquisitions_8.set('fieldLabels', {'fid': 'no label', 'ParkCode': 'no label', 'PAcq': 'no label', 'Tenure': 'no label', 'Map': 'no label', 'GISAcres': 'no label', 'SourceFile': 'no label', 'Overlap': 'no label', 'GIS_Notes': 'no label', 'ModifiedBy': 'no label', 'ModifiedDa': 'no label', 'ParkName': 'no label', 'ParkNameHi': 'no label', 'County': 'no label', 'Category': 'no label', 'PARKCODEID': 'no label', 'PID': 'no label', 'UNITID': 'no label', 'PARCELID': 'no label', 'PPMSCODE': 'no label', 'PACRES': 'no label', 'PFRESH': 'no label', 'PSALT': 'no label', 'PTYPE': 'no label', 'PTYPEEXT': 'no label', 'PCOST': 'no label', 'PSECTION': 'no label', 'PTWP': 'no label', 'PDIRECTWE': 'no label', 'PRNG': 'no label', 'PFUNDSOUR': 'no label', 'PEXCH': 'no label', 'POTHER': 'no label', 'PDATE': 'no label', 'PLEGDIST': 'no label', 'PSCORPDIST': 'no label', 'PCOUNTY': 'no label', 'PTRANSDT': 'no label', 'PAUDITOR': 'no label', 'PINSCODE': 'no label', 'PCDATE': 'no label', 'PGRANTOR': 'no label', 'PCITY': 'no label', 'COMMENTS': 'no label', 'PCOMMT1': 'no label', 'PCOMMT2': 'no label', 'PVALUE': 'no label', 'PEXPDATE': 'no label', 'PASSESSOR': 'no label', 'MAP_1': 'no label', 'INSTRUCODE': 'no label', 'INSTRUNAME': 'no label', 'BSIGNIFIES': 'no label', 'BNOTSPECIF': 'no label', });
lyr_WA_DNR_Managed_Land_Parcels_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PARCEL_SYS': 'no label', 'PARCEL_TYP': 'no label', 'PARCEL_LAB': 'no label', 'PARCEL_NM': 'no label', 'REVERSION_': 'no label', 'OWN_RIGHT_': 'no label', 'SURFACE_RI': 'no label', 'MINERAL_RI': 'no label', 'TIMBER_RIG': 'no label', 'SURFACE_TR': 'no label', 'MINERAL_TR': 'no label', 'TIMBER_TRU': 'no label', 'OWNER_AGEN': 'no label', 'STEWARD_AG': 'no label', 'MANAGER_AG': 'no label', 'TIMBER_OWN': 'no label', 'TIMBER_EXP': 'no label', 'ORIGINAL_P': 'no label', 'COUNTY_JUR': 'no label', 'COUNTY_PAR': 'no label', 'REGION_JUR': 'no label', 'HCP_JURISD': 'no label', 'HCP_DESG_C': 'no label', 'HCP_DESG_D': 'no label', 'HCP_WITHDR': 'no label', 'PARCEL_DES': 'no label', 'EDIT_DATE': 'no label', 'EDIT_STATU': 'no label', 'EDIT_WHO': 'no label', 'EASEMENT_T': 'no label', 'PARCEL_ACQ': 'no label', 'PARCEL_DIS': 'no label', 'GLOBALID': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', });
lyr_WA_Major_Public_Lands_nonDNR_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'OWNER': 'no label', 'MANAGER': 'no label', 'MANAGEMENT': 'no label', 'GLOBALID': 'no label', });
lyr_Drinking_Water_Systems_11.set('fieldLabels', {'OBJECTID': 'no label', 'PwsId': 'no label', 'Suffix': 'no label', 'WS_Name': 'no label', 'Region': 'no label', 'County': 'no label', 'WS_Grp': 'no label', 'WS_Type': 'no label', 'OwnerID': 'no label', 'Ownership': 'no label', 'Contact_F_Name': 'no label', 'Contact_L_Name': 'no label', 'Contact_Phone': 'no label', 'WS_Address1': 'no label', 'WS_Address2': 'no label', 'WS_City': 'no label', 'WS_State': 'no label', 'WS_Zip': 'no label', 'EMailAddr': 'no label', 'FT_ResPop': 'no label', 'MaxTotalPop': 'no label', 'Total_Conn': 'no label', 'DOH_Apprvd_Srvcs': 'no label', 'Connection_Category': 'no label', 'WS_Status': 'no label', 'WS_Inactive_Date': 'no label', 'EffctDate': 'no label', 'GroupADate': 'no label', 'SMAId': 'no label', 'ResConn': 'no label', 'GWMA': 'no label', 'JuriCode': 'no label', 'LERootId': 'no label', 'ServiceArea': 'no label', });
lyr_WaterRightsDiversions_12.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_Identifier': 'no label', 'EventDate': 'no label', 'ReachCode': 'no label', 'ReachSMDate': 'no label', 'ReachResolution': 'no label', 'Feature_Permanent_Identifier': 'no label', 'FeatureClassRef': 'no label', 'Source_Originator': 'no label', 'Source_DataDesc': 'no label', 'FeatureDetailURL': 'no label', 'Measure': 'no label', 'EventType': 'no label', 'D_Point_ID': 'no label', 'EventOffset': 'no label', 'doc_cfs_qt': 'no label', 'Source_FeatureID': 'no label', 'WR_REPORT_STATUS': 'no label', 'WR_Doc_NR': 'no label', 'WR_DOC_ID': 'no label', 'Fill_CD': 'no label', 'WR_Doc_Typ': 'no label', 'Quality_CD': 'no label', 'wr_doc_i_2': 'no label', 'region_cd': 'no label', 'wr_doc_fil': 'no label', 'doc_type_c': 'no label', 'doc_gpm_qt': 'no label', 'doc_acre_f': 'no label', 'acres_irr_': 'no label', 'purpose_li': 'no label', 'wr_doc_cer': 'no label', 'last_nm': 'no label', 'first_nm': 'no label', 'mi_nm': 'no label', 'business_n': 'no label', 'line1_ad': 'no label', 'line2_ad': 'no label', 'mail_ad': 'no label', 'city_nm': 'no label', 'state_cd': 'no label', 'zip_cd': 'no label', 'WR_Doc_N_1': 'no label', 'GlobalID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', });
lyr_Sites_NOT_Monitored_13.set('fieldLabels', {'Monitoring Schedule': 'no label', 'Water Body #': 'no label', 'Water Body System': 'no label', 'Water Body Common Name': 'no label', 'Reservoir Name': 'no label', 'Water Body Category': 'no label', 'Site #': 'no label', 'Site Name': 'no label', 'County': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', });
lyr_WaterbodyFisheriesManagementResponsibilitiesWaterbodyTableA2_14.set('fieldLabels', {'Water Body Common Name': 'no label', 'Water Body Category': 'no label', 'Reservoir Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'County': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', 'Entities': 'no label', });
lyr_Sites_Monitored_15.set('fieldLabels', {'Monitoring Schedule': 'no label', 'Water Body #': 'no label', 'Water Body System': 'no label', 'Water Body Common Name': 'no label', 'Reservoir Name': 'no label', 'Water Body Category': 'no label', 'Site #': 'no label', 'Site Name': 'no label', 'County': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', });
lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.set('fieldLabels', {'Water Body #': 'no label', 'Water Body Common Name': 'no label', 'Water Body Watershed': 'no label', 'Water Body Category': 'no label', 'Reservoir Name': 'no label', 'Site #': 'no label', 'Site': 'no label', 'Substrate Location': 'no label', 'Substrate Attached To': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'County': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', 'Monitoring Schedule': 'no label', });
lyr_ZebraQuaggaMusselMonitoringScheduleApril20242Sites_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});