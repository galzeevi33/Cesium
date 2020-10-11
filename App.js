(function () {
    "use strict";



    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNjkxNTFjYi0yMDdlLTRlNWQtOTc1Yy02N2VlZDg3YWY1MjQiLCJpZCI6MzA3NTYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1OTQyMTU5Mjd9.SFxoxyVuf6nWepU4KxzpUPIlJJwTUTaHxrw1i3nkR1A";

    var viewer = new Cesium.Viewer("cesiumContainer");




    
      
    


    var imageryLayer = viewer.imageryLayers.addImageryProvider(
    new Cesium.IonImageryProvider({ assetId: 146768 })
    );

 


    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148044),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148051),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148061),
      })
    );


    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148065),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148097),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148107),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148488),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148489),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148490),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148491),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148492),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148493),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148494),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148495),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148496),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148499),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148500),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148501),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148502),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148503),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148504),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148521),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148522),
      })
    );

    var tileset = viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(148523),
      })
    );
    

    
    
    

    
    var measureWidget = new Cesium.Measure({
      container : 'measureContainer',
      scene : scene,
      units : new Cesium.MeasureUnits({
          distanceUnits : Cesium.DistanceUnits.METERS,
          areaUnits : Cesium.AreaUnits.SQUARE_METERS,
          volumeUnits : Cesium.VolumeUnits.CUBIC_FEET,
          angleUnits : Cesium.AngleUnits.DEGREES,
          slopeUnits : Cesium.AngleUnits.GRADE
      })
  });
    
      
      
      
      
      
      
      
      
      
      
      
      

    viewer.zoomTo(imageryLayer).otherwise(function (error) {
    console.log(error);
    });
    

   
 


 


    
 
    viewer.zoomTo(tileset)

   
    


}());
