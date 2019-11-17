const FPS = 30;
//Класс объединяющий объект рендерящий всё поле (viewer) и объект, который управляет всей логикой игры (core)
class Game {
	constructor() {
		this.core = new Core();
		this.viewer = new Viewer();
		this.process = null;
	}

	start() {
		this.core.start();
		startTimer();
	}

	startTimer() {
		this.process = setInterval(() => {
			this.core.step();
			viewer.view(this.core.condition);
			if (!this.core.isActive) {
				stop();
			}
		}, 1000 / FPS);
	}

	stop() {
		clearInterval(this.process);
		this.process = null;
		this.core.stop();
	}
}