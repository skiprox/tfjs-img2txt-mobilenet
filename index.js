'use strict';

require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(1200, 1200);
const ctx = canvas.getContext('2d');

class Main {
	constructor() {
		loadImage('test-images/out3.jpg').then((image) => {
			ctx.drawImage(image, 0, 0, 1200, 1200);
			console.log('what the fuck');
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
