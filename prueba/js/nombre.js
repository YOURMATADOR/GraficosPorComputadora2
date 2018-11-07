let scene = new THREE.Scene();

let camara = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  1,
  3000
);
let camaraHelper = new THREE.CameraHelper(camara);

// ? controles

// let controles = new function() {
//   this.velRot = 0.02;
//   this.velReb = 0.03;
//   this.velCam = 0.01;
// }();

// let gui = new dat.GUI();
// gui.add(controles, "velRot", 0, 0.5);
// gui.add(controles, "velReb", 0, 0.5);
// let camaraVelo = gui.add(controles, "velCam", {
//   lento: 0.001,
//   normal: 0.01,
//   rapido: 0.1
// });
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
luz.position.set(40, 300, 10);

let ejes = new THREE.AxisHelper(30); // agrega los ejes de ayuda o el plano espacio
scene.add(ejes);

// let geometriaPlano = new THREE.PlaneGeometry(60, 20);
// let materialPlano = new THREE.MeshBasicMaterial({ color: 0xcccccc });
// var planeMaterial = new THREE.ShadowMaterial();
// planeMaterial.opacity = 0.2;
// let plano = new THREE.Mesh(geometriaPlano, materialPlano);

var planeGeometry = new THREE.PlaneGeometry(60, 300, 10, 10);
var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var plano = new THREE.Mesh(planeGeometry, planeMaterial);
let cuboGeometria = new THREE.CubeGeometry(10, 2, 2);

// let cuboMaterial = new THREE.MeshBasicMaterial({
//   color: 0xff000,
//   wireframe: true
// });
let cuboMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
let cubo = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboDos = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboTres = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboCuatro = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboCinco = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboSeis = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboSiete = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboOcho = new THREE.Mesh(cuboGeometria, cuboMaterial);

let cuboQuince = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboNueve = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboDiez = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboOnce = new THREE.Mesh(cuboGeometria, cuboMaterial);

let cuboDoce = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboTrece = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboCatorce = new THREE.Mesh(cuboGeometria, cuboMaterial);

let cuboDiezSeis = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboDiezsiete = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboDiezOcho = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboDiezNueve = new THREE.Mesh(cuboGeometria, cuboMaterial);

let cuboVeinte = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboVeinteUno = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboVeinteDos = new THREE.Mesh(cuboGeometria, cuboMaterial);
let cuboVeinteTres = new THREE.Mesh(cuboGeometria, cuboMaterial);

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

cubo.position.x = 1;
cubo.position.y = 3;
cubo.position.z = 20;

cuboDos.position.x = 5;
cuboDos.position.y = 5;
cuboDos.position.z = 15;
cuboDos.rotation.y = Math.PI / 2;

cuboTres.position.x = 0;
cuboTres.position.y = 5;
cuboTres.position.z = 15;
cuboTres.rotation.y = Math.PI / 2;

cuboCuatro.position.x = -4;
cuboCuatro.position.y = 5;
cuboCuatro.position.z = 15;
cuboCuatro.rotation.y = Math.PI / 2;

cuboCinco.position.x = 0;
cuboCinco.position.y = 5;
cuboCinco.position.z = 6;

cuboSeis.position.x = 4;
cuboSeis.position.y = 5;
cuboSeis.position.z = 3;
cuboSeis.rotation.y = Math.PI / 2;

cuboSiete.position.x = -4;
cuboSiete.position.y = 5;
cuboSiete.position.z = 3;
cuboSiete.rotation.y = Math.PI / 2;

cuboOcho.position.x = 0;
cuboOcho.position.y = 5;
cuboOcho.position.z = -3;

cuboNueve.position.x = 0;
cuboNueve.position.y = 5;
cuboNueve.position.z = -6;

cuboDiez.position.x = 5;
cuboDiez.position.y = 5;
cuboDiez.position.z = -10;
cuboDiez.rotation.y = Math.PI / 2;

cuboOnce.position.x = 1;
cuboOnce.position.y = 5;
cuboOnce.position.z = -15;

