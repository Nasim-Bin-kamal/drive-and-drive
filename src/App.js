
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';

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
            <Route path="/productDetails" element={<ProductDetails />} />

            <Route path="/dashboard/*" element={<PrivateRoute>
              <DashboardHome />
            </PrivateRoute>}>

              {/* <Route path="manage-orders" element={<ManageOrders />} />
              <Route path="add-package" element={<AddPackage />} />
              <Route path="manage-packages" element={<ManagePackages />} />
              <Route path="my-packages" element={<MyPackages />} />
              <Route path="add-review" element={<AddReview />} /> */}
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
