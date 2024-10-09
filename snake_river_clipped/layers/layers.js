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
var format_snake_clipped_WSDOT__City_Limitsshp_1 = new ol.format.GeoJSON();
var features_snake_clipped_WSDOT__City_Limitsshp_1 = format_snake_clipped_WSDOT__City_Limitsshp_1.readFeatures(json_snake_clipped_WSDOT__City_Limitsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WSDOT__City_Limitsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WSDOT__City_Limitsshp_1.addFeatures(features_snake_clipped_WSDOT__City_Limitsshp_1);
var lyr_snake_clipped_WSDOT__City_Limitsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WSDOT__City_Limitsshp_1, 
                style: style_snake_clipped_WSDOT__City_Limitsshp_1,
                popuplayertitle: "snake_clipped_WSDOT_-_City_Limits.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WSDOT__City_Limitsshp_1.png" /> snake_clipped_WSDOT_-_City_Limits.shp'
            });
var format_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2 = new ol.format.GeoJSON();
var features_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2 = format_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.readFeatures(json_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.addFeatures(features_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2);
var lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2, 
                style: style_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2,
                popuplayertitle: "snake_clipped_WQMunicipal_Stormwater — MunicipalStormwaterPermits.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.png" /> snake_clipped_WQMunicipal_Stormwater — MunicipalStormwaterPermits.shp'
            });
var format_snake_clipped_WA_Rivers1_3 = new ol.format.GeoJSON();
var features_snake_clipped_WA_Rivers1_3 = format_snake_clipped_WA_Rivers1_3.readFeatures(json_snake_clipped_WA_Rivers1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WA_Rivers1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WA_Rivers1_3.addFeatures(features_snake_clipped_WA_Rivers1_3);
var lyr_snake_clipped_WA_Rivers1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WA_Rivers1_3, 
                style: style_snake_clipped_WA_Rivers1_3,
                popuplayertitle: "snake_clipped_WA_Rivers1",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WA_Rivers1_3.png" /> snake_clipped_WA_Rivers1'
            });
var format_snake_clipped_WA_County_Boundariesshp_4 = new ol.format.GeoJSON();
var features_snake_clipped_WA_County_Boundariesshp_4 = format_snake_clipped_WA_County_Boundariesshp_4.readFeatures(json_snake_clipped_WA_County_Boundariesshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WA_County_Boundariesshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WA_County_Boundariesshp_4.addFeatures(features_snake_clipped_WA_County_Boundariesshp_4);
var lyr_snake_clipped_WA_County_Boundariesshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WA_County_Boundariesshp_4, 
                style: style_snake_clipped_WA_County_Boundariesshp_4,
                popuplayertitle: "snake_clipped_WA_County_Boundaries.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WA_County_Boundariesshp_4.png" /> snake_clipped_WA_County_Boundaries.shp'
            });
var format_snake_clipped_snake_river_5 = new ol.format.GeoJSON();
var features_snake_clipped_snake_river_5 = format_snake_clipped_snake_river_5.readFeatures(json_snake_clipped_snake_river_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_snake_river_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_snake_river_5.addFeatures(features_snake_clipped_snake_river_5);
var lyr_snake_clipped_snake_river_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_snake_river_5, 
                style: style_snake_clipped_snake_river_5,
                popuplayertitle: "snake_clipped_snake_river",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_snake_river_5.png" /> snake_clipped_snake_river'
            });
var format_snake_clipped_NHD_WANHDWaterbodyshp_6 = new ol.format.GeoJSON();
var features_snake_clipped_NHD_WANHDWaterbodyshp_6 = format_snake_clipped_NHD_WANHDWaterbodyshp_6.readFeatures(json_snake_clipped_NHD_WANHDWaterbodyshp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_NHD_WANHDWaterbodyshp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_NHD_WANHDWaterbodyshp_6.addFeatures(features_snake_clipped_NHD_WANHDWaterbodyshp_6);
var lyr_snake_clipped_NHD_WANHDWaterbodyshp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_NHD_WANHDWaterbodyshp_6, 
                style: style_snake_clipped_NHD_WANHDWaterbodyshp_6,
                popuplayertitle: "snake_clipped_NHD_WA — NHDWaterbody.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_NHD_WANHDWaterbodyshp_6.png" /> snake_clipped_NHD_WA — NHDWaterbody.shp'
            });
var format_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7 = new ol.format.GeoJSON();
var features_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7 = format_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.readFeatures(json_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.addFeatures(features_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7);
var lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7, 
                style: style_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7,
                popuplayertitle: "snake_clipped_WA_Major_Public_Lands_(non-DNR).shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.png" /> snake_clipped_WA_Major_Public_Lands_(non-DNR).shp'
            });
var format_snake_clipped_WA_DNR_Managed_Land_Parcels_8 = new ol.format.GeoJSON();
var features_snake_clipped_WA_DNR_Managed_Land_Parcels_8 = format_snake_clipped_WA_DNR_Managed_Land_Parcels_8.readFeatures(json_snake_clipped_WA_DNR_Managed_Land_Parcels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WA_DNR_Managed_Land_Parcels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WA_DNR_Managed_Land_Parcels_8.addFeatures(features_snake_clipped_WA_DNR_Managed_Land_Parcels_8);
var lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WA_DNR_Managed_Land_Parcels_8, 
                style: style_snake_clipped_WA_DNR_Managed_Land_Parcels_8,
                popuplayertitle: "snake_clipped_WA_DNR_Managed_Land_Parcels",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WA_DNR_Managed_Land_Parcels_8.png" /> snake_clipped_WA_DNR_Managed_Land_Parcels'
            });
