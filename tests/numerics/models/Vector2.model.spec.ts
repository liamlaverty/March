import { Vector2 } from "../../../src/numerics/models/Vector2.model";
import { expect } from "chai";

describe('Vector2 Model', () => {
    var vec: Vector2;
    beforeEach(() => {
        vec = new Vector2(51, 12);
    });

    describe('constructor', () => {
        it('should create a new Vector with the given values (left check)', () => {
            const result = new Vector2(100, 124);
            expect(result.x).to.equal(100);
        })
    });

    describe('constructor', () => {
        it('should create a new Vector with the given values (right check)', () => {
            const result = new Vector2(100, 124);
            expect(result.y).to.equal(124);
        })
    });

    describe('GetValueX', () => {
        it('should get the left (x) value from the Vector2', () => {
            const result = vec.getValueX();
            expect(result).to.equal(51);
        })
    })
    describe('GetValueY', () => {
        it('should get the right (y) value from the Vector2', () => {
            const result = vec.getValueY();
            expect(result).to.equal(12);
        })
    })

    describe('SetValueX', () => {
        it('should set the left (x) value on the Vector2', () => {
            const targetValue = 66;
            vec.setValueX(targetValue);
            expect(vec.x).to.equal(targetValue);
        })
    })

    describe('SetValueX', () => {
        it('should set the right (y) value on the Vector2', () => {
            const targetValue = 82;
            vec.setValueY(targetValue);
            expect(vec.y).to.equal(targetValue);
        })
    })

    describe('SetValues', () => {
        it('should set the both the left (x) and right (y) value on the Vector2 (left side check)', () => {
            const targetValueLeft = 22582;
            const targetValueRight = 3215;

            const targetVector = new Vector2(22582, 3215);

            vec.setValues(targetValueLeft, targetValueRight);
            expect(vec.x).to.equal(targetVector.x);
        })
    })

    describe('SetValues', () => {
        it('should set the both the left (x) and right (y) value on the Vector2 (right side check)', () => {
            const targetValueLeft = 22582;
            const targetValueRight = 3215;

            const targetVector = new Vector2(22582, 3215);

            vec.setValues(targetValueLeft, targetValueRight);
            expect(vec.y).to.equal(targetVector.y);
        })
    })
})