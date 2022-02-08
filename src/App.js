
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from "history";

import LoginScreen from "./screens/LoginScreen";

import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/EditUserScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductCreateScreen from "./screens/ProductCreateScreen";
import OrderListScreen from "./screens/OrderListScreen";
import {Container} from "react-bootstrap";

export const history = createBrowserHistory();
function App() {


  return (
      <BrowserRouter history={history}>
          <Header></Header>
          <main className='py-3'>
              <Container>
                  <Routes>
                      <Route path='/order/:id' element={<OrderScreen/>} />
                      <Route path='/login' element={<LoginScreen />}></Route>
                      <Route path='/payment' element={<PaymentScreen/>}></Route>
                      <Route path='/placeOrder' element={<PlaceOrderScreen/>}></Route>
                      <Route exact path="/" element={<HomeScreen />}></Route>
                      <Route path='/userProfile' element={<ProfileScreen></ProfileScreen>} />
                      <Route path='/register' element={<RegisterScreen></RegisterScreen>}></Route>
                      <Route path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
                      <Route path='/cart/:id?' element={<CartScreen></CartScreen>}></Route>
                      <Route path='/admin/userlist' element={<UserListScreen></UserListScreen>} />
                      <Route path='/admin/user/:id/edit' element={<UserEditScreen></UserEditScreen>} />
                      <Route path='/admin/productlist' element={<ProductListScreen></ProductListScreen>} exact />
                      <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>} exact />
                      <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
                      <Route path='/admin/product/create' element={<ProductCreateScreen/>} />
                      <Route path='/admin/orderlist' element={<OrderListScreen/>} />


                  </Routes>
              </Container>
          </main>
          <Footer> </Footer>
      </BrowserRouter>



  );
}

export default App;
