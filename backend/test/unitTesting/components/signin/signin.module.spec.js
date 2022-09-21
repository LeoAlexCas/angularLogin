describe("signin must", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('return success', async () => {
        jest.doMock("../../../../src/repositories/auth.repository", () => ({
            getAuthByName: jest.fn(() => Promise.resolve([{
                _id: 'asasfsad',
                userName: 'castroleonardo@live.cl',
                pass: '$2a$10$HhEiX6Xu84iOSvYTTxteIeE.oZBswnmZtxgoR0E0SKuFZXwgtGCMq',
                roleId: 'admin',
                userNumber: '13131',
                createdAt: '2022-08-24T03:07:36.617+00:00',
                updatedAt: '2022-08-24T03:07:36.617+00:00',
                __v: '0'
            }]))
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