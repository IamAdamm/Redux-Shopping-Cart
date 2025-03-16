// Type for Cart Item
type CartItem = {
    name: string,
    price: number,
    quantity: number,
};

// Action creators
export const addItem = (itemToAdd: { name: string, price: number }) => {
    return {
        type: "cart/addItem",
        payload: itemToAdd,
    };
};

export const removeItem = (name: string) => {
    return {
        type: "cart/removeItem",
        payload: { name },
    };
};

// Initial state: The cart is represented as an object where the key is the item name, and the value is the item details
const initialCart: Record<string, CartItem> = {};

// Reducer function
export const cartReducer = (cart = initialCart, action: any) => {
    switch (action.type) {
        case 'cart/addItem': {
            const { name, price } = action.payload; // Destructure name and price
            let quantity = 1;

            if (cart[name]) {
                // If the item already exists in the cart, increase its quantity
                quantity = cart[name].quantity + 1;
            }

            return {
                ...cart, 
                [name]: { price, quantity }, // Add or update the item in the cart
            };
        }
        case 'cart/removeItem': {
            const { name } = action.payload; // Extract the item name from the payload
            if (!cart[name]) return cart; // If item doesn't exist in the cart, do nothing

            const { price, quantity } = cart[name];

            // If quantity is greater than 1, reduce it by 1
            if (quantity > 1) {
                return {
                    ...cart,
                    [name]: { price, quantity: quantity - 1 }, // Decrease the quantity
                };
            } else {
                // If the quantity is 1, remove the item from the cart
                const { [name]: removedItem, ...rest } = cart; // Remove item from the cart
                return rest;
            }
        }
        default:
            return cart; // Return the unchanged cart if no action type matches
    }
};
