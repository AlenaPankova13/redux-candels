import { createSlice } from '@reduxjs/toolkit'

export const candelSlice = createSlice({
    name: 'candels',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const { filterCategory } = candelSlice.actions;
export const getSelectedCategory = state => state.candels.selectedCategory;
export default candelSlice.reducer

