import React from "react";
import ProductsCard from "./ProductsCard";
import { AnimatePresence, motion } from "framer-motion";
import ProductSkeleton from "../skeleton/ProductSkeleton";
const Products = ({ products, loading }) => {
  // console.log(products);

  if (loading)
    return (
      <div className="container py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-6 ">
        {Array(20)
          .fill(0)
          ?.map((_, i) => (
            <ProductSkeleton index={i} key={i} />
          ))}
      </div>
    );
  return (
    <AnimatePresence mode="popLayout">
      <div className="">
        <motion.div
          layout
          className="container py-10 grid md:grid-cols-4 sm:grid-cols-2 gap-6 "
        >
          {products?.map((product, i) => (
            <ProductsCard index={i} key={product.id} {...product} />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Products;
