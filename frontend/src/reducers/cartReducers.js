import React from 'react'

export const cartReducers = (state={cartItems:[]},action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item=action.payload;
            const product=state.cartItems.find(el=>el.product === item.product);
            product ? 
            state.cartItems.map(el=>el.product===product.product?product:el)
    }
}
