import 'phaser';
import { MainScene } from './scenes/MainScene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'game',
	scene: [MainScene],
	scale: {
		mode: Phaser.Scale.RESIZE, // This makes the game resize to match the window
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: window.innerWidth,
		height: window.innerHeight
	},
	render: {
		antialias: false,
		pixelArt: true,
		roundPixels: true,
		powerPreference: 'high-performance'
	},
	input: { keyboard: true },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 1850 },
			debug: false
		}
	}
};

// Initialize game
const game = new Phaser.Game(config);

// Optional: Listen for window resize and resize the game accordingly
window.addEventListener('resize', () => {
	game.scale.resize(window.innerWidth, window.innerHeight);
});
