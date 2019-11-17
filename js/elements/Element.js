class Element {
	constructor(position, size) {
		this._position = position;
		this._size = size;
	}

	get position() {
		return Object.assign({}, this._position);
	}

	get size() {
		return Object.assign({}, this._size);
	}

	move(dx, dy) {
		this._position.x += dx;
		this._position.y += dy;
	}
}