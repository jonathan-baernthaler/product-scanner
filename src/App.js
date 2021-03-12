import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, AddProduct, EditProduct, Checkout, NotFound } from "./pages";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/scan-your-products" component={AddProduct} />
          <Route path="/edit-product/:productId" component={EditProduct} />
          <Route path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
