import React from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";

const ProductSkeleton = ({ index }) => {
  return (
    <motion.div
      //   initial={{ y: 150, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
      //   transition={{
      //     delay: 0.2 * index,
      //     y: { type: "spring", stiffness: 60 },
      //     opacity: { duration: 0.6 },
      //     ease: "easeIn",
      //     duration: 1,
      //   }}
      className="card relative shadow hover:shadow-2xl  border-gray-200 border-2  rounded-md overflow-hidden  cursor-pointer"
    >
      <div className=" w-full h-64">
        <Skeleton height={256} />
      </div>
      <div className="info p-2 relative">
        <Skeleton width={200} borderRadius={30} height={40} />
        <div className="flex items-center mt-1 justify-between gap-3 relative ">
          <Skeleton width={100} height={15} />
          <p className=" hover:scale-110 text-xl">
            <Skeleton width={50} height={30} borderRadius={20} />
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSkeleton;
