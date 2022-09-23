const userBuild = require('../../../fixtures/auth.fixture');

describe("signin must", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('return success', async () => {
        const auth = userBuild();
        jest.doMock("../../../../src/repositories/auth.repository", () => ({
            getAuthByName: jest.fn(() => Promise.resolve(auth))
        }));

        const req = {
            body: {
                userName: 'castroleonardo@live.cl',
                pass: 'nissa1304'
            }
        };

        const signInModule = require('../../../../src/components/signin/signin.module');
        const response = await signInModule(req);

        expect(response.status).toBe("OK");
    });

    it('error when password is wrong', async () => {
        const auth = userBuild(pass = '123124124');
        jest.doMock("../../../../src/repositories/auth.repository", () => ({
            getAuthByName: jest.fn(() => Promise.resolve(auth))
        }));

        const req = {
            body: {
                userName: 'castroleonardo@live.cl',
                pass: '14125124124'
            }
        };

        const signInModule = require('../../../../src/components/signin/signin.module');
        try {
            const response = await signInModule(req);
        } catch(error) {
            expect(error.message).toBe('Pass incorrecta');
        };
    });

    it('error when user does not exist', async () => {
        jest.doMock("../../../../src/repositories/auth.repository", () => ({
            getAuthByName: jest.fn(() => Promise.resolve([]))
        }));

        const req = {
            body: {
                userName: 'castroleonardo@live.cl',
                pass: 'nissa1304'
            }
        };

        const signInModule = require('../../../../src/components/signin/signin.module');
        try {
            const response = await signInModule(req);
        } catch(error) {
            expect(error.message).toBe('Usuario no existe');
        };
    });
});