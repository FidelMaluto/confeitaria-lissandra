import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Carrinho() {
  const { items, updateQuantity, removeItem, total } = useCart();

  return (
    <>
      <style>{`
        .cart-container{
          width:100%;
          max-width:800px;
          margin:auto;
          padding:48px 24px;
        }

        .cart-empty{
          min-height:60vh;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding:30px;
        }

        .cart-title{
          margin-bottom:28px;
        }

        .cart-card{
          padding:24px;
          overflow:hidden;
        }

        .table-wrapper{
          width:100%;
          overflow-x:auto;
        }

        table{
          width:100%;
          border-collapse:collapse;
          min-width:600px;
        }

        th,td{
          text-align:left;
          padding:14px;
          border-bottom:1px solid var(--color-border);
          vertical-align:middle;
        }

        .product-price{
          color:var(--color-cocoa-soft);
          font-size:.85rem;
        }

        .quantity-control{
          display:flex;
          align-items:center;
          gap:8px;
        }

        .quantity-control button{
          width:35px;
          height:35px;
          padding:0;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .cart-footer{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          margin-top:24px;
        }

        .cart-total{
          font-size:1.3rem;
          font-weight:700;
        }

        .cart-total span{
          color:var(--color-rose-deep);
        }

        @media(max-width:700px){
          .cart-container{
            padding:30px 15px;
          }

          .cart-card{
            padding:15px;
          }

          .cart-footer{
            flex-direction:column;
            align-items:stretch;
          }

          .cart-total{
            text-align:center;
          }

          .cart-footer .btn{
            width:100%;
            text-align:center;
          }
        }

        @media(max-width:450px){
          .cart-container h1{
            font-size:1.6rem;
          }

          .quantity-control{
            gap:5px;
          }

          .quantity-control button{
            width:30px;
            height:30px;
          }
        }
      `}</style>

      {items.length === 0 ? (
        <div className="cart-empty">
          <h1>Seu carrinho está vazio</h1>

          <p style={{
            color:'var(--color-cocoa-soft)',
            marginBottom:24
          }}>
            Que tal dar uma olhada nos nossos doces?
          </p>

          <Link to="/catalogo" className="btn btn-primary">
            Ver catálogo
          </Link>
        </div>
      ) : (
        <div className="cart-container">

          <h1 className="cart-title">
            Seu carrinho
          </h1>

          <div className="card cart-card">

            <div className="table-wrapper">
              <table>

                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Qtd.</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item)=>(
                    <tr key={item.product_id}>

                      <td>
                        <strong>{item.name}</strong>
                        <br/>
                        <span className="product-price">
                          KZ$ {Number(item.price).toFixed(2)} un.
                        </span>
                      </td>

                      <td>
                        <div className="quantity-control">

                          <button
                            className="btn btn-ghost"
                            onClick={() =>
                              updateQuantity(item.product_id,item.quantity-1)
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            className="btn btn-ghost"
                            onClick={() =>
                              updateQuantity(item.product_id,item.quantity+1)
                            }
                          >
                            +
                          </button>

                        </div>
                      </td>

                      <td>
                        KZ$ {(item.price * item.quantity).toFixed(2)}
                      </td>

                      <td>
                        <button
                          className="btn btn-ghost"
                          onClick={() => removeItem(item.product_id)}
                          aria-label={`Remover ${item.name}`}
                        >
                          ✕
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            <div className="cart-footer">

              <span className="cart-total">
                Total:
                <span>
                  KZ$ {total.toFixed(2)}
                </span>
              </span>

              <Link to="/checkout" className="btn btn-primary">
                Finalizar pedido
              </Link>

            </div>

          </div>

        </div>
      )}
    </>
  );
}