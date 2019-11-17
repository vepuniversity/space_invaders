const FIELD_SIZE = {x: 600, y: 600};
const SIDE_INDENT = 50;
const START_LIVES = 3;
const START_CANNON_POSITION = {x: 300, y: 550}
const SHOT_PAUSE = 10000;
const Directions = {'up': 1, 'left': 2, 'down': 3, 'right': 4}
Object.freeze(Directions);

class GameCondition {
	constructor() {		
	}

	startInit() {
		this.aliens = [];
		this.alienDirection = Directions.left;
		this.lives = START_LIVES;
		this.points = 0;
		this.bullets = [];
		this.cannon = new Cannon(START_CANNON_POSITION);
		this.fieldSize = {x: 0, y: 0};
		this.isActive = false;
		//Время в миллисекундах последнего выстрела
		this.lastShot = 0;
	}

	//TODO: Здесь располагаем пришельцев
	newWave() {

	}
}