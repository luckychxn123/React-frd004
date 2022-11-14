import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
    firstname: string,
    lastname: string,
    age: number,
    image: string,
    isLoggedInSlice: boolean
}

const userSlice = createSlice({
    name: "users",
    initialState: {
        firstname: '',
        lastname: '',
        age: 2,
        image: '',
        isLoggedInSlice: false
    } as UserType,
    reducers: {
        login(state: UserType, action: PayloadAction<any>) {
            state.isLoggedInSlice = true
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.age = action.payload.age
            state.image = action.payload.image
            state.isLoggedInSlice = action.payload.isLoggedInSlice
        },
        logout() {
            console.log('bye')
        }
    }
})
// can directly apply useDispatch
export const { login } = userSlice.actions
export default userSlice.reducer