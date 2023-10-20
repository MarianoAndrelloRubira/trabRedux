import { createSlice } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';
const produtoSlice = createSlice({
    name: 'produto',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaProdutos: []
    },
    reducers: {
        adicionar: (state, action) => {
            state.listaProdutos.push(action.payload);
        },
        remover: (state, action) => {
            state.listaProdutos = state.listaProdutos.filter(produto => produto.cod !== action.payload.cod);
        },
        atualizar: (state,action)=>{
            const listatemporariaProdutos = state.listaProdutos.filter(produto => produto.cod !== action.payload.cod);
            state.listaProdutos = [...listatemporariaProdutos,action.payload];
        },
    }
})
export const { adicionar, remover, atualizar } = produtoSlice.actions;
export default produtoSlice.reducer;