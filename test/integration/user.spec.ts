import * as lib from './../lib/lib';
import { TestConfig } from './../test-config';
import { expect } from 'chai';
import { IPosition } from '../../src/models/user';
import {fail} from "assert";

describe('User direction tests', () => {
    let server: any;

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            server
                .get('/get-position')
                .expect(200)
                .end((err: any, res: any) => {
                    if (err) {
                        return reject(err);
                    }

                    const pos: IPosition = res.body;

                    resolve(pos);
                });
        });
    };

    before(() => {
        const connectPromise = lib.connect({
            url: TestConfig.URL
        });

        connectPromise.then((serverInst) => {
            server = serverInst;
        });
    });

    beforeEach(() => {
        return lib.healthCheck(server);
    });

    it ('true true', () => {
        expect(true).to.equal(true, 'not true');
    });

    it ('should return the current position', (done) => {
        getPosition().then((pos: IPosition) => {
            expect(pos.x).to.be.a('number');
            expect(pos.y).to.be.a('number');

            done();
        });
    });

    it ('user should move up', (done) => {
        getPosition().then((initialPos: IPosition) => {
            server
                .get('/up')
                .expect(200)
                .end((err: any, res: any) => {
                    const newPos: IPosition = res.body;

                    expect(initialPos.x).equal(newPos.x);
                    expect(initialPos.y + 1).equal(newPos.y);

                    done();
                });
        });
    });


});
