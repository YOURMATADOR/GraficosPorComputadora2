let scene = new THREE.Scene();

let camara = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let camaraHelper = new THREE.CameraHelper(camara);

// ? controles

let controles = new function() {
  this.velRot = 0.02;
  this.velReb = 0.03;
  this.velCam = 0.01;
}();

let gui = new dat.GUI();
gui.add(controles, "velRot", 0, 0.5);
gui.add(controles, "velReb", 0, 0.5);
let camaraVelo = gui.add(controles, "velCam", {
  lento: 0.001,
  normal: 0.01,
  rapido: 0.1
});
// camaraVelo.onChange(v => {
//   animacion();
// });
scene.add(camaraHelper);
let renderizador = new THREE.WebGLRenderer();
renderizador.setClearColor(new THREE.Color(0xeeeeee));
renderizador.setSize(window.innerWidth, window.innerHeight);
//habilita las sombras
document.body.appendChild(renderizador.domElement);

renderizador.shadowMapEnabled = true;

let luz = new THREE.SpotLight(0xffffff);
luz.position.set(-40, 60, -10);

let ejes = new THREE.AxisHelper(30); // agrega los ejes de ayuda o el plano espacio
scene.add(ejes);

// let geometriaPlano = new THREE.PlaneGeometry(60, 20);
// let materialPlano = new THREE.MeshBasicMaterial({ color: 0xcccccc });
// var planeMaterial = new THREE.ShadowMaterial();
// planeMaterial.opacity = 0.2;
// let plano = new THREE.Mesh(geometriaPlano, materialPlano);

var planeGeometry = new THREE.PlaneGeometry(60, 20, 32, 32);
var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var plano = new THREE.Mesh(planeGeometry, planeMaterial);
let cuboGeometria = new THREE.CubeGeometry(4, 4, 4);
// let cuboMaterial = new THREE.MeshBasicMaterial({
//   color: 0xff000,
//   wireframe: true
// });
let cuboMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
let cubo = new THREE.Mesh(cuboGeometria, cuboMaterial);
let esferaGeometria = new THREE.SphereGeometry(4, 20, 20);
// let esferaMaterial = new THREE.MeshBasicMaterial({
//   color: 0x7777ff,
//   wireframe: true
// });

let esferaMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
let esfera = new THREE.Mesh(esferaGeometria, esferaMaterial);

esfera.position.x = 20;
esfera.position.y = 4;
esfera.position.z = 2;

cubo.position.x = -3;
cubo.position.y = 3;
cubo.position.z = 0;

plano.rotation.x = -0.5 * Math.PI;
plano.position.x = 15;
plano.position.y = 0;
plano.position.z = 0;

scene.add(esfera);
scene.add(cubo);
scene.add(plano);
scene.add(luz);
plano.reciveShadow = true; // * recibir luz y sombra
luz.castShadow = true;
cubo.castShadow = true; //? emitir luz y sombra
esfera.castShadow = true;

camara.position.x = 0;
camara.position.y = 50;
camara.position.z = 0;
camara.lookAt(scene.position);

let paso = 0;
let x,
  z = 0;
let angulo = controles.velCam;
function animacion() {
  cubo.rotation.x += controles.velRot;
  paso += controles.velReb;
  angulo += .01;
  console.log(controles.velCam);
  esfera.position.y = 2 + 10 * Math.abs(Math.sin(paso));
  //   console.log(Math.cos(paso));
  x = 50 * Math.cos(angulo);
  z = 50 * Math.sin(angulo);

  camara.position.x = x;
  camara.position.z = z;
  camara.lookAt(scene.position);
  requestAnimationFrame(animacion);
  renderizador.render(scene, camara);
}
animacion();

// Create a WebGLRenderer and turn on shadows in the renderer
// var renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

// Create a DirectionalLight and turn on shadows for the light
// var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
// light.position.set( 0, 1, 0 ); 			//default; light shining from top
// light.castShadow = true;            // default false
// scene.add( light );

// Set up shadow properties for the light
// light.shadow.mapSize.width = 512;  // default
// light.shadow.mapSize.height = 512; // default
// light.shadow.camera.near = 0.5;    // default
// light.shadow.camera.far = 500;     // default

// Create a sphere that cast shadows (but does not receive them)
// var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
// var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
// var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
// sphere.castShadow = true; //default is false
// sphere.receiveShadow = false; //default
// scene.add( sphere );

// Create a plane that receives shadows (but does not cast them)
// var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
// var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
// var plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.receiveShadow = true;
// scene.add( plane );

// Create a helper for the shadow camera (optional)
// var helper = new THREE.CameraHelper( light.shadow.camera );
// scene.add( helper );
