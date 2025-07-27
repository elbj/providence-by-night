import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PersonnageState {
  nom: string
  clan: string
  titre: string
}

const initialState: PersonnageState = {
  nom: '',
  clan: '',
  titre: '',
}

const personnageSlice = createSlice({
  name: 'personnage',
  initialState,
  reducers: {
    setPersonnage: (state, action: PayloadAction<PersonnageState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setPersonnage } = personnageSlice.actions
export default personnageSlice.reducer
