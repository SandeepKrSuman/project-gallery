var game;

var gameOptions = {
    scorePanelHeight: 0.08,
    launchPanelHeight: 0.18,
    ballSize: 0.04,
    ballSpeed: 1000,
    blocksPerLine: 7,
    maxBlocksPerLine: 4,
};

window.onload = function() {
    game = new Phaser.Game(640, 960, Phaser.AUTO);
    game.state.add("PlayGame", playGame, true);
}

var playGame = function(){}

playGame.prototype = {
 preload: function() {
    game.load.image("block", "assets/glass.png");
    game.load.image("ball", "assets/enderPearl.png");
    game.load.image("panelTop", "assets/panelTop.png");
    game.load.image("panelBottom", "assets/panelBottom.png");
    game.load.image("trajectory", "assets/trajectory.png");
 },

 create: function() {
     game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
     game.scale.pageAlignHorizontally = true;
     game.scale.pageAlignVertically = true;
     game.stage.backgroundColor = 0x01681;

     game.physics.startSystem(Phaser.Physics.ARCADE);

     this.scorePanel = game.add.sprite(0, 0, "panelTop");
     this.scorePanel.width = game.width;
     this.scorePanel.height = Math.round(game.height * gameOptions.scorePanelHeight);
     game.physics.enable(this.scorePanel, Phaser.Physics.ARCADE);
     this.scorePanel.body.immovable = true;  

     this.launchPanel = game.add.sprite(0, game.height, "panelBottom");
     this.launchPanel.width = game.width;
     this.launchPanel.height = Math.round(game.height * gameOptions.launchPanelHeight);
     this.launchPanel.anchor.set(0, 1);
     game.physics.enable(this.launchPanel, Phaser.Physics.ARCADE);
     this.launchPanel.body.immovable = true;    

     var ballSize = game.width * gameOptions.ballSize;
     this.ball = game.add.sprite(game.width/2, game.height - this.launchPanel.height - ballSize/2, "ball");
     this.width = ballSize;
     this.height = ballSize;
     this.ball.anchor.set(0.5);
     game.physics.enable(this.ball, Phaser.Physics.ARCADE);

     this.ball.body.collideWorldBounds = true;
     this.ball.body.bounce.set(1);

     this.trajectory = game.add.sprite(this.ball.x, this.ball.y, "trajectory");
     this.trajectory.anchor.set(0.5, 1);
     this.trajectory.visible = false;

     game.input.onDown.add(this.aimBall, this);
     game.input.onUp.add(this.shootBall, this);
     game.input.addMoveCallback(this.adjustBall, this);

     this.aiming = false;
     this.shooting = false;

     this.blockGroup = game.add.group();
     this.placeLine();
 },

 placeLine: function(){
     var blockSize = game.width / gameOptions.blocksPerLine;
     var placedBlocks = [];

     for(var i = 0; i < gameOptions.maxBlocksPerLine; i++){
        var blockPosition = game.rnd.between(0, gameOptions.blocksPerLine - 1);
        if(placedBlocks.indexOf(blockPosition) == -1){
            placedBlocks.push(blockPosition);
            var block = game.add.sprite(blockPosition * blockSize + blockSize/2, blockSize/2 + game.height * gameOptions.scorePanelHeight, "block");
            block.width = blockSize;
            block.height = blockSize;
            block.anchor.set(0.5);
            game.physics.enable(block, Phaser.Physics.ARCADE);
            block.body.immovable = true;
            block.row = 1;
            this.blockGroup.add(block);
        }
    }
 },

 aimBall: function (e){
     if(!this.shooting){
         this.aiming = true;
     }
 },

 adjustBall: function (e){
     if(this.aiming){
         var distY = e.position.y - e.positionDown.y;
    
         if(distY > 10){
             this.trajectory.position.set(this.ball.x, this.ball.y);
             this.trajectory.visible = true;
             this.direction = Phaser.Math.angleBetween(e.position.x, e.position.y, e.positionDown.x, e.positionDown.y);
             this.trajectory.angle = Phaser.Math.radToDeg(this.direction) + 90;
        }else{
            this.trajectory.visible = false;
        }
     
    }
},

shootBall: function() {
    if(this.trajectory.visible){
        var angleOfFire = Phaser.Math.degToRad(this.trajectory.angle - 90);
        this.ball.body.velocity.set(gameOptions.ballSpeed * Math.cos(angleOfFire), gameOptions.ballSpeed  * Math.sin(angleOfFire));
        this.shooting = true;
    }
    this.aiming = false;
    this.trajectory.visible = false;
},

 update: function () {
     if(this.shooting){
         game.physics.arcade.collide(this.ball, this.scorePanel);
         game.physics.arcade.collide(this.ball, this.blockGroup, function (ball, block){
             block.destroy();
         }, null, this);

         game.physics.arcade.collide(this.ball, this.launchPanel, function(){
             this.ball.body.velocity.set(0);
             var scrollTween = game.add.tween(this.blockGroup).to({
                 y: this.blockGroup.y + game.width  / gameOptions.blocksPerLine
             }, 200, Phaser.Easing.Linear.None, true);
             scrollTween.onComplete.add(function(){
                 this.shooting = false;
                 this.blockGroup.y = 0;
                 this.blockGroup.forEach(function(block){
                     block.y += game.width/ gameOptions.blocksPerLine;
                     block.row++;
                     if(block.row == gameOptions.blocksPerLine){
                        console.log("Game Over");
                        window.alert("Game Over, restart game!");
                        game.state.start("PlayGame");
                     }
                 }, this);
                 this.placeLine();
             },this)
         }, null, this)
     }
 },
}