import '../Styles/Shop.css'
import Items from '../Data/Items.json'
import { formatCurrency } from '../Utilities/formatCurrency'
import { addItem, removeItem } from '../Redux/cartReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Shop() {
    const dispatch = useDispatch();
    
    const cart = useSelector((state: any) => state);

    return (
        <div className='shop'>
            <h1>SHOP</h1>
            <div className='shopItemsContainer'>
                {Items.map((item) => {
                    const quantity = cart[item.name]?.quantity || 0;

                    return (
                        <div key={item.id} className='shopItems'>
                            <img src={item.img} alt={item.name} />
                            <h2>{item.name}</h2>
                            <div className='shopItemsButtons'>
                                <button onClick={() => dispatch(addItem(item))}>+</button>
                                <p>{quantity}</p>
                                <button 
                                    onClick={() => dispatch(removeItem(item.name))}
                                    disabled={quantity === 0}
                                >-</button>
                            </div>
                            <p>{formatCurrency(item.price)}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
