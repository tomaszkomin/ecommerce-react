import { createSelector } from 'reselect';
import SHOP_DATA from './shop.data'
const INITIAL_STATE = {
    collections: SHOP_DATA
}
const selectShop = (state:any) => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    (shop) => (shop.collections)
)