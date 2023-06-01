import '../App.css';

function ProductList({ product, addToCart }) {
  return (
    <div className='flex'>
      {product.map((productItem) => (
        <div style={{ width: '50%' }} key={productItem.id}>
          <div className='product-item'>
            <img src={productItem.url} width='30%' alt={productItem.name} />
            <p>
              {productItem.name} | {productItem.category}
            </p>
            <p>{productItem.seller}</p>
            <p>Rs: {productItem.price}/-</p>
            <button onClick={() => addToCart(productItem)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
