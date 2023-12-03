import './App.css'

function App() {

  function logToTheCollection() {
      console.log("to the collection");
  }

  function logShopAllBags() {
      console.log("shop all bags");
  }

  function logPreOrders() {
      console.log("pre-orders");
  }

  return (
      <>
        <header>
        <h1>Handbags & Purses</h1>
        <nav>
          <button type="button" onClick={logToTheCollection}>to the collection</button>
          <button type="button" onClick={logShopAllBags}>shop all bags</button>
          <button type="button" onClick={logPreOrders}>pre-orders</button>
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
