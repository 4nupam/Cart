import '../App.css'
function Header(props) {
  return (
    <>
    <div className="Header">
              <div className="flex shopping-card" >
                <span  onClick={() => props.handleShow(false)}>Shopping Cart App</span>
                <div className="Cart_area" onClick={() => props.handleShow(true)}>Cart
                  <sup>{props.count}</sup>
                </div>
              </div>
    </div>
    </>
    );
}

export default Header;