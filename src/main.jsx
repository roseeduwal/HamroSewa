import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServiceView from "./web/service/view/service-view.jsx";
import HomeView from "./web/home/view/home-view.jsx";
import LoginView from "./web/auth/login/login-view.jsx";
import AboutUs from "./web/about-us/view/about-us-view.jsx";
import Dashboard from "./dashboard/dashboard.jsx";
import ProfileView from "./dashboard/profile/view/profile-view.jsx";
import ErrorPage from "./error-page.jsx";
import RegisterView from "./web/auth/sign-up/register.jsx";
import BookServicesView from "./dashboard/book-services/view/book-services-view.jsx";
import MyReviewsView from "./dashboard/reviews/view/my-reviews.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import SnackbarProvider from "./components/snackbar-provider.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";
import ServiceDetailView from "./web/service/view/service-detail-view.jsx";
import ServicesView from "./dashboard/services/view/services-view.jsx";
import CategoryView from "./dashboard/categories/view/categories-view.jsx";
import AddService from "./dashboard/services/add-service.jsx";
import VerifyEmail from "./web/auth/verify-email/verify-email.jsx";
import { CartContextProvider } from "./context/cart-context.jsx";
import CheckoutView from "./web/checkout/view/checkout-view.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/service",
        element: <ServiceView />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetailView />,
      },
      {
        path: "/checkout",
        element: <CheckoutView />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/auth/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/register",
        element: <RegisterView />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "profile",
            element: <ProfileView />,
          },
          {
            path: "categories",
            element: <CategoryView />,
          },
          {
            path: "services",
            element: <ServicesView />,
          },
          {
            path: "services/add-service",
            element: <AddService />,
          },
          {
            path: "book-services",
            element: <BookServicesView />,
          },
          {
            path: "my-reviews",
            element: <MyReviewsView />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <CartContextProvider>
            <RouterProvider router={router} />
          </CartContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
