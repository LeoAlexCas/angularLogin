export interface UserStateModel {
    userName: string,
    roleId: string,
    token?: string
};

export const defaultStateModel = {
    userName: '',
    roleId: '',
    token: ''
};