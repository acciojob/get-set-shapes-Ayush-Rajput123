//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width
		this._height=height
	}
	getArea() {
		return (this._widht*this._height)
	}
	get width() {
		return this._width
	}
	get height() {
		return this._height
	}
}

class Square extends Rectangle {
	super()
	constructor(side){
		this._side=side
	}
	getPerimeter () {
		return (side*4)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
