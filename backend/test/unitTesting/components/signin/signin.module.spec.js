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
});