var format_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9 = new ol.format.GeoJSON();
var features_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9 = format_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.readFeatures(json_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.addFeatures(features_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9);
var lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9, 
                style: style_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9,
                popuplayertitle: "snake_clipped_PRCLandAcquisitions — LandAcquisitions.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.png" /> snake_clipped_PRCLandAcquisitions — LandAcquisitions.shp'
            });
var format_snake_clipped_PARKS__Park_Boundariesshp_10 = new ol.format.GeoJSON();
var features_snake_clipped_PARKS__Park_Boundariesshp_10 = format_snake_clipped_PARKS__Park_Boundariesshp_10.readFeatures(json_snake_clipped_PARKS__Park_Boundariesshp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_PARKS__Park_Boundariesshp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_PARKS__Park_Boundariesshp_10.addFeatures(features_snake_clipped_PARKS__Park_Boundariesshp_10);
var lyr_snake_clipped_PARKS__Park_Boundariesshp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_PARKS__Park_Boundariesshp_10, 
                style: style_snake_clipped_PARKS__Park_Boundariesshp_10,
                popuplayertitle: "snake_clipped_PARKS_-_Park_Boundaries.shp",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_PARKS__Park_Boundariesshp_10.png" /> snake_clipped_PARKS_-_Park_Boundaries.shp'
            });
var format_snake_clipped_WaterRightsDiversions_11 = new ol.format.GeoJSON();
var features_snake_clipped_WaterRightsDiversions_11 = format_snake_clipped_WaterRightsDiversions_11.readFeatures(json_snake_clipped_WaterRightsDiversions_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_WaterRightsDiversions_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_WaterRightsDiversions_11.addFeatures(features_snake_clipped_WaterRightsDiversions_11);
var lyr_snake_clipped_WaterRightsDiversions_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_WaterRightsDiversions_11, 
                style: style_snake_clipped_WaterRightsDiversions_11,
                popuplayertitle: "snake_clipped_WaterRightsDiversions",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_WaterRightsDiversions_11.png" /> snake_clipped_WaterRightsDiversions'
            });
var format_snake_clipped_Drinking_Water_Systems_12 = new ol.format.GeoJSON();
var features_snake_clipped_Drinking_Water_Systems_12 = format_snake_clipped_Drinking_Water_Systems_12.readFeatures(json_snake_clipped_Drinking_Water_Systems_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snake_clipped_Drinking_Water_Systems_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_snake_clipped_Drinking_Water_Systems_12.addFeatures(features_snake_clipped_Drinking_Water_Systems_12);
var lyr_snake_clipped_Drinking_Water_Systems_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_snake_clipped_Drinking_Water_Systems_12, 
                style: style_snake_clipped_Drinking_Water_Systems_12,
                popuplayertitle: "snake_clipped_Drinking_Water_Systems",
                interactive: true,
                title: '<img src="styles/legend/snake_clipped_Drinking_Water_Systems_12.png" /> snake_clipped_Drinking_Water_Systems'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_snake_clipped_WSDOT__City_Limitsshp_1.setVisible(true);lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.setVisible(true);lyr_snake_clipped_WA_Rivers1_3.setVisible(true);lyr_snake_clipped_WA_County_Boundariesshp_4.setVisible(true);lyr_snake_clipped_snake_river_5.setVisible(true);lyr_snake_clipped_NHD_WANHDWaterbodyshp_6.setVisible(true);lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.setVisible(true);lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8.setVisible(true);lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.setVisible(true);lyr_snake_clipped_PARKS__Park_Boundariesshp_10.setVisible(true);lyr_snake_clipped_WaterRightsDiversions_11.setVisible(true);lyr_snake_clipped_Drinking_Water_Systems_12.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_snake_clipped_WSDOT__City_Limitsshp_1,lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2,lyr_snake_clipped_WA_Rivers1_3,lyr_snake_clipped_WA_County_Boundariesshp_4,lyr_snake_clipped_snake_river_5,lyr_snake_clipped_NHD_WANHDWaterbodyshp_6,lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7,lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8,lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9,lyr_snake_clipped_PARKS__Park_Boundariesshp_10,lyr_snake_clipped_WaterRightsDiversions_11,lyr_snake_clipped_Drinking_Water_Systems_12];
