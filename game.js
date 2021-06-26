class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
           form = new Form()
           form.display();
        }
        player1 = createSprite(700, 444);//618
        player1.addAnimation("greenR", greenRImg);
        player2 = createSprite(550, 460);
        player2.addAnimation("green", greenLImg);
        // player2.scale = 0.3;
    }  

    play(){
        form.hides();

        Player.getPlayerInfo();
        player.getRank();

        if(allPlayers !== undefined){
            background(bg2);
            
            rightA = createSprite(1000 ,200);
            rightA.addImage(rightArrow);
            rightA.scale = 0.8;
            rightA.visible = true;

            leftA = createSprite(263 ,200);
            leftA.addImage(leftArrow);
            leftA.scale = 0.8;
            leftA.visible = true;
            // player1.x = 618;
            // player1.y = 314;
        }
        if(keyDown(LEFT_ARROW)){   
          rightA.visible = false;
          leftA.visible = false;  
          player1.addAnimation("p1", pic1LAni);
          player2.addAnimation("p2", punch2LAni)
          // player1.addImage(pic1L);
          // player2.addImage(punch2L);
          console.log("left");
          player.update();
      }

        if(keyDown(RIGHT_ARROW)){
          rightA.visible = false;
          leftA.visible = false;
          player1.addAnimation("p1", pic1RAni);
          player2.addAnimation("p2", punch2RAni)
          // player1.addImage(pic1R);
          // player2.addImage(punch2R);
          console.log("right");
          player.update();
      }
      
      // if(player1.isTouching(OdragonR)){
      //   OdragonR.destroy();
      // }

      // if(player1.isTouching(OdragonL)){
      //   OdragonL.destroy();
      //   console.log(touching)
      // }

      // if(player1.isTouching(greenL)){
      //   greenL.destroy();
      // }

      // if(player1.isTouching(greenR)){
      //   greenR.destroy();
      // }

      //  if(player1.isTouching(OdragonR) || player1.isTouching(OdragonL)){
      //       OdradonR.destroy();
      //       OdragonL.destroy();
      //       greenL.destroy();
      //       greenR.destroy();
      //       gameState = 2;
            // player.rank+= 1;
            // Player.updateRank(player.rank);
      //     }

        if(frameCount%60 == 0){
           OdragonR = createSprite(1270, 444);
           OdragonR.velocityX = -10;
           OdragonR.addImage(ODragonL);
           OdragonR.scale = 0.7;
        }

        if(frameCount%100==0){
           OdragonL = createSprite(0, 440);
           OdragonL.velocityX = 10;
           OdragonL.addImage(ODragonR);
           OdragonL.scale = 0.7;
        }
        
        if(frameCount%150 === 0){
          greenR = createSprite(0, 460);
          greenR.velocityX = 15;
          greenR.addAnimation("img",greenRImg);
          greenR.scale = 0.9;
        }

        if(frameCount%200 === 0){
          greenL = createSprite(1270, 460);
          greenL.velocityX = -15;
          greenL.addAnimation("img",greenLImg);
          greenL.scale = 0.9;
        }

        drawSprites();
    }
  
    end(){
      console.log("Game Over")
    }
  }