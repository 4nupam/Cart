
export default function CartList({cart}){
    return (
        <>
      {
        cart.map((cartItem, cartIndex) => {
           return(
            <div>
                 <img src={cartItem.url} width={70}></img>
                 <span> {cartItem.name} </span>
                 <button>-</button>
                 <span> {cartItem.quantity} </span>
                 <button>+</button>
                 <span>Rs: {cartItem.price}/-</span>
            </div>
           )
        })
      }
        </>
    )
}