'use strict';

require('@tensorflow/tfjs-node-gpu');
const mobilenet = require('@tensorflow-models/mobilenet');
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(1200, 1200);
const ctx = canvas.getContext('2d');

class Main {
	constructor() {
		loadImage('test-images/ss3.jpg').then((image) => {
			ctx.drawImage(image, 0, 0, 1200, 1200);
		});
		async function run() {
			const model = await mobilenet.load();
			const predictions = await model.classify(canvas);
			console.log('Predictions: ');
			console.log(predictions);
		}
		run();
	}
}

new Main();
