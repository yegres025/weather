import { createSlice } from '@reduxjs/toolkit';

const now = { temp: '0', name: 'City', icon: 'Loading' };
const details = {
  name: 'City',
  temp: '12°',
  feelLike: '14',
  weather: 'cloud',
  sunrice: '11:45',
  sunset: '19:59',
};
let list = []


export const infoNow = createSlice({
  name: 'now',
  initialState: {
    now,
  },
  reducers: {
    cityNow: (state, action) => (state = action.payload),
  },
});

export const infoDetails = createSlice({
  name: 'details',
  initialState: {
    details,
  },
  reducers: {
    cityDetails: (state, action) => (state = action.payload),
  },
});

export const citiesFavoritList = createSlice({
  name: 'favoritList',
  initialState: {
    list
  }, 
  reducers: {
    favoritList: (state, action) => ({...state, list: [...state.list, action.payload]}),
    deleteFavoritList: (state, action) => ({list:state.list.filter(item => item.name !== action.payload)})
  }
})

export const { cityNow } = infoNow.actions;
export const { cityDetails } = infoDetails.actions;
export const { favoritList, deleteFavoritList } = citiesFavoritList.actions;