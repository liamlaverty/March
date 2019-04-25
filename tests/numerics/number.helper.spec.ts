import { Between, Lerp } from "../../src/numerics/helpers/number.helper";
import { expect } from "chai";
describe('Number Helper', () => {

    beforeEach(() => {

    });

    describe('Between', () => {
        it('should say that 2 is between 1 and 3', () => {
            const result = Between(2, 1, 3);
            expect(result).to.be.true;
        });
        it('should say that 4 is not between 1 and 3', () => {
            const result = Between(4, 1, 3);
            expect(result).to.be.false;
        });
    });

    describe('Lerp', () => {
        it('should return 4 as 50% of the distance between 3 and 5', () => {
            const result = Lerp(3, 5, 0.5);
            expect(result).to.equal(4);
        })

        it('should return 5 as 50% of the distance between 0 and 10', () => {
            const result = Lerp(0, 10, 0.5);
            expect(result).to.equal(5);
        })
    });
});