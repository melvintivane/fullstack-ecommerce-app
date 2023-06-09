import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        quantidade: 0,
    },
    reducers: {
        adicionarAoCart: (state, action) => {
            const novoItem = action.payload;
            // Verificar se o item já está no carrinho
            const itemExistente = state.products.find(item => item._id === novoItem._id);

            if (itemExistente) {
                // Se o item já estiver no carrinho, aumentar a quantidade
                itemExistente.quantity += novoItem.quantity;
                
                if (state.quantidade === 0) {a
                    state.quantidade += 1;
                }
            } else {
                // Caso contrário, adicionar o novo item ao carrinho
                state.products.push(novoItem);

                if (state.quantidade >= 0) {
                    state.quantidade += 1;
                } 
            }
            // Atualizar a quantidade e o preço total
            state.quantity += novoItem.quantity;
            state.total += novoItem.price * novoItem.quantity;
            state.quantidade = state.quantidade;
        },
        removerItem: (state, action) => {
            const itemRemovido = state.products.find(item => item._id === action.payload);

            if (itemRemovido) {
                state.products = state.products.filter(item => item._id !== action.payload);
                state.quantity -= itemRemovido.quantity;
                state.total -= itemRemovido.price * itemRemovido.quantity;
                
                if (state.quantidade  >= 1) {
                    state.quantidade -= 1;
                } 
            }
        },
        resetCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.quantidade = 0;
        },
    },
});

// Os criadores de ação são gerados para cada função redutora de caso.
export const { adicionarAoCart, removerItem, resetCart} = cartSlice.actions;

export default cartSlice.reducer;