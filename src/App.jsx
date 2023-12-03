import './App.css'
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import ButtonItem from "./components/buttonItem.jsx";
import createPriceString from "./helpers/createPriceString.js";
import ProductCard from "./components/ProductCard.jsx";

function App() {

  // function logToTheCollection() {
  //     console.log("to the collection");
  // }
  //
  // function logShopAllBags() {
  //     console.log("shop all bags");
  // }
  //
  // function logPreOrders() {
  //     console.log("pre-orders");
  // }

  return (
      <>
        <header>
        <h1>Handbags & Purses</h1>
        <nav>
            <ButtonItem
                buttonText="to the collection"
                isDisabled={false}
            />
            <ButtonItem
                buttonText="shop all bags"
                isDisAbled={false}
            />
            <ButtonItem
                buttonText="pre-orders"
                isDisabled={true}
            />
          {/*<button type="button" onClick={logToTheCollection} disabled={true}>to the collection</button>*/}
          {/*<button type="button" onClick={logShopAllBags}>shop all bags</button>*/}
          {/*<button type="button" onClick={logPreOrders} disabled={true}>pre-orders</button>*/}
        </nav>
        </header>
        <main>
            <ProductCard
                productLabel="Best seller"
                productImage={bag1}
                productTitle="The handy bag"
                productPrice={createPriceString(400)}
            />
            <ProductCard
                productLabel="Best seller"
                productImage={bag2}
                productTitle="The stylish bag"
                productPrice={createPriceString(250)}
            />
            <ProductCard
                productLabel="New Collection"
                productImage={bag3}
                productTitle="The simple bag"
                productPrice={createPriceString(300)}
            />
            <ProductCard
                productLabel="New Collection"
                productImage={bag4}
                productTitle="The trendy bag"
                productPrice={createPriceString(150)}
            />
            {/*<article>*/}
            {/*    <span>Best seller</span>*/}
            {/*    <img src={bag1} alt="handy-bag-image"/>*/}
            {/*    <p>The handy bag</p>*/}
            {/*    <h4>{createPriceString(400)}</h4>*/}
            {/*</article>*/}
            {/*<article>*/}
            {/*    <span>Best seller</span>*/}
            {/*    <img src={bag2} alt="stylish-bag-image"/>*/}
            {/*    <p>The stylish bag</p>*/}
            {/*    <h4>{createPriceString(250)}</h4>*/}
            {/*</article>*/}
            {/*<article>*/}
            {/*    <span>New collection</span>*/}
            {/*    <img src={bag3} alt="simple-bag-image"/>*/}
            {/*    <p>The simple bag</p>*/}
            {/*    <h4>{createPriceString(300)}</h4>*/}
            {/*</article>*/}
            {/*<article>*/}
            {/*    <span>New collection</span>*/}
            {/*    <img src={bag4} alt="trendy-bag-image"/>*/}
            {/*    <p>The trendy bag</p>*/}
            {/*    <h4>{createPriceString(150)}</h4>*/}
            {/*</article>*/}

        </main>
        <footer>

        </footer>
      </>
  )
}

export default App
