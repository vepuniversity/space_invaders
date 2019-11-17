const BULLET_SIZE = {x: 10, y: 10};

class Bullet extends Element {
	constructor(position, direction) {
		super(position, CANNON_SIZE);
		this._direction = direction;
	}

	get direction() {
		return this._direction;
	}
}