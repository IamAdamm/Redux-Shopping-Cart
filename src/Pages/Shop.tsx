import '../Styles/Shop.css'
import Items from '../Data/Items.json'
import { formatCurrency } from '../Utilities/formatCurrency'

const quantity = 0;

export default function Shop() {
  return (
    <div className='shop'>
        <h1>SHOP</h1>
        <div className='shopItemsContainer'>
            {Items.map((item) => (
                <div key={item.id} className='shopItems'>
                    <img src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                    <div className='shopItemsButtons'>
                        <button>+</button>
                        <p>{quantity}</p>
                        <button>-</button>
                    </div>
                    <p>{formatCurrency(item.price)}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
