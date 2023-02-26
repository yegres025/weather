import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { infoNow, infoDetails, citiesFavoritList } from '../reduxTollKitSlice/reduxTollkitSlice';

const rootReducer = combineReducers({
  now: infoNow.reducer,
  details: infoDetails.reducer,
  favorit: citiesFavoritList.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
