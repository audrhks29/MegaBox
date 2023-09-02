import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    popupState: { popupIndex: null, state: false }
}
export const stateSlice = createSlice({
    name: 'status',
    initialState: initialState,
    reducers: {
        isPopupOpen(state, action) {
            state.popupState.state = true;
            state.popupState.popupIndex = action.payload;
        },
        isPopupClose(state, action) {
            state.popupState.state = false;
            state.popupState.popupIndex = null;
        }
    },
})

export const { isPopupOpen, isPopupClose } = stateSlice.actions
export default stateSlice.reducer