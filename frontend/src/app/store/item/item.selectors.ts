import { Selector } from "@ngxs/store";
import { ItemState } from "./item.state";
import { ItemStateModel } from "./item.model";

export class ItemStateSelectors {
    @Selector([ItemState]) static SelectItemState(state: ItemStateModel): ItemStateModel {
        return state;
    };
};