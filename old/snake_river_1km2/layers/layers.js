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
var format_NHD_WA_Snake_3 = new ol.format.GeoJSON();
var features_NHD_WA_Snake_3 = format_NHD_WA_Snake_3.readFeatures(json_NHD_WA_Snake_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHD_WA_Snake_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHD_WA_Snake_3.addFeatures(features_NHD_WA_Snake_3);
var lyr_NHD_WA_Snake_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NHD_WA_Snake_3, 
                style: style_NHD_WA_Snake_3,
                popuplayertitle: "NHD_WA_Snake",
                interactive: true,
                title: '<img src="styles/legend/NHD_WA_Snake_3.png" /> NHD_WA_Snake'
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
var format_WSDOT__City_Limits_5 = new ol.format.GeoJSON();
var features_WSDOT__City_Limits_5 = format_WSDOT__City_Limits_5.readFeatures(json_WSDOT__City_Limits_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDOT__City_Limits_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDOT__City_Limits_5.addFeatures(features_WSDOT__City_Limits_5);
var lyr_WSDOT__City_Limits_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDOT__City_Limits_5, 
                style: style_WSDOT__City_Limits_5,
                popuplayertitle: "WSDOT_-_City_Limits",
                interactive: true,
                title: '<img src="styles/legend/WSDOT__City_Limits_5.png" /> WSDOT_-_City_Limits'
            });
var format_WA_DNR_Managed_Land_Parcels_6 = new ol.format.GeoJSON();
var features_WA_DNR_Managed_Land_Parcels_6 = format_WA_DNR_Managed_Land_Parcels_6.readFeatures(json_WA_DNR_Managed_Land_Parcels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_DNR_Managed_Land_Parcels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_DNR_Managed_Land_Parcels_6.addFeatures(features_WA_DNR_Managed_Land_Parcels_6);
var lyr_WA_DNR_Managed_Land_Parcels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_DNR_Managed_Land_Parcels_6, 
                style: style_WA_DNR_Managed_Land_Parcels_6,
                popuplayertitle: "WA_DNR_Managed_Land_Parcels",
                interactive: true,
                title: '<img src="styles/legend/WA_DNR_Managed_Land_Parcels_6.png" /> WA_DNR_Managed_Land_Parcels'
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
                popuplayertitle: "PRC Land Acquisitions",
                interactive: true,
                title: '<img src="styles/legend/PRCLandAcquisitions_8.png" /> PRC Land Acquisitions'
            });
var format_WA_Major_Public_Lands_nonDNR_9 = new ol.format.GeoJSON();
var features_WA_Major_Public_Lands_nonDNR_9 = format_WA_Major_Public_Lands_nonDNR_9.readFeatures(json_WA_Major_Public_Lands_nonDNR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_Major_Public_Lands_nonDNR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_Major_Public_Lands_nonDNR_9.addFeatures(features_WA_Major_Public_Lands_nonDNR_9);
var lyr_WA_Major_Public_Lands_nonDNR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_Major_Public_Lands_nonDNR_9, 
                style: style_WA_Major_Public_Lands_nonDNR_9,
                popuplayertitle: "WA_Major_Public_Lands_(non-DNR)",
                interactive: true,
                title: '<img src="styles/legend/WA_Major_Public_Lands_nonDNR_9.png" /> WA_Major_Public_Lands_(non-DNR)'
            });
var format_Drinking_Water_Systems_10 = new ol.format.GeoJSON();
var features_Drinking_Water_Systems_10 = format_Drinking_Water_Systems_10.readFeatures(json_Drinking_Water_Systems_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drinking_Water_Systems_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drinking_Water_Systems_10.addFeatures(features_Drinking_Water_Systems_10);
var lyr_Drinking_Water_Systems_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drinking_Water_Systems_10, 
                style: style_Drinking_Water_Systems_10,
                popuplayertitle: "Drinking_Water_Systems",
                interactive: true,
                title: '<img src="styles/legend/Drinking_Water_Systems_10.png" /> Drinking_Water_Systems'
            });
