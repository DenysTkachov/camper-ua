import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { fetchCars } from "../../redux/cars/operations";

export const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};