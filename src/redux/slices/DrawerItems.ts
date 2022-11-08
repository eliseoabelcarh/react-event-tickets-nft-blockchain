import { categoriesDrawer, CategoryProps } from '../../data/ItemsDrawer'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DrawerItemsState {
    items: CategoryProps[]
    itemActive:{
        categoryId: string,
        childId: string
    }
}

const initialState: DrawerItemsState = {
    items: categoriesDrawer,
    itemActive: {
        categoryId: "",
        childId:""
    },
}

export const DrawerItemsSlice = createSlice({
    name: 'drawerItems',
    initialState,
    reducers: {
        setDrawerItems: (state, action: PayloadAction<CategoryProps[]>) => {
            state.items = [...action.payload]
        },
        setItemActive: (state, action: PayloadAction<{categoryId: string, childId: string}>) => {
            state.itemActive = {...action.payload}
        }

    },
})

// Action creators are generated for each case reducer function
export const { setDrawerItems, setItemActive } = DrawerItemsSlice.actions

export default DrawerItemsSlice.reducer