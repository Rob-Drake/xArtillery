var xArtillery = xArtillery || {};

xArtillery.game = new Phaser.Game(512, 512, Phaser.AUTO, 'gameDiv');

xArtillery.game.state.add('Boot', xArtillery.Boot);
xArtillery.game.state.add('Preload', xArtillery.Preload);
xArtillery.game.state.add('Game', xArtillery.Game);

xArtillery.game.state.start('Boot');