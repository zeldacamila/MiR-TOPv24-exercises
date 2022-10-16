const ProductCard = ({ product }) => {

    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <img src={product.image} alt={`pj ${product.name}`} loading="lazy" />
        </div>
    )
}

export default ProductCard;