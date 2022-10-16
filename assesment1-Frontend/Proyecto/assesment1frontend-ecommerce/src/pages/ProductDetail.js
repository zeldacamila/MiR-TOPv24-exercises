import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  const [dataProduct, setDataProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(({ data }) => {
      console.log('Respuesta:', data.results)
      setDataProduct(data.results)
    }).catch((err) => {
      alert("Ups!!! ocurrió un error")
    }).finally(() => {
      setLoading(false)
    })
  }, [])

    return (
      <><div className="Product">
        <header className="Product-header">
          <h1>The greatest e-commerce ever - Product Detail</h1>
        </header>
      </div><div>
          {loading ? <p>Loading...</p> : dataProduct.map((item) => {
            return (
              <ProductCard key={item.id} product={item} />
            );
          })}
        </div></>
    );
  }
  
  export default ProductDetail;