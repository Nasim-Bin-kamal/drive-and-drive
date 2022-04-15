
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Products from './pages/Products/Products';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import AddAdmin from './pages/Dashboard/AddAdmin/AddAdmin';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import UpdateProduct from './pages/Dashboard/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Products />} />

            <Route path="/product/:id" element={<PrivateRoute>
              <ProductDetails />
            </PrivateRoute>} />

            <Route path="/dashboard/*" element={<PrivateRoute>
              <DashboardHome />
            </PrivateRoute>}>

              <Route path="manage-orders" element={<ManageOrders />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="manage-products" element={<ManageProducts />} />
              <Route path="manage-products/update-product/:id" element={<UpdateProduct />} />
              <Route path="my-orders" element={<MyOrders />} />
              <Route path="add-review" element={<AddReview />} />
              <Route path="make-admin" element={<AddAdmin />} />
            </Route>
            {/* <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
