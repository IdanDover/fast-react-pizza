import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto overflow-scroll container-snap">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
