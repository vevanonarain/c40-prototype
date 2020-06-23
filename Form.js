class Form {
    constructor() {
      this.input=createInput("Name");
      this.button=createButton('Submit and Play');
      this.greeting=createElement('h2');
      this.reset = createButton('reset(for gameState and runnerCount')
    }
  
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("HURDLE RACE");
      title.position(130, 0);
      
      this.input.position(displayWidth/2-10,displayHeight/2-80);
      this.button.position(displayWidth/2+60,displayHeight/2);
      this.reset.position(900, 100);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        runner.name = this.input.value();
        runnerCount+=1;
        runner.index=runnerCount;
        
        runner.update();
        runner.updateCount(runnerCount);

        this.greeting.html("Hello " + runner.name + " Welcome to the hurdle race. Please wait for the other players to join" );
        this.greeting.position(40,40);
      });
      this.reset.mousePressed(()=>{
        runner.updateCount(0);
        game.update(0);
      })
  
    }
  }
  