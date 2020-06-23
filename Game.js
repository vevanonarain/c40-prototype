class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
   }
   update(state){
       database.ref('/').update({
           gameState:state
       })
   }
  async start(){
       if(gameState === 0){
           runner= new Runner();
           var runnerCountRef = await database.ref('runnerCount').once("value");
           if(runnerCountRef.exists()){
              runnerCount = runnerCountRef.val();
              runner.getCount();
           }
           form= new Form();
           form.display();
       }
       hurdle = createSprite(3000,180,20,20);
       hurdle.addImage("hurdle", hurdleI); 
       hurdle.scale =0.5;
       hurdle1 = createSprite(3000,290,20,20);
       hurdle1.addImage("hurdle", hurdleI);
       hurdle1.scale =0.5;
       hurdle2 = createSprite(3000,400,20,20);
       hurdle2.addImage("hurdle", hurdleI);
       hurdle2.scale =0.5;
       hurdle3 = createSprite(3000,510,20,20);
       hurdle3.addImage("hurdle", hurdleI);
       hurdle3.scale =0.5;
       hurdle4 = createSprite(7000,180,20,20);
       hurdle4.addImage("hurdle", hurdleI); 
       hurdle4.scale =0.5;
       hurdle5 = createSprite(7000,290,20,20);
       hurdle5.addImage("hurdle", hurdleI); 
       hurdle5.scale =0.5;
       hurdle6 = createSprite(7000,400,20,20);
       hurdle6.addImage("hurdle", hurdleI); 
       hurdle6.scale =0.5;
       hurdle7 = createSprite(7000,510,20,20);
       hurdle7.addImage("hurdle", hurdleI); 
       hurdle7.scale =0.5;
    runner1 = createSprite(100,100);
    runner1.addImage("runner1", runner1I);
    runner1.scale = 0.5;
    runner2 = createSprite(100,300);
    runner2.addImage("runner2", runner2I);
    runner2.scale = 0.5;
    runner3 = createSprite(100,500);
    runner3.addImage("runner3", runner3I);
    runner3.scale = 0.5;
    runner4 = createSprite(100,700);
    runner4.addImage("runner4", runner4I);
    runner4.scale = 0.5;
    runners = [runner1, runner2, runner3, runner4];
   }
   play(){
    form.hide();
    Runner.getRunnerInfo();
    runner.getRunnersAtEnd();
    
    if(allRunners !== undefined){
      background("#c68767");
      image(track,800, 0, 10000, 700);
      var index = 0;
      
      score = runner.distance*-1
      textSize(20);
      textFont("Wide latin");
      stroke(0,255,0);
      text("score :" + score, camera.position.x + 80, 60);
      text("rank : " + runner.rank, camera.position.x - 500, 60);

      if(keyCode === 32){
        runner.velocityY = 5;
      }

      var x;
      var y = 1;

      for(var runer in allRunners){

        index = index + 1 ;

        y = y + 119;

        x = displayWidth - allRunners[runer].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;

        if (index === runner.index){
          stroke(15);
          fill("green")
          ellipse(x,y,70,70);
          runners[index - 1].shapeColor = "red";
          camera.position.x = runners[index-1].x
          camera.position.y = displayWidth/4;
        }
      }

    }

    if(keyIsDown(UP_ARROW) && runner.index !== null){
      runner.distance= runner.distance - 10;
      runner.update();
    }
    if(runner.distance === -9080){
      gameState = 2;
      runner.rank += 1;
      Runner.updateRunnersAtEnd(runner.rank);
    }

    drawSprites();
  }
  end(){
     console.log("Game Ended");
  }
}