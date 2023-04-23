import useRouteElement from './useRouteElement'

function App() {
  const routeElement = useRouteElement()

  return <h1>{routeElement}</h1>
}

export default App
