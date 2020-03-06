import { createSelector } from 'reselect';

const Collection_ID_MAP = {
  Mens: 1,
  New: 2,
  New: 3,
  Womens: 4
};


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
    collections.find(
      collection => collection.id === Collection_ID_MAP[collectionUrlParam]
    )
  );
