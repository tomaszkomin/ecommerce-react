import { createSelector } from 'reselect';
// import SHOP_DATA from './shop.data'

const selectShop = (state:any) => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    (shop) => (shop.collections)
)
export const selectCollection = (collectionUrlParam :number) => 
createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
)   
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map( key => collections[key])
)