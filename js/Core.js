//Класс делает атомарное действие с игрой по вызову метода step, без вызова ничего не произойдёт
class Core {
	constructor() {
		this.gameCondition = new GameCondition();
	}

	get condition() {
		//TODO: Было бы хорошо это копировать
		return condition;
	}


	start() {
		this.gameCondition.startInit();
		this.gameCondition.newWave();
		this.gameCondition.isActive = true;
	}

	isActive() {
		return this.gameCondition.isActive;
	}

	stop() {
		this.gameCondition.isActive = false;
	}

	//Делаем один шаг (сдвигаем пришельцев, пушку, проверяем на коллизии)
	step() {
		if (!this.gameCondition.isActive) {
			return;
		}

		moveAliens();
		moveCannon();
		moveBullets();

		interactWithCannon();
		interactWithAliens();

		shootCannon();
		shootAlien();
	}

	//TODO: Двигаем пришельцев, в gameCondition есть их направление движения, доходим до края -> меняем направление, двигаем вниз
	moveAliens() {

	}
	
	//TODO: Сдвигаем пушку влево или вправо в зависимости от нажатой кнопки (рассмотреть вариант если нажато в оба направления)
	//Не забыть обрабатывать края (чтобы не уехала куда нибудь)
	moveCannon() {

	}

	//TODO: Двигаем пули в зависимости от направления (Directions.). Доходим до края карты, удаляем (removeBullets([bullet]))
	moveBullets() {

	}

	//TODO: Если нажата нужная клавиша, то создаём снаряд и направляем в сторону пришельцев
	shootCannon() {

	}

	//TODO: Если подошёл таймер, то стреляем из случайного пришельца
	shootAlien() {

	}

	//TODO: Нужно придумать нормальное название, тут я имею ввиду, что мы проверяем на взаиимодействие с пулями
	interactWithCannon() {
		let bullets = getBulletsIntersectsWith(this.gameCondition.cannon);
		if (bullets.length !== 0) {
			this.gameCondition.lives -= bullets.length;
			removeBullets(bullets);
			if (this.gameCondition.lives === 0) {
				stop();
				return;
			}
		}
	}

	//TODO: Нужно придумать нормальное название, тут я имею ввиду, что мы проверяем на взаиимодействие с пулями
	interactWithAliens() {
		this.gameCondition.forEach((alien) => {
			let bullets = getBulletsIntersectsWith(alien);
			if (bullets.length !== 0) {
				this.gameCondition.aliens.
				removeBullets(bullets[0]);
			}
		});
	}

	//TODO: Проверяем на коллизию (у элемента есть позиция и размер)
	getBulletsIntersectsWith(element) {

	}

	removeBullets(bullets) {
		bullets.forEach((bullet) => {
			let index = this.gameCondition.bullets.indexOf(bullet);
			this.gameCondition.bullets.splice(index, 1);
		})
	}

	removeAlien(alien) {
		let index = this.gameCondition.aliens.indexOf(alien);
		this.gameCondition.aliens.splice(index, 1);
	}




	

	


}