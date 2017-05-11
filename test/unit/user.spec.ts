import { User } from './../../src/models/user';
import { expect } from 'chai';

describe('User', () => {
    let user: User;

    before(() => {
        user = new User();
    });

    it ('should have a x property', () => {
        expect(user).to.have.property('x');
    });

    it ('should have a y property', () => {
        expect(user).to.have.property('y');
    });

    it ('should have a right method', () => {
        expect(user).to.have.property('right');
        expect(user.right).to.be.a('function');
    });

    it ('should increment x on right', () => {
        const x: number = user.x;

        user.right();

        expect(user.x).to.equal(x + 1);
    });

    it ('should have a left method', () => {
        expect(user).to.have.property('left');
        expect(user.left).to.be.a('function');
    });

    it ('should decrement x on left', () => {
        const x: number = user.x;

        user.left();

        expect(user.x).to.equal(x - 1);
    });
});
