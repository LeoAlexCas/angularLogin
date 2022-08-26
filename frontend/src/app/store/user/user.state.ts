import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { UserStateModel, defaultStateModel } from './user.model';
import { SetUserState } from './user.actions';

@State<UserStateModel>({
    name: 'User',
    defaults: defaultStateModel
})
@Injectable()
export class UserState {
    @Action(SetUserState)
    setUserState(
        ctx: StateContext<UserStateModel>, 
        action: SetUserState
        ) {
        ctx.patchState({
            ...action.data
        });
    };
};
