import { Offcanvas, OffcanvasBody, OffcanvasTitle } from "react-bootstrap";
import Items from '../Data/Items.json';
import { formatCurrency } from "../Utilities/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../Redux/cartReducer';

type CartProps = {
  showCart: boolean;
  toggleShow: () => void;
};

export default function Cart({ showCart, toggleShow }: CartProps) {
  const dispatch = useDispatch(); // Corrected dispatch initialization

  // Access cart from Redux store
  const cart = useSelector((state: any) => state.cart);

  return (
    <Offcanvas show={showCart} onHide={toggleShow}>
      <OffcanvasTitle>CART</OffcanvasTitle>
      <OffcanvasBody>
        <div className='shopItemsContainer'>
          {Items.map((item) => {
            const quantity = cart[item.name]?.quantity || 0; // Access quantity from Redux state

            return (
              <div key={item.id} className='shopItems'>
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <div className='shopItemsButtons'>
                  <button onClick={() => dispatch(addItem(item))}>+</button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => dispatch(removeItem(item.name))} // Pass the new quantity
                    disabled={quantity === 0}
                  >
                    -
                  </button>
                </div>
                <p>{formatCurrency(item.price)}</p>
              </div>
            );
          })}
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
}
