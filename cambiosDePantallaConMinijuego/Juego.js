class Juego {
  constructor() {
    this.estado = "inicio"
      this.tiempo = 200
  }
   reiniciar(){
      this.estado = "inicio"
      this.tiempo = 200
   }
  dibujar() {
    if (this.estado == "inicio") {
      if (mouseIsPressed) {
        this.estado = "jugar"
      }
    } else   if (  this.estado == "jugar") {
      this.tiempo--

        if (this.tiempo < 0) {
        this.tiempo = 500
          this.estado = "perdiste"
      }
        text(this.tiempo,20,20)
      if (mouseY < 20) {
        this.estado = "ganaste"
      }


      rect(mouseX, mouseY, 50, 50)
    } else   if (  this.estado == "ganaste") {
      app.volverAJugar.dibujar()
      app.botonSiguiente.dibujar()
    } else   if (this.estado == "perdiste") {
      app.volverAJugar.dibujar()
       app.botonIrAFinal2.dibujar()
    }
  }
}
