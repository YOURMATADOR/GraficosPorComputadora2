// Cuando se cargue la página se ejecutará nuestra función
let radio = 4;
$(function() {
  //Crear una escena, que contendrá todos los elementos como objetos, cámaras y luces.
  var escena = new THREE.Scene();

  //Crear una cámara, que define hacia dónde estamos mirando.
  var camara = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  //Crear un objeto render y establecer su tamaño
  var renderizador = new THREE.WebGLRenderer();
  renderizador.setClearColor(new THREE.Color(0xeeeeee));
  renderizador.setSize(window.innerWidth, window.innerHeight);

  var ejes = new THREE.AxisHelper(20);
  escena.add(ejes);

  //Crear una esfera
  var geometriaDeLaEsfera = new THREE.SphereGeometry(radio, 20, 20);
  var materialDeLaEsfera = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true
  });

  var esfera = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esfera.position.x = 0;
  esfera.position.y = 0;
  esfera.position.z = 0;

  var esferaUp = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaUp.position.x = 0;
  esferaUp.position.y = radio * 2;
  esferaUp.position.z = 0;

  var esferaDown = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaDown.position.x = 0;
  esferaDown.position.y = -radio * 2;
  esferaDown.position.z = 0;

  var esferaLeft = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaLeft.position.x = radio * 2;
  esferaLeft.position.y = 0;
  esferaLeft.position.z = 0;
  //Agregar la esfera a la escena

  var esferaRight = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaRight.position.x = -radio * 2;
  esferaRight.position.y = 0;
  esferaRight.position.z = 0;

  var esferaFront = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaFront.position.x = 0;
  esferaFront.position.y = 0;
  esferaFront.position.z = radio * 2;

  var esferaBack = new THREE.Mesh(geometriaDeLaEsfera, materialDeLaEsfera);
  //Posición de la esfera
  esferaBack.position.x = 0;
  esferaBack.position.y = 0;
  esferaBack.position.z = -radio * 2;

  escena.add(esfera);
  escena.add(esferaUp);
  escena.add(esferaDown);
  escena.add(esferaLeft);
  escena.add(esferaRight);
  escena.add(esferaFront);
  escena.add(esferaBack);
  //Posicionamos la cámara y hacemos que apunte al centro de la escena.
  camara.position.x = -30;
  camara.position.y = 40;
  camara.position.z = 30;
  camara.lookAt(escena.position);

  //Asociamos el resultado del renderizado con el elemento html adecuado (un div o un canvas)
  $("#SalidaWebGL").append(renderizador.domElement);

  //Renderizamos la escena
  renderizador.render(escena, camara);
});
