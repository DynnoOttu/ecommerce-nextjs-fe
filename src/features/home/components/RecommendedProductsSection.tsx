"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import {
  ProductCard,
  ProductCardSkeleton,
} from "~/components/shared/ProductCard";
import { Button } from "~/components/ui/button";
// import { ProductSortBy, useGetProducts } from "../api/getProducts";
import { Activity } from "react";

export const RecommendedProductsSection = () => {
  //   const { data: products, isLoading: productsIsLoading } = useGetProducts({
  //     input: {
  //       sort: ProductSortBy.RECOMMENDED,
  //       limit: 6,
  //     },
  //   });

  const products = [
    {
      id: 1,
      name: "Espresso",
      category: {
        id: 1,
        name: "Coffee",
      },
      description: "Kopi hitam pekat dengan rasa kuat dan aroma khas.",
      price: 18000,
      imageUrl: "https://picsum.photos/300/300?coffee=1",
    },
    {
      id: 2,
      name: "Cappuccino",
      category: {
        id: 1,
        name: "Coffee",
      },
      description: "Perpaduan espresso, susu, dan foam lembut.",
      price: 25000,
      imageUrl: "https://picsum.photos/300/300?coffee=2",
    },
    {
      id: 3,
      name: "Latte",
      category: {
        id: 1,
        name: "Coffee",
      },
      description: "Kopi susu dengan rasa creamy dan ringan.",
      price: 27000,
      imageUrl: "https://picsum.photos/300/300?coffee=3",
    },
    {
      id: 4,
      name: "Chocolate Milk",
      category: {
        id: 2,
        name: "Non Coffee",
      },
      description: "Minuman cokelat manis dengan susu segar.",
      price: 22000,
      imageUrl: "https://picsum.photos/300/300?drink=1",
    },
    {
      id: 5,
      name: "French Fries",
      category: {
        id: 4,
        name: "Snack",
      },
      description: "Kentang goreng renyah dan gurih.",
      price: 20000,
      imageUrl: "https://picsum.photos/300/300?snack=1",
    },
  ];

  return (
    <section className="w-full container mx-auto px-4 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-black">Recommended Products</h2>
          <p className="text-muted-foreground text-sm">
            Handpicked products just for you
          </p>
        </div>

        <Link href="/products">
          <Button variant="ghost">
            View All
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Activity mode={products ? "visible" : "hidden"}>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category?.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </Activity>

        {/* <Activity mode={productsIsLoading && !products ? "visible" : "hidden"}> */}
        <Activity mode="hidden">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </Activity>
      </div>
    </section>
  );
};