cuboDoce.position.x = 1;
cuboDoce.position.y = 5;
cuboDoce.position.z = -20;
cuboDoce.rotation.y = Math.PI / -6;

cuboTrece.position.x = 1;
cuboTrece.position.y = 5;
cuboTrece.position.z = -25;
cuboTrece.rotation.y = Math.PI / 6;

cuboCatorce.position.x = 1;
cuboCatorce.position.y = 5;
cuboCatorce.position.z = -30;

cuboQuince.position.x = -4;
cuboQuince.position.y = 5;
cuboQuince.position.z = -35;
cuboQuince.rotation.y = Math.PI / 2;

cuboDiezSeis.position.x = 0;
cuboDiezSeis.position.y = 5;
cuboDiezSeis.position.z = -45;

cuboDiezsiete.position.x = -5;
cuboDiezsiete.position.y = 5;
cuboDiezsiete.position.z = -48;
cuboDiezsiete.rotation.y = Math.PI / 2;

cuboDiezOcho.position.x = 0;
cuboDiezOcho.position.y = 5;
cuboDiezOcho.position.z = -52;

cuboDiezNueve.position.x = 5;
cuboDiezNueve.position.y = 5;
cuboDiezNueve.position.z = -48;
cuboDiezNueve.rotation.y = Math.PI / 2;

cuboVeinte.position.x = 0;
cuboVeinte.position.y = 5;
cuboVeinte.position.z = -60;

cuboVeinteUno.position.x = -5;
cuboVeinteUno.position.y = 5;
cuboVeinteUno.position.z = -65;
cuboVeinteUno.rotation.y = Math.PI / 2;

cuboVeinteDos.position.x = 0;
cuboVeinteDos.position.y = 5;
cuboVeinteDos.position.z = -65;

cuboVeinteTres.position.x = 5;
cuboVeinteTres.position.y = 5;
cuboVeinteTres.position.z = -60;
cuboVeinteTres.rotation.y = Math.PI / 2;

plano.rotation.x = -0.5 * Math.PI;
plano.position.x = 0;
plano.position.y = 0;
plano.position.z = 0;

scene.add(cubo);
scene.add(cuboDos);
scene.add(cuboTres);
scene.add(cuboCuatro);
scene.add(cuboCinco);
scene.add(cuboSeis);
scene.add(cuboSiete);
scene.add(cuboOcho);
scene.add(cuboNueve);
scene.add(cuboDiez);
scene.add(cuboOnce);
scene.add(cuboDoce);
scene.add(cuboTrece);
scene.add(cuboCatorce);
scene.add(cuboQuince);
scene.add(cuboDiezSeis);
scene.add(cuboDiezsiete);
scene.add(cuboDiezOcho);
scene.add(cuboDiezNueve);
scene.add(cuboVeinte);
scene.add(cuboVeinteUno);
scene.add(cuboVeinteDos);
scene.add(cuboVeinteTres);

scene.add(plano);
scene.add(luz);
plano.reciveShadow = true; // * recibir luz y sombra
luz.castShadow = true;
cubo.castShadow = true; //? emitir luz y sombra
esfera.castShadow = true;

camara.position.x = 0;
camara.position.y = 50;
camara.rotation.y = 90;
camara.position.z = 0;
camara.lookAt(scene.position);

// let paso = 0;
// let x,
//   z = 0;
// let angulo = controles.velCam;
// function animacion() {
//   cubo.rotation.x += controles.velRot;
//   paso += controles.velReb;
//   angulo += .01;
//   console.log(controles.velCam);
//   esfera.position.y = 2 + 10 * Math.abs(Math.sin(paso));
//   //   console.log(Math.cos(paso));
//   x = 50 * Math.cos(angulo);
//   z = 50 * Math.sin(angulo);

//   camara.position.x = x;
//   camara.position.z = z;
//   camara.lookAt(scene.position);
//   requestAnimationFrame(animacion);
// }
// animacion();

renderizador.render(scene, camara);

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
