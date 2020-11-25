var TTTGame = (function(){

    var ANGLE = 26.55;
    var TILE_WIDTH = 68;

    function TTTGame(phaserGame) {
        this.game = phaserGame;

        this.arrTiles = [];
        this.numberOfIterations = 0;
    }

    TTTGame.prototype.generateRoad = function(){
          // sprite (x, y and key defined above)
          var sprite = new Phaser.Sprite(this.game, 0, 0, 'tile_road_1');
          this.game.world.addChildAt(sprite, 0);
          sprite.anchor.setTo(0.5, 0.5); //set anchor to middle
          sprite.x = this.game.world.centerX; 
          sprite.y = this.game.world.centerY;
          this.arrTiles.push(sprite);
  
    };

    TTTGame.prototype.moveTiles = function(){
        var i = this.arrTiles.length -1;
        while (i >= 0) {
            var sprite = this.arrTiles[i];
            sprite.x -= Math.cos ( ANGLE * Math.PI / 180 );
            sprite.y += Math.sin( ANGLE * Math.PI / 180 );
            i--;
        }
    };

    TTTGame.prototype.init = function() {
        this.game.stage.backgroundColor = '#9bd3e1';
        this.game.add.plugin(Phaser.Plugin.Debug);

    };

    TTTGame.prototype.preload = function() {
        // this.game.load phaser loader for preloading assets key
        this.game.load.image('tile_road_1','/static/img/assets/tile_road_1.png');

    };

    TTTGame.prototype.create = function() {
        this.generateRoad();
    
    };

    TTTGame.prototype.update = function() {

        this.numberOfIterations++;
        if (this.numberOfIterations > TILE_WIDTH){
            this.numberOfIterations = 0;
            this.generateRoad();
        }

        this.moveTiles();

    };

    return TTTGame;

})();