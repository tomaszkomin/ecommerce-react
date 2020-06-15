import { createSelector } from 'reselect';
// import SHOP_DATA from './shop.data'

const COLLECTION_ID_MAP:any = {
    hats: 1,
    sneakers:2,
    jackets: 3,
    womens: 4,
    mens: 5
}
const selectShop = (state:any) => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    (shop) => (shop.collections)
)
export const selectCollection = (collectionUrlParam:number) => createSelector(
    [selectCollections],
    (collections) => collections.find( (collection: { id: any; }) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)