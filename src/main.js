import * as THREE from 'three';
import * as itowns from 'itowns';
import * as dat from 'dat.gui';
import proj4 from 'proj4';

proj4.defs('EPSG:2154', '+proj=lcc +lat_0=46.5 +lon_0=3 +lat_1=49 +lat_2=44 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs');

import * as photogrammetricCamera from 'photogrammetric-camera/dist/photogrammetric-camera';

export { default as HistoricalImage } from './clusters/HistoricalImage';
export { default as HierarchicalCluster } from './clusters/Cluster';
export { default as Border } from './clusters/Border';

export { default as MinMaxGUIHelper} from './gui/MinMaxGUIHelper';

const GUI = dat.GUI;

export { GUI };

export { itowns };
export { THREE };

export { photogrammetricCamera };
export { default as GoogleOrientationParser } from './parsers/GoogleOrientationParser';


export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
export { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';

export { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
export { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
export { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
export { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

export { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
export { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
export { Line2 } from 'three/examples/jsm/lines/Line2';

export { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';
export { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2';

export { default as lineVS } from './materials/lineVS.glsl';
export { default as lineFS } from './materials/lineFS.glsl';
export { default as spriteVS } from './materials/spriteVS.glsl';
export { default as spriteFS } from './materials/spriteFS.glsl';