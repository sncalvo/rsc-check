import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
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
    price: '$35',
    color: 'White and Black',
  },
  {
    id: 4,
    name: 'Zip High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "",
    price: '$35',
    color: 'White and Black',
  },
  {
    id: 3,
    name: 'Zip High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-02.jpg',
    imageAlt: "",
    price: '$35',
    color: 'White and Black',
  }
]

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
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const Main = ({ children }) => {
  return (
    <main className="bg-white">
      {children}
    </main>
  )
}

const Nav = () => {
  return <></>;
}

export async function getServerSideProps() {
  const shirts = await getShirts();
  const bags = await getBags();

  return {
    props: {
      shirts,
      bags
    }
  }
}

export default function App({ shirts, bags }) {
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
