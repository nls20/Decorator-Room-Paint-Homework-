const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator();
        paint1 = new Paint(20)
        room1 = new Room(10)
    })

    it('should have an empty paint stock', function () {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, []);
    })

    it('should be able to return the number in paint stock', function () {
        const actual = decorator.numberOfPaints();
        assert.strictEqual(actual, 0);
    })

    it('should be able to add a can to paint stock', function () {
        decorator.addPaint('Dulux');
        const actual = decorator.numberOfPaints();
        assert.strictEqual(actual, 1);
    })

    it('should calculate total litres paint in stock', function () {
        decorator.addPaint(paint1);
        const actual = decorator.calculateLitresInStock();
        assert.strictEqual(actual, 20);
    })

    it('should have enough to paint room', function () {
        decorator.addPaint(paint1);
        const actual = decorator.enoughPaint(room1);
        assert.strictEqual(actual, true)
    })

    it('can room be painted', function () {
        decorator.addPaint(paint1);
        decorator.enoughPaint(room1);
        const actual = room1.painted
        assert.strictEqual(actual, true)
    })
})



// A decorator should:

// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock