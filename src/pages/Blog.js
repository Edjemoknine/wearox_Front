import React from "react";
import { motion } from "framer-motion";
import {
  adidas,
  puma,
  nike_shoes,
  puma_shoes,
  puma_parallex,
  nike_parallex,
  jeans,
  jeans_fash,
  adidas_parallex,
  adidas_shoes,
  asics,
  aire_force,
} from "../assets/images";

const Blog = () => {
  return (
    <div className="blog text-center overflow-x-hidden">
      <div className="adidas grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          // viewport={{once:true}}
          className="h-[520px]"
        >
          <img
            className="w-full h-full object-cover"
            src={adidas}
            alt="addidas"
          />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex justify-center flex-col p-10  items-center"
        >
          <h1>adidas designs for athletes of all kinds</h1>
          <p>
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.
            adidas is home to the runner, the basketball player, the soccer kid,
            the fitness enthusiast, the yogi. And even the weekend hiker looking
            to escape the city.
          </p>
        </motion.div>
      </div>
      <div className="Nike grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex order-1 md:-order-1 justify-center flex-col p-10 items-center"
        >
          <h1> Nike Shoes to Know Now and Wear Forever</h1>
          <p>
            Today, Nike has expanded far beyond its humble Oregon origins.
            Professional athletes from everywhere and every sport aren't just
            wearing Nike, but they have become a part of Nike itself: Ronaldo's
            CR7 Mercurial cleats, Kobe Bryant's Zoom Kobe 1s, and of course,
            Michael Jordan's, well, Jordans. It's not just about professionals
            or athletes, though. For anyone and everyone, the brand is still the
            go-to for footwear, apparel, equipment, accessories, and more.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[520px]"
        >
          <img
            className="w-full h-full object-cover"
            src={nike_shoes}
            alt="Nike"
          />
        </motion.div>
      </div>
      <div className="puma grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[520px]"
        >
          <img className="w-full h-full object-cover" src={puma} alt="puma" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex justify-center flex-col p-10 items-center"
        >
          <h1>Puma’s returning to the fashion arena — this time</h1>
          <p>
            Puma was a fashion-world favourite, but pressed pause on
            high-profile collaborations as it sought to regain its sports
            credentials. Now, with Web3 on the horizon, it’s reassessing what a
            fashion-forward sportswear brand makes, shows and sells.
          </p>
        </motion.div>
      </div>
      <div className="puma_fashion grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex order-1 md:-order-1 justify-center flex-col p-10 items-center"
        >
          <h1>Puma’s returning to the fashion arena — this time</h1>
          <p>
            Puma was a fashion-world favourite, but pressed pause on
            high-profile collaborations as it sought to regain its sports
            credentials. Now, with Web3 on the horizon, it’s reassessing what a
            fashion-forward sportswear brand makes, shows and sells.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[520px]"
        >
          <img
            className="w-full h-full object-cover"
            src={puma_shoes}
            alt="puma"
          />
        </motion.div>
      </div>
      <div className="jeans_fashion grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[520px]"
        >
          <img
            className="w-full h-full object-cover"
            src={jeans_fash}
            alt="puma"
          />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex justify-center flex-col p-10 items-center"
        >
          <h1>Puma’s returning to the fashion arena — this time</h1>
          <p>
            Puma was a fashion-world favourite, but pressed pause on
            high-profile collaborations as it sought to regain its sports
            credentials. Now, with Web3 on the horizon, it’s reassessing what a
            fashion-forward sportswear brand makes, shows and sells.
          </p>
        </motion.div>
      </div>
      <div className="adidas_fashion grid md:grid-cols-2 items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex order-1 md:-order-1 justify-center flex-col p-10 items-center"
        >
          <h1>Puma’s returning to the fashion arena — this time</h1>
          <p>
            Puma was a fashion-world favourite, but pressed pause on
            high-profile collaborations as it sought to regain its sports
            credentials. Now, with Web3 on the horizon, it’s reassessing what a
            fashion-forward sportswear brand makes, shows and sells.
          </p>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[520px]"
        >
          <img
            className="w-full h-full object-cover"
            src={adidas_parallex}
            alt="puma"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
