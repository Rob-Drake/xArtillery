var xArtillery = xArtillery || {};

xArtillery.Boot = function() {};

xArtillery.Boot.prototype = {
    preload: function() {
        
    },
    create: function() {
        this.game.stage.backgroundColor = '#000';
        this.state.start('Game');
    }
};