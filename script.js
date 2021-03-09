require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 7,
          center: [-90, 38]
        });


        /********************
         * Add feature layer 1
         ********************/

        // Colleges with geospatial related programs in Greater St. Louis Area.
        var featureLayer_1 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Mina_Final_Project_13AUG20_WFL1/FeatureServer"
});

map.add(featureLayer_1);

  /********************
         * Add feature layer 2
         ********************/

        // Boundaries of Missouri's 114 counties plus the boundary of the city of St. Louis

  var featureLayer_2 = new FeatureLayer({
  url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/arcgis/rest/services/MO_2018_County_Boundaries/FeatureServer"
});

map.add(featureLayer_2);

        map.add(featureLayer_1);
      });
