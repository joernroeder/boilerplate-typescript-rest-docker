import { User } from './../../src/models/user';
import { expect } from 'chai';

describe('User', () => {
    let user: User;

    before(() => {
        user = new User();
    });

    it ('should accept x and y as starting point', () => {
        const usr: User = new User(10, 20);

        expect(usr.x).to.equal(10);
        expect(usr.y).to.equal(20);
    });

    it ('should fall back to x:0 and y:0 without a starting point', () => {
        const usr: User = new User();

        expect(usr.x).to.equal(0);
        expect(usr.y).to.equal(0);
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

    it ('should have a up method', () => {
       expect(user).to.have.property('up');
       expect(user.up).to.be.a('function');
    });

    it ('should increment y on up', () => {
        const y: number = user.y;

        user.up();

        expect(user.y).to.equal(y + 1);
    });

    it ('should have a down method', () => {
        expect(user).to.have.property('down');
        expect(user.down).to.be.a('function');
    });

    it ('should decrement y on down', () => {
        const y: number  = user.y;

        user.down();

        expect(user.y).to.equal(y - 1);
    });

    it ('should have a getPosition method', () => {
        expect(user).to.have.property('getPosition');
        expect(user.getPosition).to.be.a('function');
    });

    it ('should return x and y as position type', () => {
        const usr: User = new User(15, 30);

        expect(usr.getPosition()).to.deep.equal({
            x: 15,
            y: 30
        });
    });

    it ('should have a setPosition method', () => {
        expect(user).to.have.property('setPosition');
        expect(user.setPosition).to.be.a('function');
    });

    it ('should update x and y accordingly', () => {
        const pos = { x: 10, y: 20 };

        user.setPosition(pos);

        expect(user.getPosition()).to.deep.equal(pos);
    });
});
