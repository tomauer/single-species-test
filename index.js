import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';
import {get as getProjection} from 'ol/proj';
import {getCenter} from 'ol/extent';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import {Fill, Icon, Stroke, Style, Text} from 'ol/style';
import {applyStyle} from 'ol-mapbox-style';
import stylefunction from 'ol-mapbox-style/dist/stylefunction';
import Draw, {
  createBox,
  createRegularPolygon,
} from 'ol/interaction/Draw';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import Modify from 'ol/interaction/Modify';
import Translate from 'ol/interaction/Translate';
import Collection from 'ol/Collection';
import Feature from 'ol/Feature';

proj4.defs('EPSG:199999', '+proj=laea +lon_0=-80.86 +lat_0=14.88 +datum=WGS84 +units=m +no_defs');
proj4.defs('ESRI:54009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 ' +
    '+units=m +no_defs');
//proj4.defs('ESRI:54012', '+proj=eck4 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs')
register(proj4);

var proj54009 = getProjection('ESRI:54009');
proj54009.setExtent([-18e6, -9e6, 18e6, 9e6]);

var proj102001 = getProjection('EPSG:199999');
proj102001.setExtent([-9303637, -8338295, 7694955, 7838189]);


var key = 'pk.eyJ1IjoidGhlc2t1YSIsImEiOiJjaXpvdWtoZ3UwMDVmMzJueDl2cWp6NHdnIn0.3T9kAApG2hnV6NCVWxVDbA';

var countStyle = new Style({
  fill: new Fill({
    color: '#666',
    opacity: 0.4
  })
});

var style = 'https://api.mapbox.com/styles/v1/theskua/ckb9o174m07p61is0tjzhvtsc.html?fresh=true&title=view&access_token=' + key


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })  
  ],
  view: new View({
    projection: 'ESRI:54009', 
    center: [-8277374.267578123, 3555690.7653808603],
    zoom: 4,
    maxZoom: 12, 
    constrainResolution: true
  })
});

var layer232km = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new MVT(),
    url: 'https://{a-d}.tiles.mapbox.com/v4/theskua.a0du45ln/' +
        '{z}/{x}/{y}.vector.pbf?access_token=' + key
  }),
  opacity: 0.7,
  maxZoom: 2
})

map.addLayer(layer232km)

let styleUrl232 = require('./data/style232.json');
stylefunction(layer232km, styleUrl232, "bknsti-nonbreeding-moll-stars-232km");

var layer77km = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new MVT(),
    url: 'https://{a-d}.tiles.mapbox.com/v4/theskua.3gp59mlq/' +
        '{z}/{x}/{y}.vector.pbf?access_token=' + key
  }),
  opacity: 0.7,
  minZoom: 2,
  maxZoom: 4
})

map.addLayer(layer77km);

let styleUrl77 = require('./data/style77.json');
stylefunction(layer77km, styleUrl77, "bknsti-nonbreeding-moll-stars-77km");

var layer26km = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new MVT(),
    url: 'https://{a-d}.tiles.mapbox.com/v4/theskua.bg4mrt4m/' +
        '{z}/{x}/{y}.vector.pbf?access_token=' + key
  }),
  opacity: 0.7,
  minZoom: 4,
  maxZoom: 6
})

map.addLayer(layer26km);


let styleUrl26 = require('./data/style26.json');
stylefunction(layer26km, styleUrl26, "bknsti-nonbreeding-moll-stars-26km");

var layer9km = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new MVT(),
    url: 'https://{a-d}.tiles.mapbox.com/v4/theskua.97ptxzcu/' +
        '{z}/{x}/{y}.vector.pbf?access_token=' + key
  }),
  opacity: 0.7,
  minZoom: 6,
  maxZoom: 8
})

map.addLayer(layer9km)

let styleUrl9 = require('./data/style9.json');
stylefunction(layer9km, styleUrl9, "bknsti-nonbreeding-moll-stars-9km");

