import { Selector } from "@ngxs/store";
import { UserState } from "./user.state";
import { UserStateModel } from "./user.model";

export class UserStateSelectors {
    @Selector([UserState]) static SelectUserState(state: UserStateModel): UserStateModel {
        return state;
    };
};