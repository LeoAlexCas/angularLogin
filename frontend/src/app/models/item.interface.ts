export interface Item {
    _id: String,
    itemName: String,
    amount: Number,
    description: String,
    createdAt: String,
    updatedAt: String,
    _v?: Number
};

export interface ItemResponse extends Array<Item> {

}