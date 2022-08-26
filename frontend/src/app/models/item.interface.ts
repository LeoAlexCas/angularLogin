export interface Item {
    _id: string,
    itemName: string,
    amount: number,
    description: string,
    owner: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: number
};

export interface ItemResponse extends Array<Item> {

}