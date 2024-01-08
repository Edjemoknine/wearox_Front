import { Gift, confirme, fast, free, save, support } from "../assets/images";
import Heading from "./Heading";
import Marketing from "./Marketing";

import Testimonials from "./Testimonials";

const features = [
  {
    title: "Free Shipping",
    img: free,
  },
  {
    title: "Online Order ",
    img: fast,
  },
  {
    title: "Save Money",
    img: save,
  },
  {
    title: "Promotions",
    img: Gift,
  },
  {
    title: "Happy Sell",
    img: confirme,
  },
  {
    title: "F24/7 Support",
    img: support,
  },
];

export default function AboutUs() {
  return (
    <>
      <div className="relative h-96 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* <div className="cover z-1 absolute top-0 left-0 w-full h-full"></div> */}
        <img
          src="https://images.unsplash.com/photo-1624095434474-dddb85dc5a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto cover container px-6 lg:px-8">
          <div className="mx-auto  z-50 max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div> */}
        </div>
      </div>

      <div className="container py-10 grid md:grid-cols-2 gap-6">
        <div className="-mt-10 flex items-start flex-col">
          <Heading text={"Who We Are"} parg={``} />
          <h1 className="text-3xl mb-3 leading-tight font-bold">
            We’re a passionate group of people working from around the world to
            build the future of ecommerce.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            assumenda labore eveniet illum maiores doloremque, ducimus explicabo
            iure cupiditate harum nostrum repellendus quos. Quidem?
          </p>
        </div>

        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
          alt="our group"
        />
      </div>
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <Marketing />
      <Testimonials />

      <div className="container sm:grid-cols-2 grid mt-6 md:grid-cols-6 mb-6 text-center gap-3">
        {features.map((pr) => (
          <div
            className="border rounded hover:scale-105 duration-300 cursor-pointer p-3"
            key={pr.title}
          >
            <div className="md:h-20 h-40 flex justify-center b-red-100 items-center">
              <img
                className="w-full h-full object-contain"
                src={pr.img}
                alt={pr.title}
              />
            </div>
            <h4 className="text-xs mt-3 px-6 rounded w-fit mx-auto  bg-black text-white py-1">
              {" "}
              {pr.title}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}
