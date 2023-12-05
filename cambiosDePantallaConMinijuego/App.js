class App {
  constructor() {
    //DECLARAMOS DIFERENTES INSTANCIAS DE BOTONES
    //PARA SIGUIENTE Y VOLVER, USAREMOS LOS MISMOS
    //PERO PARA IR A PANTALLAS "random"
    //CREAREMOS DIFERENTES BOTONES QUE NOS LLEVEN AHI
    //PASANDO UN PARAMETRO DE TIPO NUMERICO
    this.cantidadDePantallas = 9
      this.pantalla = 0

      this.botonSiguiente = new Boton(width/2, height/2, 100, 50, "Siguiente", "siguiente") //importante ultimo parametro
      this.botonVolver = new Boton(width/4, height/2, 100, 50, "Volver", "volver") //importante ultimo parametro

      this.botonCreditos = new Boton(width/4, height/2, 100, 50, "Créditos", 1) //importante ultimo parametro
      this.botonIniciarAventura = new Boton(width/2 + width/4, height/2, 100, 50, "Inicar aventura", 2) //importante ultimo parametro

      this.botonIrAInicio = new Boton(width/4, height/4, 100, 50, "Ir a inicio", 0) //importante ultimo parametro

      this.volverAJugar = new Boton(width/4, height/4, 100, 50, "Volver a jugar", 4) //importante ultimo parametro

      this.botonIrAFinal2 = new Boton(width/4, height/4, 100, 50, "Ver el final", 9) //importante ultimo parametro


      this.juego = new Juego()
  }

  dibujar() {
    console.log(this.pantalla)
      if (this.pantalla == 0) {
      background(0)
        this.botonCreditos.dibujar()

        this.botonIniciarAventura.dibujar()
    } else if (this.pantalla == 1) {
      //PANTALLA DE CREDITOS
      background(55)
        this.botonVolver.dibujar()
    } else if (this.pantalla == 2) {
      //PANTALLA DE INICIO DE AVENTURA
      background(100)
        this.botonIrAInicio.dibujar()
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 3) {
      //2DA PANTALLA DE AVENTURA

      background(155)
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 4) {
      //JUEGO
      background(255, 0, 0)
        this.juego.dibujar()
    } else if (this.pantalla == 5) {
      background(0)
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 6) {
      background(20)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 7) {
      background(40)
        this.botonVolver.dibujar()
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 8) {
      background(0, 255, 0)
        this.botonVolver.dibujar()
        this.botonIrAInicio.dibujar()
    } else if (this.pantalla == 9) {
      background(0, 0, 255)
        this.botonIrAInicio.dibujar()
    }
  }


  mouseClicked() {

    //RESTRINGIMOS FUNCIONAMIENTO ACORDE A CADA PANTALLA
    if (this.pantalla == 0) {
      this.botonIniciarAventura.mouseClicked()
        this.botonCreditos.mouseClicked()
    } else  if (this.pantalla == 1) {
      this.botonVolver.mouseClicked()
    } else if (this.pantalla == 2) {
      this.botonIrAInicio.mouseClicked()
        this.botonSiguiente.mouseClicked()
    } else if (this.pantalla == 3) {
      this.botonSiguiente.mouseClicked()
    } else if (this.pantalla == 4 && this.juego.estado == "ganaste") {
      this.volverAJugar.mouseClicked()
        this.botonSiguiente.mouseClicked()
    } else if (this.pantalla == 4 && this.juego.estado == "perdiste") {
      this.volverAJugar.mouseClicked()
        this.botonIrAFinal2.mouseClicked()
    } else if (this.pantalla == 5) {
      this.botonSiguiente.mouseClicked()
    } else if (this.pantalla == 6) {

      this.botonVolver.mouseClicked()
        this.botonSiguiente.mouseClicked()
    } else if (this.pantalla == 7) {

      this.botonSiguiente.mouseClicked()
        this.botonVolver.mouseClicked()
    } else if (this.pantalla == 8) {
      //FINAL 1
      this.botonIrAInicio.mouseClicked()
        this.botonVolver.mouseClicked()
    } else if (this.pantalla == 9) {
      //FINAL 2
      this.botonIrAInicio.mouseClicked()
    }
  }

  cambiarPantalla(param) {
    this.juego.reiniciar()
      console.log(this.pantalla)
      console.log(param)

      if (param == "siguiente" && this.pantalla < this.cantidadDePantallas) {
      this.pantalla++
    } else if (param == "volver" && this.pantalla > 0) {
      this.pantalla--
    } else if (param != "volver" && param != "siguiente") {
      this.pantalla=param
    }
  }
}