var layer3km = new VectorTileLayer({
  declutter: true,
  source: new VectorTileSource({
    attributions: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
      '© <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap contributors</a>',
    format: new MVT(),
    url: 'https://{a-d}.tiles.mapbox.com/v4/theskua.7s33ti8n/' +
        '{z}/{x}/{y}.vector.pbf?access_token=' + key
  }),
  opacity: 0.7,
  minZoom: 8
})

map.addLayer(layer3km)

let styleUrl3 = require('./data/style3.json');
stylefunction(layer3km, styleUrl3, "bknsti-nonbreeding-moll-stars");

var source = new VectorSource({wrapX: false});

var vector = new VectorLayer({
  source: source,
});

map.addLayer(vector)

// trying to see what the intersected features were
//var source2 = new VectorSource({wrapX: false});

//var vector2 = new VectorLayer({
//  source: source2,
//});

//map.addLayer(vector2)


var info = $('#info');
info.tooltip({
  animation: false,
  trigger: 'manual'
});

var updateToolTip = function(extent, pixel) {
  console.log("updateToolTip")
  if(map.getView().getZoom() <= 2) {
    var fs = layer232km.getSource().getFeaturesInExtent(extent);
    var fn = 'bknsti_nonbreeding_moll_232km.tif'
  } else if(map.getView().getZoom() >= 3 & map.getView().getZoom() <= 4) {
    var fs = layer77km.getSource().getFeaturesInExtent(extent);
    var fn = 'bknsti_nonbreeding_moll_77km.tif'
  } else if(map.getView().getZoom() >= 5 & map.getView().getZoom() <= 6) {
    var fs = layer26km.getSource().getFeaturesInExtent(extent);
    var fn = 'bknsti_nonbreeding_moll_26km.tif'
  } else if(map.getView().getZoom() >= 7 & map.getView().getZoom() <= 8) {
    var fs = layer9km.getSource().getFeaturesInExtent(extent);
    var fn = 'bknsti_nonbreeding_moll_9km.tif'
  } else if(map.getView().getZoom() >= 9) {
    var fs = layer3km.getSource().getFeaturesInExtent(extent);
    var fn = 'bknsti_nonbreeding_moll.tif'
  } 
 
  //console.log(fs);

  var f;
  var vals = 0;

  var tnf;

  for (f in fs) {
    //console.log(fs[f].get('bknsti_nonbreeding_moll_77km.tif'))
    vals+=fs[f].get(fn);

    //tnf = new Feature({
    //  geometry: fs[f].getGeometry(),
    //  name: f
    //});

    //console.log(tnf)

    //source2.addFeature(tf);
  }

  //console.log(vals);
  var mra = vals / fs.length;

  info.css({
    left: pixel[0] + 'px',
    top: (pixel[1] - 30) + 'px'
  });

  info.tooltip('hide')
      .attr('data-original-title', 'Mean Relative Abundance: ' + mra.toFixed(2))
      .tooltip('fixTitle')
      .tooltip('show');
}


var modify = new Translate({source: source});
modify.on("translating", function(event) {
  console.log("translating");

  var pixel = event.mapBrowserEvent.pixel

  var extent = event.features.item(0).getGeometry().getExtent();

  updateToolTip(extent, pixel);

});

map.on('moveend', function(e) {
  console.log(map.getView().getZoom());
  console.log(map.getView().getResolution());
});

var draw = new Draw({
  source: source,
  type: 'Circle',
  geometryFunction: createBox()
});


draw.on('drawend', function(event) {
  var pixel = event.target.downPx_
  var extent = event.feature.getGeometry().getExtent();

  map.removeInteraction(draw);
  map.addInteraction(modify);

 updateToolTip(extent, pixel);
});

function addInteraction() {
  map.addInteraction(draw)
}

var baseLayerSelect = document.getElementById('startDraw');

baseLayerSelect.onclick = function() {

  addInteraction();
};

var clearSelect = document.getElementById('clearShapes');

clearSelect.onclick = function() {

  source.clear();

  //info.tooltip('hide');  

  map.removeInteraction(modify);
};