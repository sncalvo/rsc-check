import { Suspense } from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'Black',
  },
]

const bags = [
  {
    id: 1,
    name: 'Zip High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'White and Black',
  },
  {
    id: 4,
    name: 'Zip High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'White and Black',
  },
  {
    id: 3,
    name: 'Zip High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "",
    createdAt: '2022-01-01',
    price: '$35',
    color: 'White and Black',
  }
]

import moment from 'moment';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

import { SlowToRenderComponent } from './_components/SlowToRenderComponent';

const QuickToRenderComponent = () => {
  const startTime = Date.now();
  const endTime = Date.now();

  return (
    <div className="p-5">
      <h1>QuickToRenderComponent rendered in {endTime - startTime}ms</h1>
    </div>
  )
}

const Product = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-semibold">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500 font-semibold">{product.color}</p>
          <p className="mt-1 text-sm text-gray-500">{moment(product.createdAt).format('DD/MM/YYYY')}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  )
}

const Products = ({ products, title }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

async function getShirts() {
  return products;
}

async function getBags() {
  return bags;
}

const Main = ({ children }) => {
  return (
    <main className="bg-white">
      {children}
    </main>
  )
}

import ReloadButton from './_components/ReloadButton';

let counter = 0;

const serverAction = async () => {
  'use server'
  counter += 1;
  return counter;
}

const ComponentWithServerAction = () => {
  return (
    <div>
      {counter}
      <form action={serverAction}>
        <button type="submit" className="hover:bg-blue-700 active:bg-blue-900">Submit</button>
      </form>
      <ReloadButton />
    </div>
  )
}

const Nav = () => {
  return <></>;
}

export async function App() {
  const shirts = await getShirts();
  const bags = await getBags();

  return (
    <div>
      <Nav />
      <Main>
        <Products products={shirts} title="T-Shirts" />
        <Products products={bags} title="Bags" />
      </Main>
    </div>
  )
}

// export default async function App2() {
//   return (
//     <div className="p-5">
//       <ComponentWithServerAction />
//     </div>
//   )
// }
//
export default function App3() {
  return (
    <div><QuickToRenderComponent /><Suspense fallback={"Loading..."}><SlowToRenderComponent /></Suspense></div>
  );
}
