import Phaser from 'phaser'
import GameOverScene from './scenes/GameOverScene'
import CoronaBusterScene from './scenes/CoronaBusterScene'

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
	
		}
	},
	scale : {
		mode: Phaser.Scale.FIT,
		autoCenter : Phaser.Scale.CENTER_BOTH
	},
	scene: [CoronaBusterScene, GameOverScene]
}

export default new Phaser.Game(config)
