export interface ItemStateModel {
    _id?: string,
    itemName: string,
    amount: number,
    description: string,
    owner: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: number
};

export const itemStateModelDefault = {
    _id:'',
    itemName: '',
    amount: 0,
    description: '',
    owner: '',
    createdAt: '',
    updatedAt: '',
    _v: 0
};