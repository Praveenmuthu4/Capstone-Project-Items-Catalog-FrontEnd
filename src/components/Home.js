import React, { Fragment, useEffect } from "react";
import HeaderData from "./Layout/HeaderData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import Product from "./Product/Product";
import Loader from "./Layout/Loader";

export default function Home() {
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="container container-fluid">
          <HeaderData title={"Buy Best Product Online"} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
        </div>
      )}
    </Fragment>
  );
}
