import { categoriesDrawer, CategoryProps } from '../../data/ItemsDrawer'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DrawerItemsState {
    items: CategoryProps[]
}

const initialState: DrawerItemsState = {
    items: categoriesDrawer
}

export const DrawerItemsSlice = createSlice({
    name: 'drawerItems',
    initialState,
    reducers: {
        setDrawerItems: (state, action: PayloadAction<CategoryProps[]>) => {
            state.items = [...action.payload]
        },
    },
})

// Action creators are generated for each case reducer function
export const { setDrawerItems } = DrawerItemsSlice.actions

export default DrawerItemsSlice.reducer