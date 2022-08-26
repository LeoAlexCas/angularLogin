export interface ItemStateModel {
    _id?: string,
    itemName: string,
    amount: number,
    description: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: number
};

export const itemStateModelDefault = {
    _id:'',
    itemName: '',
    amount: 0,
    description: '',
    createdAt: '',
    updatedAt: '',
    _v: 0
};