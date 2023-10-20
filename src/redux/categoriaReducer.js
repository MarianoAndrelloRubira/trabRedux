import { createSlice } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';
const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaCategorias: []
    },
    reducers: {
        adicionar: (state, action) => {
            state.listaCategorias.push(action.payload);
        },
        remover: (state, action) => {
            state.listaCategorias = state.listaCategorias.filter(categoria => categoria.codCat !== action.payload.codCat);
        },
        atualizar: (state,action)=>{
            const listatemporariaCategorias = state.listaCategorias.filter(categoria => categoria.codCat !== action.payload.codCat);
            state.listaCategorias = [...listatemporariaCategorias,action.payload];
        },
    }
})
export const { adicionar, remover, atualizar } = categoriaSlice.actions;
export default categoriaSlice.reducer;