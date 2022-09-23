const { createMocks, createResponse, createRequest } = require('node-mocks-http');

describe('signin controller must', () => {
    let req;
    let res;
    const mockRequest = {
        body: {
            userName: 'castroleonardo@live.cl',
            pass: 'nissa1304'
        }
    };
    beforeEach(() => {
        req = createRequest(mockRequest);
        res = createResponse();
        jest.resetModules();
    });

    it('return status 200 when successful', async () => {
        const mockResponse = {
            status: 'OK',
            token: '123214213'
        };
        
        jest.doMock('../../../../src/components/signin/signin.module', () => {
            jest.fn(() => Promise.resolve(mockResponse));
        });

        const controller = require('../../../../src/components/signin/signin.controller');
        const response = await controller(req, res);
        console.log(response);
        const data = response._getdata();
        console.log(data);
        expect(data.status).toBe(200);
    });
});