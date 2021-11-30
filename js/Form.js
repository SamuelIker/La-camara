class Form {
  constructor() {
    this.input = createInput('Name');
    this.button = createButton('Jugar');
    this.greeting = createElement('h2');

  }

  hide() {

    this.greeting.hide();
    this.input.hide();
    this.button.hide();

  }

  display(){

    //crear la portada
    var title = createElement('h2')
    title.html("Juego de Carreras de Autos");
    title.position(70, 0);
  
    

    this.input.position(130, 160);
    this.button.position(250, 200);

    //funcion para dar click sobre el boton
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      //captura/guarda el nombre
      player.name = this.input.value();
      
      //cuenta a los jugadores
      playerCount+=1;
      player.index = playerCount;

      //actualiza la base de datos
      player.update();

      //actualiza en la base de datos el numero del jugador
      player.updateCount(playerCount);
      
      //saluda a el jugador
      this.greeting.html("Hola " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
