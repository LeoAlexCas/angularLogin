import { ItemStateModel } from "./item.model";

export class SetItemState {
    constructor(public data: Partial<ItemStateModel>) {}
    static readonly type = "Crea un item especifico en el state";
};