// http://localhost:5173/
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Purchases from "./pages/PurchaseDetailPage";
import Profile from "./pages/ProfilePage";
import FavoritesPage from "./pages/FavouritesPage";
import UploadPage from "./pages/UploadPage";
import Error from "./pages/ErrorPage";
import IsPrivate from "./context/auth.private";
import "./App.css";
import UserEditForm from "./components/UserEditForm";
import ProductDetailPage from "./pages/ProductDetailPage";
import PurchasePage from "./pages/PurchasePage";
import UnavailablePage from "./pages/UnavailablePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />

        {/* Private Routes */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />

        <Route
          path="/editProfile"
          element={
            <IsPrivate>
              <UserEditForm />
            </IsPrivate>
          }
        />
        <Route
          path="/purchases"
          element={
            <IsPrivate>
              <PurchasePage />
            </IsPrivate>
          }
        />
        <Route
          path="/products/:productId/:productState"
          element={
            <IsPrivate>
              <UnavailablePage />
            </IsPrivate>
          }
        />
        <Route
          path="/purchases/:purchaseId/:productId"
          element={
            <IsPrivate>
              <Purchases />
            </IsPrivate>
          }
        />
        <Route
          path="/favorites"
          element={
            <IsPrivate>
              <FavoritesPage />
            </IsPrivate>
          }
        />
        <Route
          path="/upload"
          element={
            <IsPrivate>
              <UploadPage />
            </IsPrivate>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
