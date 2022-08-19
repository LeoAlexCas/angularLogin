import { UserStateModel } from "./user.model";

export class SetUserState {
    constructor(public data: Partial<UserStateModel>) {}
    static readonly type = 'Set user data in state';
};