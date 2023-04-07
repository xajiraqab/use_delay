import { useState } from 'react';
import useDelay from './useDelay';
import styled from 'styled-components';

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [listProducts, setListproducts] = useState([])

  const [searchValue, setSearchValue] = useState("")

  function search() {
    setIsLoading(true)
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then(res => res.json())
      .then(data => {
        setListproducts(data.products)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useDelay(search, searchValue, 1000)


  return (
    <Main>

      <SearchConteiner>
        <div>
          <input
            placeholder="search.."
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            autoFocus
          />
          {isLoading ? <Loading><div></div></Loading> : null}
        </div>
      </SearchConteiner>

      <ProductsContainer>
        {listProducts.map(product =>
          <Card key={product.id}>
            <Image style={{ backgroundImage: `url(${product.thumbnail})` }}></Image>
            <h2>{product.title}</h2>
            <Price>{product.price.toFixed(2)} <span>$</span></Price>
          </Card>
        )}
      </ProductsContainer>

      {!isLoading && !listProducts.length ? <h1>404: Products not found :3</h1> : null}

    </Main>
  );
}

export default App;

const Main = styled.div `
  text-align: center;
`

const SearchConteiner = styled.div`
  position: fixed;
  inset: 0;
  bottom: unset;
  background: #292C2E;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(28, 31, 34);

  >div {
    position: relative;
    display: flex;
    margin: auto;
    width: 1000px;
    max-width: 100%;

    input { 
      width: 100%;
    }
  }
`


const ProductsContainer = styled.div`
  margin: auto;
  margin-top: 8rem;
  width: 1000px;
  max-width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
`


const Card = styled.div`
  display: grid;
  gap: 1em;
  text-align: center;
  justify-content: center;
  background: rgb(50 54 55);
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #1c1f22;
`

const Image = styled.div`
  width: 128px;
  height: 128px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  border-radius: .5rem;
`

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #65d393;

  span {
    color: rgba(255, 255, 255, .67);
  }
`

const Loading = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  div {
    width: 16px;
    height: 16px;
    border: 4px solid rgba(255, 255, 255, .87);
    border-right-color: transparent;
    border-radius: 50%;
    animation: anRotating linear 1s infinite;
  }
`