import './App.css'
import ButtonItem from "./components/buttonItem.jsx";

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

        </main>
        <footer>

        </footer>
      </>
  )
}

export default App
