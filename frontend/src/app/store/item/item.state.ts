import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ItemStateModel, itemStateModelDefault } from './item.model';
import { SetItemState } from './item.actions';

@State<ItemStateModel>({
    name: 'Item',
    defaults: itemStateModelDefault
})
@Injectable()
export class ItemState {
    @Action(SetItemState)
    setItemState(
        ctx: StateContext<ItemStateModel>,
        action: SetItemState
    ) {
        ctx.patchState({
            ...action.data
        });
    };
};