var format_WaterRightsDiversions_11 = new ol.format.GeoJSON();
var features_WaterRightsDiversions_11 = format_WaterRightsDiversions_11.readFeatures(json_WaterRightsDiversions_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterRightsDiversions_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterRightsDiversions_11.addFeatures(features_WaterRightsDiversions_11);
var lyr_WaterRightsDiversions_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterRightsDiversions_11, 
                style: style_WaterRightsDiversions_11,
                popuplayertitle: "Water Rights Diversions",
                interactive: true,
                title: '<img src="styles/legend/WaterRightsDiversions_11.png" /> Water Rights Diversions'
            });
var format_FisheriesManagementResponsiblities_12 = new ol.format.GeoJSON();
var features_FisheriesManagementResponsiblities_12 = format_FisheriesManagementResponsiblities_12.readFeatures(json_FisheriesManagementResponsiblities_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FisheriesManagementResponsiblities_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FisheriesManagementResponsiblities_12.addFeatures(features_FisheriesManagementResponsiblities_12);
var lyr_FisheriesManagementResponsiblities_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FisheriesManagementResponsiblities_12, 
                style: style_FisheriesManagementResponsiblities_12,
                popuplayertitle: "Fisheries Management Responsiblities",
                interactive: true,
                title: '<img src="styles/legend/FisheriesManagementResponsiblities_12.png" /> Fisheries Management Responsiblities'
            });
var format_LowRiskSitesNotMonitored_13 = new ol.format.GeoJSON();
var features_LowRiskSitesNotMonitored_13 = format_LowRiskSitesNotMonitored_13.readFeatures(json_LowRiskSitesNotMonitored_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowRiskSitesNotMonitored_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowRiskSitesNotMonitored_13.addFeatures(features_LowRiskSitesNotMonitored_13);
var lyr_LowRiskSitesNotMonitored_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowRiskSitesNotMonitored_13, 
                style: style_LowRiskSitesNotMonitored_13,
                popuplayertitle: "Low Risk Sites (Not Monitored)",
                interactive: true,
                title: '<img src="styles/legend/LowRiskSitesNotMonitored_13.png" /> Low Risk Sites (Not Monitored)'
            });
var format_HighRiskSitesMonitored_14 = new ol.format.GeoJSON();
var features_HighRiskSitesMonitored_14 = format_HighRiskSitesMonitored_14.readFeatures(json_HighRiskSitesMonitored_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighRiskSitesMonitored_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighRiskSitesMonitored_14.addFeatures(features_HighRiskSitesMonitored_14);
var lyr_HighRiskSitesMonitored_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HighRiskSitesMonitored_14, 
                style: style_HighRiskSitesMonitored_14,
                popuplayertitle: "High Risk Sites (Monitored)",
                interactive: true,
                title: '<img src="styles/legend/HighRiskSitesMonitored_14.png" /> High Risk Sites (Monitored)'
            });
var format_clippedZebraQuaggaMusselMonitoring_15 = new ol.format.GeoJSON();
var features_clippedZebraQuaggaMusselMonitoring_15 = format_clippedZebraQuaggaMusselMonitoring_15.readFeatures(json_clippedZebraQuaggaMusselMonitoring_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedZebraQuaggaMusselMonitoring_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedZebraQuaggaMusselMonitoring_15.addFeatures(features_clippedZebraQuaggaMusselMonitoring_15);
var lyr_clippedZebraQuaggaMusselMonitoring_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedZebraQuaggaMusselMonitoring_15, 
                style: style_clippedZebraQuaggaMusselMonitoring_15,
                popuplayertitle: "clippedZebraQuaggaMusselMonitoring",
                interactive: true,
                title: '<img src="styles/legend/clippedZebraQuaggaMusselMonitoring_15.png" /> clippedZebraQuaggaMusselMonitoring'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_WA_County_Boundaries_1.setVisible(true);lyr_WA_DNR_Regions_2.setVisible(true);lyr_NHD_WA_Snake_3.setVisible(true);lyr_WAECY_WQ_Improvements_4.setVisible(true);lyr_WSDOT__City_Limits_5.setVisible(true);lyr_WA_DNR_Managed_Land_Parcels_6.setVisible(true);lyr_PARKS__Park_Boundaries_7.setVisible(true);lyr_PRCLandAcquisitions_8.setVisible(true);lyr_WA_Major_Public_Lands_nonDNR_9.setVisible(true);lyr_Drinking_Water_Systems_10.setVisible(true);lyr_WaterRightsDiversions_11.setVisible(true);lyr_FisheriesManagementResponsiblities_12.setVisible(true);lyr_LowRiskSitesNotMonitored_13.setVisible(true);lyr_HighRiskSitesMonitored_14.setVisible(true);lyr_clippedZebraQuaggaMusselMonitoring_15.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_WA_County_Boundaries_1,lyr_WA_DNR_Regions_2,lyr_NHD_WA_Snake_3,lyr_WAECY_WQ_Improvements_4,lyr_WSDOT__City_Limits_5,lyr_WA_DNR_Managed_Land_Parcels_6,lyr_PARKS__Park_Boundaries_7,lyr_PRCLandAcquisitions_8,lyr_WA_Major_Public_Lands_nonDNR_9,lyr_Drinking_Water_Systems_10,lyr_WaterRightsDiversions_11,lyr_FisheriesManagementResponsiblities_12,lyr_LowRiskSitesNotMonitored_13,lyr_HighRiskSitesMonitored_14,lyr_clippedZebraQuaggaMusselMonitoring_15];
