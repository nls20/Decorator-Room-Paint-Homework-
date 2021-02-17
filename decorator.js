const Decorator = function() {
    this.paintStock = [];
}

Decorator.prototype.numberOfPaints = function () {
    return this.paintStock.length;
}

Decorator.prototype.addPaint = function (paint) {
    this.paintStock.push(paint);
}

Decorator.prototype.calculateLitresInStock = function () {
    let totalLitres = this.numberOfPaints() * 20
    return totalLitres
}

Decorator.prototype.enoughPaint = function (room) {
    if (this.calculateLitresInStock() >= room.area) {
        room.painted = true
        return true
    } else {
        return false 
    }
    }

module.exports = Decorator;