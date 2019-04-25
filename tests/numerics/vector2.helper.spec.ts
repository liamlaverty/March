import { Vector2 } from "../../src/numerics/models/Vector2.model";
import { Vector2Helpers } from "../../src/numerics/helpers/vector2.helper";
import { expect } from "chai";

describe('Vector2 Helper', () => {
    var vecA: Vector2;
    var vecB: Vector2;
    beforeEach(() => {
        vecA = new Vector2(1, 15);
        vecB = new Vector2(16, 100);
    });

    describe('Add', () => {
        var addResult: Vector2;
        beforeEach(() => {
            addResult = Vector2Helpers.Add(vecA, vecB);
        });
        it('should add the left hand side of (x) each vector together and produce 17', () => {
            expect(addResult.x).to.equal(17);
        });
        it('should add the right hand side (y) of each vector together and produce 115', () => {
            expect(addResult.y).to.equal(115);
        });
    });

    describe('CompareEquality', () => {
        beforeEach(() => {
        });
        it('Should say that the two non-identical Vector2s equality is false', () => {            
            const result = Vector2Helpers.CompareEquality(vecA, vecB);
            expect(result).to.be.false;
        });
        it('Should say that the two identical Vector2s equality is true', () => {
            const result = Vector2Helpers.CompareEquality(vecA, vecA);
            expect(result).to.be.true;
        });

        it('Should say that the two vectors with different right (y) values equality is false', () => {
            const similarVecA = new Vector2(15, 89)
            const similarVecB = new Vector2(15, 16)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });

        it('Should say that the two vectors with different left (x) values equality is false', () => {
            const similarVecA = new Vector2(22, 88)
            const similarVecB = new Vector2(15, 88)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });

        it('Should say that the two vectors with opposite right and left values equality is false', () => {
            const similarVecA = new Vector2(88, 15)
            const similarVecB = new Vector2(15, 88)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });

        it('Should say that the two vectors with opposite left and right (reversed) values equality is false', () => {
            const similarVecA = new Vector2(15, 88)
            const similarVecB = new Vector2(88, 15)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });
        

        it('Should say that the two vectors with 3 identical numbers and 1 different numbers equality is false (0 rotation)', () => {
            const similarVecA = new Vector2(15, 15)
            const similarVecB = new Vector2(88, 15)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });

        it('Should say that the two vectors with 3 identical numbers and 1 different numbers equality is false (1 rotation)', () => {
            const similarVecA = new Vector2(88, 15)
            const similarVecB = new Vector2(15, 15)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });

        it('Should say that the two vectors with 3 identical numbers and 1 different numbers equality is false (2 rotation)', () => {
            const similarVecA = new Vector2(15, 88)
            const similarVecB = new Vector2(15, 15)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });
        it('Should say that the two vectors with 3 identical numbers and 1 different numbers equality is false (4 rotation)', () => {
            const similarVecA = new Vector2(15, 15)
            const similarVecB = new Vector2(15, 88)
            const result = Vector2Helpers.CompareEquality(similarVecA, similarVecB);
            expect(result).to.be.false;
        });
        
    });

    describe('Divide', () => {
        it('should divide the values in the left (x) hand side of each vector2', () => {
            const result = Vector2Helpers.Divide(vecA, vecB);
            expect(result.x).to.equal(0.0625);
        });
        it('should divide the values in the right (y) hand side of each vector2', () => {
            const result = Vector2Helpers.Divide(vecA, vecB);
            expect(result.y).to.equal(0.15);
        });
    });

    describe('DivideByScale', () => {
        it('should divide the value in the left(x) hand side of the given vector by the given scale (3.0)', () => {
            const result = Vector2Helpers.DivideByScale(vecA, 3.0);
            expect(result.x).to.be.approximately(0.3333, 0.0005);
        })
        it('should divide the value in the right(y) hand side of the given vector by the given scale (3.0)', () => {
            const result = Vector2Helpers.DivideByScale(vecA, 3.0);
            expect(result.y).to.equal(5);
        })
    })

})