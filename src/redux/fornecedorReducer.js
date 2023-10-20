import { createSlice } from '@reduxjs/toolkit';
import ESTADO from '../recursos/estado';
const fornecedorSlice = createSlice({
    name: 'fornecedor',
    initialState: {
        status: ESTADO.OCIOSO,
        mensagem: '',
        listaFornecedor: []
    },
    reducers: {
        adicionar: (state, action) => {
            state.listaFornecedor.push(action.payload);
        },
        remover: (state, action) => {
            state.listaFornecedor = state.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
        },
        atualizar: (state,action)=>{
            const listatemporariaFornecedores = state.listaFornecedor.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
            state.listaFornecedor = [...listatemporariaFornecedores,action.payload];
        },
    }
})
export const { adicionar, remover, atualizar } = fornecedorSlice.actions;

export default fornecedorSlice.reducer;