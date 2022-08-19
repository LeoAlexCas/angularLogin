import { state } from '@angular/animations';
import { HttpClientXsrfModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, actionMatcher, State, StateContext } from '@ngxs/store';
import { UserStateModel, defaultStateModel } from './user.model';
import { setUserState } from './user.actions';

@State<UserStateModel>({
    name: 'User',
    defaults: defaultStateModel
})
@Injectable()
export class UserState {
    @Action(setUserState)
    setUserState(
        ctx: StateContext<UserStateModel>, 
        action: setUserState
        ) {
        ctx.patchState({
            ...action.data
        })
    }
}