lyr_WA_County_Boundaries_1.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_WA_DNR_Regions_2.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_NHD_WA_Snake_3.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_WAECY_WQ_Improvements_4.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_WSDOT__City_Limits_5.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_WA_DNR_Managed_Land_Parcels_6.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_PARKS__Park_Boundaries_7.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_PRCLandAcquisitions_8.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_WA_Major_Public_Lands_nonDNR_9.set('fieldAliases', {'fid': 'fid', 'IHABBSRF_I': 'IHABBSRF_I', 'RR': 'RR', 'HUC': 'HUC', 'TYPE': 'TYPE', 'PMILE': 'PMILE', 'PNAME': 'PNAME', 'OWNAME': 'OWNAME', 'PNMCD': 'PNMCD', 'OWNMCD': 'OWNMCD', 'DSRR': 'DSRR', 'DSHUC': 'DSHUC', 'USDIR': 'USDIR', 'LEV': 'LEV', 'J': 'J', 'TERMID': 'TERMID', 'TRMBLV': 'TRMBLV', 'K': 'K', });
lyr_Drinking_Water_Systems_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PwsId': 'PwsId', 'Suffix': 'Suffix', 'WS_Name': 'WS_Name', 'Region': 'Region', 'County': 'County', 'WS_Grp': 'WS_Grp', 'WS_Type': 'WS_Type', 'OwnerID': 'OwnerID', 'Ownership': 'Ownership', 'Contact_F_Name': 'Contact_F_Name', 'Contact_L_Name': 'Contact_L_Name', 'Contact_Phone': 'Contact_Phone', 'WS_Address1': 'WS_Address1', 'WS_Address2': 'WS_Address2', 'WS_City': 'WS_City', 'WS_State': 'WS_State', 'WS_Zip': 'WS_Zip', 'EMailAddr': 'EMailAddr', 'FT_ResPop': 'FT_ResPop', 'MaxTotalPop': 'MaxTotalPop', 'Total_Conn': 'Total_Conn', 'DOH_Apprvd_Srvcs': 'DOH_Apprvd_Srvcs', 'Connection_Category': 'Connection_Category', 'WS_Status': 'WS_Status', 'WS_Inactive_Date': 'WS_Inactive_Date', 'EffctDate': 'EffctDate', 'GroupADate': 'GroupADate', 'SMAId': 'SMAId', 'ResConn': 'ResConn', 'GWMA': 'GWMA', 'JuriCode': 'JuriCode', 'LERootId': 'LERootId', 'ServiceArea': 'ServiceArea', });
lyr_WaterRightsDiversions_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_Identifier': 'Permanent_Identifier', 'EventDate': 'EventDate', 'ReachCode': 'ReachCode', 'ReachSMDate': 'ReachSMDate', 'ReachResolution': 'ReachResolution', 'Feature_Permanent_Identifier': 'Feature_Permanent_Identifier', 'FeatureClassRef': 'FeatureClassRef', 'Source_Originator': 'Source_Originator', 'Source_DataDesc': 'Source_DataDesc', 'FeatureDetailURL': 'FeatureDetailURL', 'Measure': 'Measure', 'EventType': 'EventType', 'D_Point_ID': 'D_Point_ID', 'EventOffset': 'EventOffset', 'doc_cfs_qt': 'doc_cfs_qt', 'Source_FeatureID': 'Source_FeatureID', 'WR_REPORT_STATUS': 'WR_REPORT_STATUS', 'WR_Doc_NR': 'WR_Doc_NR', 'WR_DOC_ID': 'WR_DOC_ID', 'Fill_CD': 'Fill_CD', 'WR_Doc_Typ': 'WR_Doc_Typ', 'Quality_CD': 'Quality_CD', 'wr_doc_i_2': 'wr_doc_i_2', 'region_cd': 'region_cd', 'wr_doc_fil': 'wr_doc_fil', 'doc_type_c': 'doc_type_c', 'doc_gpm_qt': 'doc_gpm_qt', 'doc_acre_f': 'doc_acre_f', 'acres_irr_': 'acres_irr_', 'purpose_li': 'purpose_li', 'wr_doc_cer': 'wr_doc_cer', 'last_nm': 'last_nm', 'first_nm': 'first_nm', 'mi_nm': 'mi_nm', 'business_n': 'business_n', 'line1_ad': 'line1_ad', 'line2_ad': 'line2_ad', 'mail_ad': 'mail_ad', 'city_nm': 'city_nm', 'state_cd': 'state_cd', 'zip_cd': 'zip_cd', 'WR_Doc_N_1': 'WR_Doc_N_1', 'GlobalID': 'GlobalID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', });
lyr_FisheriesManagementResponsiblities_12.set('fieldAliases', {'Water Body Common Name': 'Water Body Common Name', 'Water Body Category': 'Water Body Category', 'Reservoir Name': 'Reservoir Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'County': 'County', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', 'Entities': 'Entities', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'NHD_WA — NHDWaterbody.shp_Permanent_', 'NHD_WA — NHDWaterbody.shp_FDate': 'NHD_WA — NHDWaterbody.shp_FDate', 'NHD_WA — NHDWaterbody.shp_Resolution': 'NHD_WA — NHDWaterbody.shp_Resolution', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'NHD_WA — NHDWaterbody.shp_GNIS_ID', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'NHD_WA — NHDWaterbody.shp_AreaSqKm', 'NHD_WA — NHDWaterbody.shp_Elevation': 'NHD_WA — NHDWaterbody.shp_Elevation', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'NHD_WA — NHDWaterbody.shp_ReachCode', 'NHD_WA — NHDWaterbody.shp_FType': 'NHD_WA — NHDWaterbody.shp_FType', 'NHD_WA — NHDWaterbody.shp_FCode': 'NHD_WA — NHDWaterbody.shp_FCode', 'NHD_WA — NHDWaterbody.shp_Visibility': 'NHD_WA — NHDWaterbody.shp_Visibility', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'NHD_WA — NHDWaterbody.shp_GlobalID', });
lyr_LowRiskSitesNotMonitored_13.set('fieldAliases', {'Monitoring Schedule': 'Monitoring Schedule', 'Water Body #': 'Water Body #', 'Water Body System': 'Water Body System', 'Water Body Common Name': 'Water Body Common Name', 'Reservoir Name': 'Reservoir Name', 'Water Body Category': 'Water Body Category', 'Site #': 'Site #', 'Site Name': 'Site Name', 'County': 'County', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', });
lyr_HighRiskSitesMonitored_14.set('fieldAliases', {'Monitoring Schedule': 'Monitoring Schedule', 'Water Body #': 'Water Body #', 'Water Body System': 'Water Body System', 'Water Body Common Name': 'Water Body Common Name', 'Reservoir Name': 'Reservoir Name', 'Water Body Category': 'Water Body Category', 'Site #': 'Site #', 'Site Name': 'Site Name', 'County': 'County', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', });
lyr_clippedZebraQuaggaMusselMonitoring_15.set('fieldAliases', {'Water Body #': 'Water Body #', 'Water Body Common Name': 'Water Body Common Name', 'Water Body Watershed': 'Water Body Watershed', 'Water Body Category': 'Water Body Category', 'Reservoir Name': 'Reservoir Name', 'Site #': 'Site #', 'Site': 'Site', 'Substrate Location': 'Substrate Location', 'Substrate Attached To': 'Substrate Attached To', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'County': 'County', 'WDFW Region #': 'WDFW Region #', 'Mountain Range': 'Mountain Range', 'Monitoring Schedule': 'Monitoring Schedule', });
lyr_WA_County_Boundaries_1.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_WA_DNR_Regions_2.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_NHD_WA_Snake_3.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_WAECY_WQ_Improvements_4.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_WSDOT__City_Limits_5.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_WA_DNR_Managed_Land_Parcels_6.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_PARKS__Park_Boundaries_7.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_PRCLandAcquisitions_8.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_WA_Major_Public_Lands_nonDNR_9.set('fieldImages', {'fid': 'TextEdit', 'IHABBSRF_I': 'Range', 'RR': 'TextEdit', 'HUC': 'Range', 'TYPE': 'TextEdit', 'PMILE': 'TextEdit', 'PNAME': 'TextEdit', 'OWNAME': 'TextEdit', 'PNMCD': 'TextEdit', 'OWNMCD': 'TextEdit', 'DSRR': 'TextEdit', 'DSHUC': 'Range', 'USDIR': 'TextEdit', 'LEV': 'Range', 'J': 'Range', 'TERMID': 'Range', 'TRMBLV': 'Range', 'K': 'Range', });
lyr_Drinking_Water_Systems_10.set('fieldImages', {'OBJECTID': 'Range', 'PwsId': 'TextEdit', 'Suffix': 'TextEdit', 'WS_Name': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'WS_Grp': 'TextEdit', 'WS_Type': 'TextEdit', 'OwnerID': 'TextEdit', 'Ownership': 'TextEdit', 'Contact_F_Name': 'TextEdit', 'Contact_L_Name': 'TextEdit', 'Contact_Phone': 'TextEdit', 'WS_Address1': 'TextEdit', 'WS_Address2': 'TextEdit', 'WS_City': 'TextEdit', 'WS_State': 'TextEdit', 'WS_Zip': 'TextEdit', 'EMailAddr': 'TextEdit', 'FT_ResPop': 'Range', 'MaxTotalPop': 'Range', 'Total_Conn': 'Range', 'DOH_Apprvd_Srvcs': 'Range', 'Connection_Category': 'TextEdit', 'WS_Status': 'TextEdit', 'WS_Inactive_Date': 'DateTime', 'EffctDate': 'TextEdit', 'GroupADate': 'DateTime', 'SMAId': 'TextEdit', 'ResConn': 'Range', 'GWMA': 'TextEdit', 'JuriCode': 'TextEdit', 'LERootId': 'TextEdit', 'ServiceArea': 'TextEdit', });
lyr_WaterRightsDiversions_11.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_Identifier': 'TextEdit', 'EventDate': 'TextEdit', 'ReachCode': 'TextEdit', 'ReachSMDate': 'TextEdit', 'ReachResolution': 'Range', 'Feature_Permanent_Identifier': 'TextEdit', 'FeatureClassRef': 'Range', 'Source_Originator': 'TextEdit', 'Source_DataDesc': 'TextEdit', 'FeatureDetailURL': 'TextEdit', 'Measure': 'TextEdit', 'EventType': 'Range', 'D_Point_ID': 'Range', 'EventOffset': 'TextEdit', 'doc_cfs_qt': 'TextEdit', 'Source_FeatureID': 'TextEdit', 'WR_REPORT_STATUS': 'TextEdit', 'WR_Doc_NR': 'TextEdit', 'WR_DOC_ID': 'Range', 'Fill_CD': 'Range', 'WR_Doc_Typ': 'TextEdit', 'Quality_CD': 'TextEdit', 'wr_doc_i_2': 'Range', 'region_cd': 'TextEdit', 'wr_doc_fil': 'TextEdit', 'doc_type_c': 'TextEdit', 'doc_gpm_qt': 'TextEdit', 'doc_acre_f': 'TextEdit', 'acres_irr_': 'TextEdit', 'purpose_li': 'TextEdit', 'wr_doc_cer': 'TextEdit', 'last_nm': 'TextEdit', 'first_nm': 'TextEdit', 'mi_nm': 'TextEdit', 'business_n': 'TextEdit', 'line1_ad': 'TextEdit', 'line2_ad': 'TextEdit', 'mail_ad': 'TextEdit', 'city_nm': 'TextEdit', 'state_cd': 'TextEdit', 'zip_cd': 'TextEdit', 'WR_Doc_N_1': 'TextEdit', 'GlobalID': 'TextEdit', 'created_user': 'TextEdit', 'created_date': 'TextEdit', 'last_edited_user': 'TextEdit', 'last_edited_date': 'TextEdit', });
lyr_FisheriesManagementResponsiblities_12.set('fieldImages', {'Water Body Common Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'County': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', 'Entities': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_FDate': 'DateTime', 'NHD_WA — NHDWaterbody.shp_Resolution': 'Range', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_Elevation': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'TextEdit', 'NHD_WA — NHDWaterbody.shp_FType': 'Range', 'NHD_WA — NHDWaterbody.shp_FCode': 'Range', 'NHD_WA — NHDWaterbody.shp_Visibility': 'Range', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'TextEdit', });
lyr_LowRiskSitesNotMonitored_13.set('fieldImages', {'Monitoring Schedule': '', 'Water Body #': '', 'Water Body System': '', 'Water Body Common Name': '', 'Reservoir Name': '', 'Water Body Category': '', 'Site #': '', 'Site Name': '', 'County': '', 'Latitude': '', 'Longitude': '', 'WDFW Region #': '', 'Mountain Range': '', });
lyr_HighRiskSitesMonitored_14.set('fieldImages', {'Monitoring Schedule': 'TextEdit', 'Water Body #': 'Range', 'Water Body System': 'TextEdit', 'Water Body Common Name': 'TextEdit', 'Reservoir Name': 'TextEdit', 'Water Body Category': 'TextEdit', 'Site #': 'Range', 'Site Name': 'TextEdit', 'County': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'WDFW Region #': 'Range', 'Mountain Range': 'TextEdit', });
lyr_clippedZebraQuaggaMusselMonitoring_15.set('fieldImages', {'Water Body #': '', 'Water Body Common Name': '', 'Water Body Watershed': '', 'Water Body Category': '', 'Reservoir Name': '', 'Site #': '', 'Site': '', 'Substrate Location': '', 'Substrate Attached To': '', 'Latitude': '', 'Longitude': '', 'County': '', 'WDFW Region #': '', 'Mountain Range': '', 'Monitoring Schedule': '', });
lyr_WA_County_Boundaries_1.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_WA_DNR_Regions_2.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_NHD_WA_Snake_3.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_WAECY_WQ_Improvements_4.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_WSDOT__City_Limits_5.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_WA_DNR_Managed_Land_Parcels_6.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_PARKS__Park_Boundaries_7.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_PRCLandAcquisitions_8.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_WA_Major_Public_Lands_nonDNR_9.set('fieldLabels', {'fid': 'no label', 'IHABBSRF_I': 'no label', 'RR': 'no label', 'HUC': 'no label', 'TYPE': 'no label', 'PMILE': 'no label', 'PNAME': 'no label', 'OWNAME': 'no label', 'PNMCD': 'no label', 'OWNMCD': 'no label', 'DSRR': 'no label', 'DSHUC': 'no label', 'USDIR': 'no label', 'LEV': 'no label', 'J': 'no label', 'TERMID': 'no label', 'TRMBLV': 'no label', 'K': 'no label', });
lyr_Drinking_Water_Systems_10.set('fieldLabels', {'OBJECTID': 'no label', 'PwsId': 'no label', 'Suffix': 'no label', 'WS_Name': 'no label', 'Region': 'no label', 'County': 'no label', 'WS_Grp': 'no label', 'WS_Type': 'no label', 'OwnerID': 'no label', 'Ownership': 'no label', 'Contact_F_Name': 'no label', 'Contact_L_Name': 'no label', 'Contact_Phone': 'no label', 'WS_Address1': 'no label', 'WS_Address2': 'no label', 'WS_City': 'no label', 'WS_State': 'no label', 'WS_Zip': 'no label', 'EMailAddr': 'no label', 'FT_ResPop': 'no label', 'MaxTotalPop': 'no label', 'Total_Conn': 'no label', 'DOH_Apprvd_Srvcs': 'no label', 'Connection_Category': 'no label', 'WS_Status': 'no label', 'WS_Inactive_Date': 'no label', 'EffctDate': 'no label', 'GroupADate': 'no label', 'SMAId': 'no label', 'ResConn': 'no label', 'GWMA': 'no label', 'JuriCode': 'no label', 'LERootId': 'no label', 'ServiceArea': 'no label', });
lyr_WaterRightsDiversions_11.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_Identifier': 'no label', 'EventDate': 'no label', 'ReachCode': 'no label', 'ReachSMDate': 'no label', 'ReachResolution': 'no label', 'Feature_Permanent_Identifier': 'no label', 'FeatureClassRef': 'no label', 'Source_Originator': 'no label', 'Source_DataDesc': 'no label', 'FeatureDetailURL': 'no label', 'Measure': 'no label', 'EventType': 'no label', 'D_Point_ID': 'no label', 'EventOffset': 'no label', 'doc_cfs_qt': 'no label', 'Source_FeatureID': 'no label', 'WR_REPORT_STATUS': 'no label', 'WR_Doc_NR': 'no label', 'WR_DOC_ID': 'no label', 'Fill_CD': 'no label', 'WR_Doc_Typ': 'no label', 'Quality_CD': 'no label', 'wr_doc_i_2': 'no label', 'region_cd': 'no label', 'wr_doc_fil': 'no label', 'doc_type_c': 'no label', 'doc_gpm_qt': 'no label', 'doc_acre_f': 'no label', 'acres_irr_': 'no label', 'purpose_li': 'no label', 'wr_doc_cer': 'no label', 'last_nm': 'no label', 'first_nm': 'no label', 'mi_nm': 'no label', 'business_n': 'no label', 'line1_ad': 'no label', 'line2_ad': 'no label', 'mail_ad': 'no label', 'city_nm': 'no label', 'state_cd': 'no label', 'zip_cd': 'no label', 'WR_Doc_N_1': 'no label', 'GlobalID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', });
lyr_FisheriesManagementResponsiblities_12.set('fieldLabels', {'Water Body Common Name': 'no label', 'Water Body Category': 'no label', 'Reservoir Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'County': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', 'Entities': 'no label', 'NHD_WA — NHDWaterbody.shp_Permanent_': 'no label', 'NHD_WA — NHDWaterbody.shp_FDate': 'no label', 'NHD_WA — NHDWaterbody.shp_Resolution': 'no label', 'NHD_WA — NHDWaterbody.shp_GNIS_ID': 'no label', 'NHD_WA — NHDWaterbody.shp_AreaSqKm': 'no label', 'NHD_WA — NHDWaterbody.shp_Elevation': 'no label', 'NHD_WA — NHDWaterbody.shp_ReachCode': 'no label', 'NHD_WA — NHDWaterbody.shp_FType': 'no label', 'NHD_WA — NHDWaterbody.shp_FCode': 'no label', 'NHD_WA — NHDWaterbody.shp_Visibility': 'no label', 'NHD_WA — NHDWaterbody.shp_GlobalID': 'no label', });
lyr_LowRiskSitesNotMonitored_13.set('fieldLabels', {'Monitoring Schedule': 'no label', 'Water Body #': 'no label', 'Water Body System': 'no label', 'Water Body Common Name': 'no label', 'Reservoir Name': 'no label', 'Water Body Category': 'no label', 'Site #': 'no label', 'Site Name': 'no label', 'County': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', });
lyr_HighRiskSitesMonitored_14.set('fieldLabels', {'Monitoring Schedule': 'no label', 'Water Body #': 'no label', 'Water Body System': 'no label', 'Water Body Common Name': 'no label', 'Reservoir Name': 'no label', 'Water Body Category': 'no label', 'Site #': 'no label', 'Site Name': 'no label', 'County': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', });
lyr_clippedZebraQuaggaMusselMonitoring_15.set('fieldLabels', {'Water Body #': 'no label', 'Water Body Common Name': 'no label', 'Water Body Watershed': 'no label', 'Water Body Category': 'no label', 'Reservoir Name': 'no label', 'Site #': 'no label', 'Site': 'no label', 'Substrate Location': 'no label', 'Substrate Attached To': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'County': 'no label', 'WDFW Region #': 'no label', 'Mountain Range': 'no label', 'Monitoring Schedule': 'no label', });
lyr_clippedZebraQuaggaMusselMonitoring_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});