lyr_snake_clipped_WSDOT__City_Limitsshp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CityName': 'CityName', 'CountySeat': 'CountySeat', 'CityGNISPl': 'CityGNISPl', 'LastUpdate': 'LastUpdate', 'CountyFIPS': 'CountyFIPS', 'MajorCity': 'MajorCity', 'CityFIPSLo': 'CityFIPSLo', 'OFMCityCod': 'OFMCityCod', 'GlobalID': 'GlobalID', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.set('fieldAliases', {'TYPE': 'TYPE', 'PERMIT_NUM': 'PERMIT_NUM', 'PERMIT': 'PERMIT', 'JURISDICTI': 'JURISDICTI', 'CITY_NAME': 'CITY_NAME', 'UGA_NAME': 'UGA_NAME', 'INCORPORAT': 'INCORPORAT', 'COUNTY_NAM': 'COUNTY_NAM', 'UA_NAME': 'UA_NAME', 'UA_TYPE': 'UA_TYPE', 'SYMBOLOGY': 'SYMBOLOGY', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_snake_clipped_WA_Rivers1_3.set('fieldAliases', {'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_snake_clipped_WA_County_Boundariesshp_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JURISDICT_': 'JURISDICT_', 'JURISDIC_1': 'JURISDIC_1', 'JURISDIC_2': 'JURISDIC_2', 'JURISDIC_3': 'JURISDIC_3', 'JURISDIC_4': 'JURISDIC_4', 'JURISDIC_5': 'JURISDIC_5', 'JURISDIC_6': 'JURISDIC_6', 'EDIT_DATE': 'EDIT_DATE', 'EDIT_STATU': 'EDIT_STATU', 'EDIT_WHO': 'EDIT_WHO', 'GLOBALID': 'GLOBALID', });
lyr_snake_clipped_snake_river_5.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_snake_clipped_NHD_WANHDWaterbodyshp_6.set('fieldAliases', {'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'AreaSqKm': 'AreaSqKm', 'Elevation': 'Elevation', 'ReachCode': 'ReachCode', 'FType': 'FType', 'FCode': 'FCode', 'Visibility': 'Visibility', 'GlobalID': 'GlobalID', });
lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'OWNER': 'OWNER', 'MANAGER': 'MANAGER', 'MANAGEMENT': 'MANAGEMENT', 'GLOBALID': 'GLOBALID', });
lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PARCEL_SYST_ID': 'PARCEL_SYST_ID', 'PARCEL_TYPE_CD': 'PARCEL_TYPE_CD', 'PARCEL_LABEL_NM': 'PARCEL_LABEL_NM', 'PARCEL_NM': 'PARCEL_NM', 'REVERSION_RIGHTS_FLG': 'REVERSION_RIGHTS_FLG', 'OWN_RIGHT_DISPUTE_FLG': 'OWN_RIGHT_DISPUTE_FLG', 'SURFACE_RIGHTS_FLG': 'SURFACE_RIGHTS_FLG', 'MINERAL_RIGHTS_FLG': 'MINERAL_RIGHTS_FLG', 'TIMBER_RIGHTS_FLG': 'TIMBER_RIGHTS_FLG', 'SURFACE_TRUST_CD': 'SURFACE_TRUST_CD', 'MINERAL_TRUST_CD': 'MINERAL_TRUST_CD', 'TIMBER_TRUST_CD': 'TIMBER_TRUST_CD', 'OWNER_AGENT_SYST_ID': 'OWNER_AGENT_SYST_ID', 'STEWARD_AGENT_SYST_ID': 'STEWARD_AGENT_SYST_ID', 'MANAGER_AGENT_SYST_ID': 'MANAGER_AGENT_SYST_ID', 'TIMBER_OWNER_NM': 'TIMBER_OWNER_NM', 'TIMBER_EXP_DT': 'TIMBER_EXP_DT', 'ORIGINAL_PATENT_DT': 'ORIGINAL_PATENT_DT', 'COUNTY_JURISDICT_DESG_CD': 'COUNTY_JURISDICT_DESG_CD', 'COUNTY_PARCEL_NO': 'COUNTY_PARCEL_NO', 'REGION_JURISDICT_DESG_CD': 'REGION_JURISDICT_DESG_CD', 'HCP_JURISDICT_DESG_CD': 'HCP_JURISDICT_DESG_CD', 'HCP_DESG_CD': 'HCP_DESG_CD', 'HCP_DESG_DT': 'HCP_DESG_DT', 'HCP_WITHDRAWAL_DT': 'HCP_WITHDRAWAL_DT', 'PARCEL_DESC_TXT': 'PARCEL_DESC_TXT', 'EDIT_DATE': 'EDIT_DATE', 'EDIT_STATUS': 'EDIT_STATUS', 'EDIT_WHO': 'EDIT_WHO', 'EASEMENT_TYPE_CD': 'EASEMENT_TYPE_CD', 'PARCEL_ACQUIRE_AUTH_NO': 'PARCEL_ACQUIRE_AUTH_NO', 'PARCEL_DISPOSAL_AUTH_NO': 'PARCEL_DISPOSAL_AUTH_NO', 'GLOBALID': 'GLOBALID', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', });
lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.set('fieldAliases', {'ParkCode': 'ParkCode', 'PAcq': 'PAcq', 'Tenure': 'Tenure', 'Map': 'Map', 'GISAcres': 'GISAcres', 'SourceFile': 'SourceFile', 'Overlap': 'Overlap', 'GIS_Notes': 'GIS_Notes', 'ModifiedBy': 'ModifiedBy', 'ModifiedDa': 'ModifiedDa', 'ParkName': 'ParkName', 'ParkNameHi': 'ParkNameHi', 'County': 'County', 'Category': 'Category', 'PARKCODEID': 'PARKCODEID', 'PID': 'PID', 'UNITID': 'UNITID', 'PARCELID': 'PARCELID', 'PPMSCODE': 'PPMSCODE', 'PACRES': 'PACRES', 'PFRESH': 'PFRESH', 'PSALT': 'PSALT', 'PTYPE': 'PTYPE', 'PTYPEEXT': 'PTYPEEXT', 'PCOST': 'PCOST', 'PSECTION': 'PSECTION', 'PTWP': 'PTWP', 'PDIRECTWE': 'PDIRECTWE', 'PRNG': 'PRNG', 'PFUNDSOUR': 'PFUNDSOUR', 'PEXCH': 'PEXCH', 'POTHER': 'POTHER', 'PDATE': 'PDATE', 'PLEGDIST': 'PLEGDIST', 'PSCORPDIST': 'PSCORPDIST', 'PCOUNTY': 'PCOUNTY', 'PTRANSDT': 'PTRANSDT', 'PAUDITOR': 'PAUDITOR', 'PINSCODE': 'PINSCODE', 'PCDATE': 'PCDATE', 'PGRANTOR': 'PGRANTOR', 'PCITY': 'PCITY', 'COMMENTS': 'COMMENTS', 'PCOMMT1': 'PCOMMT1', 'PCOMMT2': 'PCOMMT2', 'PVALUE': 'PVALUE', 'PEXPDATE': 'PEXPDATE', 'PASSESSOR': 'PASSESSOR', 'MAP_1': 'MAP_1', 'INSTRUCODE': 'INSTRUCODE', 'INSTRUNAME': 'INSTRUNAME', 'BSIGNIFIES': 'BSIGNIFIES', 'BNOTSPECIF': 'BNOTSPECIF', });
lyr_snake_clipped_PARKS__Park_Boundariesshp_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ParkName': 'ParkName', 'Category': 'Category', 'ParkCode': 'ParkCode', 'WebPage': 'WebPage', 'Abbrv': 'Abbrv', 'Descriptio': 'Descriptio', 'Imagelink': 'Imagelink', 'Management': 'Management', 'Manageme_1': 'Manageme_1', 'Lat_Entran': 'Lat_Entran', 'Long_Entra': 'Long_Entra', 'PublicRoad': 'PublicRoad', 'ParkMgmntA': 'ParkMgmntA', 'ParkSubReg': 'ParkSubReg', 'ParkRegion': 'ParkRegion', 'SubRegionM': 'SubRegionM', 'Acres': 'Acres', 'LABEL_LOCA': 'LABEL_LOCA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_snake_clipped_WaterRightsDiversions_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_Identifier': 'Permanent_Identifier', 'EventDate': 'EventDate', 'ReachCode': 'ReachCode', 'ReachSMDate': 'ReachSMDate', 'ReachResolution': 'ReachResolution', 'Feature_Permanent_Identifier': 'Feature_Permanent_Identifier', 'FeatureClassRef': 'FeatureClassRef', 'Source_Originator': 'Source_Originator', 'Source_DataDesc': 'Source_DataDesc', 'FeatureDetailURL': 'FeatureDetailURL', 'Measure': 'Measure', 'EventType': 'EventType', 'D_Point_ID': 'D_Point_ID', 'EventOffset': 'EventOffset', 'doc_cfs_qt': 'doc_cfs_qt', 'Source_FeatureID': 'Source_FeatureID', 'WR_REPORT_STATUS': 'WR_REPORT_STATUS', 'WR_Doc_NR': 'WR_Doc_NR', 'WR_DOC_ID': 'WR_DOC_ID', 'Fill_CD': 'Fill_CD', 'WR_Doc_Typ': 'WR_Doc_Typ', 'Quality_CD': 'Quality_CD', 'wr_doc_i_2': 'wr_doc_i_2', 'region_cd': 'region_cd', 'wr_doc_fil': 'wr_doc_fil', 'doc_type_c': 'doc_type_c', 'doc_gpm_qt': 'doc_gpm_qt', 'doc_acre_f': 'doc_acre_f', 'acres_irr_': 'acres_irr_', 'purpose_li': 'purpose_li', 'wr_doc_cer': 'wr_doc_cer', 'last_nm': 'last_nm', 'first_nm': 'first_nm', 'mi_nm': 'mi_nm', 'business_n': 'business_n', 'line1_ad': 'line1_ad', 'line2_ad': 'line2_ad', 'mail_ad': 'mail_ad', 'city_nm': 'city_nm', 'state_cd': 'state_cd', 'zip_cd': 'zip_cd', 'WR_Doc_N_1': 'WR_Doc_N_1', 'GlobalID': 'GlobalID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', });
lyr_snake_clipped_Drinking_Water_Systems_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PwsId': 'PwsId', 'Suffix': 'Suffix', 'WS_Name': 'WS_Name', 'Region': 'Region', 'County': 'County', 'WS_Grp': 'WS_Grp', 'WS_Type': 'WS_Type', 'OwnerID': 'OwnerID', 'Ownership': 'Ownership', 'Contact_F_Name': 'Contact_F_Name', 'Contact_L_Name': 'Contact_L_Name', 'Contact_Phone': 'Contact_Phone', 'WS_Address1': 'WS_Address1', 'WS_Address2': 'WS_Address2', 'WS_City': 'WS_City', 'WS_State': 'WS_State', 'WS_Zip': 'WS_Zip', 'EMailAddr': 'EMailAddr', 'FT_ResPop': 'FT_ResPop', 'MaxTotalPop': 'MaxTotalPop', 'Total_Conn': 'Total_Conn', 'DOH_Apprvd_Srvcs': 'DOH_Apprvd_Srvcs', 'Connection_Category': 'Connection_Category', 'WS_Status': 'WS_Status', 'WS_Inactive_Date': 'WS_Inactive_Date', 'EffctDate': 'EffctDate', 'GroupADate': 'GroupADate', 'SMAId': 'SMAId', 'ResConn': 'ResConn', 'GWMA': 'GWMA', 'JuriCode': 'JuriCode', 'LERootId': 'LERootId', 'ServiceArea': 'ServiceArea', });
lyr_snake_clipped_WSDOT__City_Limitsshp_1.set('fieldImages', {'OBJECTID': 'Range', 'CityName': 'TextEdit', 'CountySeat': 'TextEdit', 'CityGNISPl': 'Range', 'LastUpdate': 'DateTime', 'CountyFIPS': 'TextEdit', 'MajorCity': 'TextEdit', 'CityFIPSLo': 'TextEdit', 'OFMCityCod': 'TextEdit', 'GlobalID': 'TextEdit', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', });
lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.set('fieldImages', {'TYPE': 'TextEdit', 'PERMIT_NUM': 'TextEdit', 'PERMIT': 'TextEdit', 'JURISDICTI': 'TextEdit', 'CITY_NAME': 'TextEdit', 'UGA_NAME': 'TextEdit', 'INCORPORAT': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'UA_NAME': 'TextEdit', 'UA_TYPE': 'TextEdit', 'SYMBOLOGY': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_snake_clipped_WA_Rivers1_3.set('fieldImages', {'IHABBSRF_I': '', 'RR': '', 'HUC': '', 'TYPE': '', 'PMILE': '', 'PNAME': '', 'OWNAME': '', 'PNMCD': '', 'OWNMCD': '', 'DSRR': '', 'DSHUC': '', 'USDIR': '', 'LEV': '', 'J': '', 'TERMID': '', 'TRMBLV': '', 'K': '', });
lyr_snake_clipped_WA_County_Boundariesshp_4.set('fieldImages', {'OBJECTID': 'Range', 'JURISDICT_': 'Range', 'JURISDIC_1': 'Range', 'JURISDIC_2': 'TextEdit', 'JURISDIC_3': 'TextEdit', 'JURISDIC_4': 'Range', 'JURISDIC_5': 'Range', 'JURISDIC_6': 'TextEdit', 'EDIT_DATE': 'DateTime', 'EDIT_STATU': 'Range', 'EDIT_WHO': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_snake_clipped_snake_river_5.set('fieldImages', {'fid': '', 'IHABBSRF_I': '', 'RR': '', 'HUC': '', 'TYPE': '', 'PMILE': '', 'PNAME': '', 'OWNAME': '', 'PNMCD': '', 'OWNMCD': '', 'DSRR': '', 'DSHUC': '', 'USDIR': '', 'LEV': '', 'J': '', 'TERMID': '', 'TRMBLV': '', 'K': '', });
lyr_snake_clipped_NHD_WANHDWaterbodyshp_6.set('fieldImages', {'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'AreaSqKm': 'TextEdit', 'Elevation': 'TextEdit', 'ReachCode': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'Visibility': 'Range', 'GlobalID': 'TextEdit', });
lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.set('fieldImages', {'OBJECTID': 'Range', 'NAME': 'TextEdit', 'OWNER': 'TextEdit', 'MANAGER': 'TextEdit', 'MANAGEMENT': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8.set('fieldImages', {'OBJECTID': 'Range', 'PARCEL_SYST_ID': 'Range', 'PARCEL_TYPE_CD': 'Range', 'PARCEL_LABEL_NM': 'TextEdit', 'PARCEL_NM': 'TextEdit', 'REVERSION_RIGHTS_FLG': 'TextEdit', 'OWN_RIGHT_DISPUTE_FLG': 'TextEdit', 'SURFACE_RIGHTS_FLG': 'TextEdit', 'MINERAL_RIGHTS_FLG': 'TextEdit', 'TIMBER_RIGHTS_FLG': 'TextEdit', 'SURFACE_TRUST_CD': 'Range', 'MINERAL_TRUST_CD': 'Range', 'TIMBER_TRUST_CD': 'Range', 'OWNER_AGENT_SYST_ID': 'Range', 'STEWARD_AGENT_SYST_ID': 'Range', 'MANAGER_AGENT_SYST_ID': 'Range', 'TIMBER_OWNER_NM': 'TextEdit', 'TIMBER_EXP_DT': 'TextEdit', 'ORIGINAL_PATENT_DT': 'TextEdit', 'COUNTY_JURISDICT_DESG_CD': 'Range', 'COUNTY_PARCEL_NO': 'TextEdit', 'REGION_JURISDICT_DESG_CD': 'Range', 'HCP_JURISDICT_DESG_CD': 'TextEdit', 'HCP_DESG_CD': 'Range', 'HCP_DESG_DT': 'TextEdit', 'HCP_WITHDRAWAL_DT': 'DateTime', 'PARCEL_DESC_TXT': 'TextEdit', 'EDIT_DATE': 'DateTime', 'EDIT_STATUS': 'Range', 'EDIT_WHO': 'TextEdit', 'EASEMENT_TYPE_CD': 'TextEdit', 'PARCEL_ACQUIRE_AUTH_NO': 'TextEdit', 'PARCEL_DISPOSAL_AUTH_NO': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPELEN': 'TextEdit', });
lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.set('fieldImages', {'ParkCode': 'Range', 'PAcq': 'TextEdit', 'Tenure': 'TextEdit', 'Map': 'TextEdit', 'GISAcres': 'TextEdit', 'SourceFile': 'TextEdit', 'Overlap': 'Range', 'GIS_Notes': 'TextEdit', 'ModifiedBy': 'Range', 'ModifiedDa': 'DateTime', 'ParkName': 'TextEdit', 'ParkNameHi': 'TextEdit', 'County': 'TextEdit', 'Category': 'TextEdit', 'PARKCODEID': 'TextEdit', 'PID': 'TextEdit', 'UNITID': 'TextEdit', 'PARCELID': 'TextEdit', 'PPMSCODE': 'TextEdit', 'PACRES': 'TextEdit', 'PFRESH': 'TextEdit', 'PSALT': 'TextEdit', 'PTYPE': 'TextEdit', 'PTYPEEXT': 'TextEdit', 'PCOST': 'TextEdit', 'PSECTION': 'TextEdit', 'PTWP': 'TextEdit', 'PDIRECTWE': 'TextEdit', 'PRNG': 'TextEdit', 'PFUNDSOUR': 'TextEdit', 'PEXCH': 'TextEdit', 'POTHER': 'TextEdit', 'PDATE': 'DateTime', 'PLEGDIST': 'TextEdit', 'PSCORPDIST': 'TextEdit', 'PCOUNTY': 'TextEdit', 'PTRANSDT': 'DateTime', 'PAUDITOR': 'TextEdit', 'PINSCODE': 'TextEdit', 'PCDATE': 'DateTime', 'PGRANTOR': 'TextEdit', 'PCITY': 'TextEdit', 'COMMENTS': 'TextEdit', 'PCOMMT1': 'TextEdit', 'PCOMMT2': 'TextEdit', 'PVALUE': 'TextEdit', 'PEXPDATE': 'DateTime', 'PASSESSOR': 'TextEdit', 'MAP_1': 'TextEdit', 'INSTRUCODE': 'TextEdit', 'INSTRUNAME': 'TextEdit', 'BSIGNIFIES': 'Range', 'BNOTSPECIF': 'Range', });
lyr_snake_clipped_PARKS__Park_Boundariesshp_10.set('fieldImages', {'OBJECTID': 'Range', 'ParkName': 'TextEdit', 'Category': 'TextEdit', 'ParkCode': 'Range', 'WebPage': 'TextEdit', 'Abbrv': 'TextEdit', 'Descriptio': 'TextEdit', 'Imagelink': 'TextEdit', 'Management': 'TextEdit', 'Manageme_1': 'TextEdit', 'Lat_Entran': 'TextEdit', 'Long_Entra': 'TextEdit', 'PublicRoad': 'TextEdit', 'ParkMgmntA': 'TextEdit', 'ParkSubReg': 'TextEdit', 'ParkRegion': 'TextEdit', 'SubRegionM': 'TextEdit', 'Acres': 'TextEdit', 'LABEL_LOCA': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_snake_clipped_WaterRightsDiversions_11.set('fieldImages', {'OBJECTID': '', 'Permanent_Identifier': '', 'EventDate': '', 'ReachCode': '', 'ReachSMDate': '', 'ReachResolution': '', 'Feature_Permanent_Identifier': '', 'FeatureClassRef': '', 'Source_Originator': '', 'Source_DataDesc': '', 'FeatureDetailURL': '', 'Measure': '', 'EventType': '', 'D_Point_ID': '', 'EventOffset': '', 'doc_cfs_qt': '', 'Source_FeatureID': '', 'WR_REPORT_STATUS': '', 'WR_Doc_NR': '', 'WR_DOC_ID': '', 'Fill_CD': '', 'WR_Doc_Typ': '', 'Quality_CD': '', 'wr_doc_i_2': '', 'region_cd': '', 'wr_doc_fil': '', 'doc_type_c': '', 'doc_gpm_qt': '', 'doc_acre_f': '', 'acres_irr_': '', 'purpose_li': '', 'wr_doc_cer': '', 'last_nm': '', 'first_nm': '', 'mi_nm': '', 'business_n': '', 'line1_ad': '', 'line2_ad': '', 'mail_ad': '', 'city_nm': '', 'state_cd': '', 'zip_cd': '', 'WR_Doc_N_1': '', 'GlobalID': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', });
lyr_snake_clipped_Drinking_Water_Systems_12.set('fieldImages', {'OBJECTID': '', 'PwsId': '', 'Suffix': '', 'WS_Name': '', 'Region': '', 'County': '', 'WS_Grp': '', 'WS_Type': '', 'OwnerID': '', 'Ownership': '', 'Contact_F_Name': '', 'Contact_L_Name': '', 'Contact_Phone': '', 'WS_Address1': '', 'WS_Address2': '', 'WS_City': '', 'WS_State': '', 'WS_Zip': '', 'EMailAddr': '', 'FT_ResPop': '', 'MaxTotalPop': '', 'Total_Conn': '', 'DOH_Apprvd_Srvcs': '', 'Connection_Category': '', 'WS_Status': '', 'WS_Inactive_Date': '', 'EffctDate': '', 'GroupADate': '', 'SMAId': '', 'ResConn': '', 'GWMA': '', 'JuriCode': '', 'LERootId': '', 'ServiceArea': '', });
lyr_snake_clipped_WSDOT__City_Limitsshp_1.set('fieldLabels', {'OBJECTID': 'no label', 'CityName': 'no label', 'CountySeat': 'no label', 'CityGNISPl': 'no label', 'LastUpdate': 'no label', 'CountyFIPS': 'no label', 'MajorCity': 'no label', 'CityFIPSLo': 'no label', 'OFMCityCod': 'no label', 'GlobalID': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', });
lyr_snake_clipped_WQMunicipal_StormwaterMunicipalStormwaterPermitsshp_2.set('fieldLabels', {'TYPE': 'no label', 'PERMIT_NUM': 'no label', 'PERMIT': 'no label', 'JURISDICTI': 'no label', 'CITY_NAME': 'no label', 'UGA_NAME': 'no label', 'INCORPORAT': 'no label', 'COUNTY_NAM': 'no label', 'UA_NAME': 'no label', 'UA_TYPE': 'no label', 'SYMBOLOGY': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', });
lyr_snake_clipped_WA_Rivers1_3.set('fieldLabels', {'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_snake_clipped_WA_County_Boundariesshp_4.set('fieldLabels', {'OBJECTID': 'no label', 'JURISDICT_': 'no label', 'JURISDIC_1': 'no label', 'JURISDIC_2': 'no label', 'JURISDIC_3': 'no label', 'JURISDIC_4': 'no label', 'JURISDIC_5': 'no label', 'JURISDIC_6': 'no label', 'EDIT_DATE': 'no label', 'EDIT_STATU': 'no label', 'EDIT_WHO': 'no label', 'GLOBALID': 'no label', });
lyr_snake_clipped_snake_river_5.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_snake_clipped_NHD_WANHDWaterbodyshp_6.set('fieldLabels', {'Permanent_': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'GNIS_Name': 'no label', 'AreaSqKm': 'no label', 'Elevation': 'no label', 'ReachCode': 'no label', 'FType': 'no label', 'FCode': 'no label', 'Visibility': 'no label', 'GlobalID': 'no label', });
lyr_snake_clipped_WA_Major_Public_Lands_nonDNRshp_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'OWNER': 'no label', 'MANAGER': 'no label', 'MANAGEMENT': 'no label', 'GLOBALID': 'no label', });
lyr_snake_clipped_WA_DNR_Managed_Land_Parcels_8.set('fieldLabels', {'OBJECTID': 'no label', 'PARCEL_SYST_ID': 'no label', 'PARCEL_TYPE_CD': 'no label', 'PARCEL_LABEL_NM': 'no label', 'PARCEL_NM': 'no label', 'REVERSION_RIGHTS_FLG': 'no label', 'OWN_RIGHT_DISPUTE_FLG': 'no label', 'SURFACE_RIGHTS_FLG': 'no label', 'MINERAL_RIGHTS_FLG': 'no label', 'TIMBER_RIGHTS_FLG': 'no label', 'SURFACE_TRUST_CD': 'no label', 'MINERAL_TRUST_CD': 'no label', 'TIMBER_TRUST_CD': 'no label', 'OWNER_AGENT_SYST_ID': 'no label', 'STEWARD_AGENT_SYST_ID': 'no label', 'MANAGER_AGENT_SYST_ID': 'no label', 'TIMBER_OWNER_NM': 'no label', 'TIMBER_EXP_DT': 'no label', 'ORIGINAL_PATENT_DT': 'no label', 'COUNTY_JURISDICT_DESG_CD': 'no label', 'COUNTY_PARCEL_NO': 'no label', 'REGION_JURISDICT_DESG_CD': 'no label', 'HCP_JURISDICT_DESG_CD': 'no label', 'HCP_DESG_CD': 'no label', 'HCP_DESG_DT': 'no label', 'HCP_WITHDRAWAL_DT': 'no label', 'PARCEL_DESC_TXT': 'no label', 'EDIT_DATE': 'no label', 'EDIT_STATUS': 'no label', 'EDIT_WHO': 'no label', 'EASEMENT_TYPE_CD': 'no label', 'PARCEL_ACQUIRE_AUTH_NO': 'no label', 'PARCEL_DISPOSAL_AUTH_NO': 'no label', 'GLOBALID': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', });
lyr_snake_clipped_PRCLandAcquisitionsLandAcquisitionsshp_9.set('fieldLabels', {'ParkCode': 'no label', 'PAcq': 'no label', 'Tenure': 'no label', 'Map': 'no label', 'GISAcres': 'no label', 'SourceFile': 'no label', 'Overlap': 'no label', 'GIS_Notes': 'no label', 'ModifiedBy': 'no label', 'ModifiedDa': 'no label', 'ParkName': 'no label', 'ParkNameHi': 'no label', 'County': 'no label', 'Category': 'no label', 'PARKCODEID': 'no label', 'PID': 'no label', 'UNITID': 'no label', 'PARCELID': 'no label', 'PPMSCODE': 'no label', 'PACRES': 'no label', 'PFRESH': 'no label', 'PSALT': 'no label', 'PTYPE': 'no label', 'PTYPEEXT': 'no label', 'PCOST': 'no label', 'PSECTION': 'no label', 'PTWP': 'no label', 'PDIRECTWE': 'no label', 'PRNG': 'no label', 'PFUNDSOUR': 'no label', 'PEXCH': 'no label', 'POTHER': 'no label', 'PDATE': 'no label', 'PLEGDIST': 'no label', 'PSCORPDIST': 'no label', 'PCOUNTY': 'no label', 'PTRANSDT': 'no label', 'PAUDITOR': 'no label', 'PINSCODE': 'no label', 'PCDATE': 'no label', 'PGRANTOR': 'no label', 'PCITY': 'no label', 'COMMENTS': 'no label', 'PCOMMT1': 'no label', 'PCOMMT2': 'no label', 'PVALUE': 'no label', 'PEXPDATE': 'no label', 'PASSESSOR': 'no label', 'MAP_1': 'no label', 'INSTRUCODE': 'no label', 'INSTRUNAME': 'no label', 'BSIGNIFIES': 'no label', 'BNOTSPECIF': 'no label', });
lyr_snake_clipped_PARKS__Park_Boundariesshp_10.set('fieldLabels', {'OBJECTID': 'no label', 'ParkName': 'no label', 'Category': 'no label', 'ParkCode': 'no label', 'WebPage': 'no label', 'Abbrv': 'no label', 'Descriptio': 'no label', 'Imagelink': 'no label', 'Management': 'no label', 'Manageme_1': 'no label', 'Lat_Entran': 'no label', 'Long_Entra': 'no label', 'PublicRoad': 'no label', 'ParkMgmntA': 'no label', 'ParkSubReg': 'no label', 'ParkRegion': 'no label', 'SubRegionM': 'no label', 'Acres': 'no label', 'LABEL_LOCA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_snake_clipped_WaterRightsDiversions_11.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_Identifier': 'no label', 'EventDate': 'no label', 'ReachCode': 'no label', 'ReachSMDate': 'no label', 'ReachResolution': 'no label', 'Feature_Permanent_Identifier': 'no label', 'FeatureClassRef': 'no label', 'Source_Originator': 'no label', 'Source_DataDesc': 'no label', 'FeatureDetailURL': 'no label', 'Measure': 'no label', 'EventType': 'no label', 'D_Point_ID': 'no label', 'EventOffset': 'no label', 'doc_cfs_qt': 'no label', 'Source_FeatureID': 'no label', 'WR_REPORT_STATUS': 'no label', 'WR_Doc_NR': 'no label', 'WR_DOC_ID': 'no label', 'Fill_CD': 'no label', 'WR_Doc_Typ': 'no label', 'Quality_CD': 'no label', 'wr_doc_i_2': 'no label', 'region_cd': 'no label', 'wr_doc_fil': 'no label', 'doc_type_c': 'no label', 'doc_gpm_qt': 'no label', 'doc_acre_f': 'no label', 'acres_irr_': 'no label', 'purpose_li': 'no label', 'wr_doc_cer': 'no label', 'last_nm': 'no label', 'first_nm': 'no label', 'mi_nm': 'no label', 'business_n': 'no label', 'line1_ad': 'no label', 'line2_ad': 'no label', 'mail_ad': 'no label', 'city_nm': 'no label', 'state_cd': 'no label', 'zip_cd': 'no label', 'WR_Doc_N_1': 'no label', 'GlobalID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', });
lyr_snake_clipped_Drinking_Water_Systems_12.set('fieldLabels', {'OBJECTID': 'no label', 'PwsId': 'no label', 'Suffix': 'no label', 'WS_Name': 'no label', 'Region': 'no label', 'County': 'no label', 'WS_Grp': 'no label', 'WS_Type': 'no label', 'OwnerID': 'no label', 'Ownership': 'no label', 'Contact_F_Name': 'no label', 'Contact_L_Name': 'no label', 'Contact_Phone': 'no label', 'WS_Address1': 'no label', 'WS_Address2': 'no label', 'WS_City': 'no label', 'WS_State': 'no label', 'WS_Zip': 'no label', 'EMailAddr': 'no label', 'FT_ResPop': 'no label', 'MaxTotalPop': 'no label', 'Total_Conn': 'no label', 'DOH_Apprvd_Srvcs': 'no label', 'Connection_Category': 'no label', 'WS_Status': 'no label', 'WS_Inactive_Date': 'no label', 'EffctDate': 'no label', 'GroupADate': 'no label', 'SMAId': 'no label', 'ResConn': 'no label', 'GWMA': 'no label', 'JuriCode': 'no label', 'LERootId': 'no label', 'ServiceArea': 'no label', });
lyr_snake_clipped_Drinking_Water_Systems_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});