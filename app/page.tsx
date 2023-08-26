import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import ProductList from "@/components/ProductList";

const products = [
  {
    id: "1",
    category: "Camera",
    name: "Sony FX3",
    price: "$3,999.00",
    images: ["/img/products/FX3.png"],
  },
  {
    id: "2",
    category: "Camera",
    name: "Sony A7S III",
    price: "$3,499.00",
    images: ["/img/products/7SIII.png"],
  },
  {
    id: "3",
    category: "Camera",
    name: "Sony A7C",
    price: "$1,599.00",
    images: ["/img/products/7C.png"],
  },
  {
    id: "4",
    category: "Camera",
    name: "Sony A7 IV",
    price: "$2,399.00",
    images: ["/img/products/7IV.png"],
  },
  {
    id: "5",
    category: "Camera",
    name: "Sony A7R III",
    price: "$2,499.00",
    images: ["/img/products/7RIII.png"],
  },
  {
    id: "6",
    category: "Camera",
    name: "Sony A7R V",
    price: "$3,899.00",
    images: ["/img/products/7RV.png"],
  },
  {
    id: "7",
    category: "Camera",
    name: "Sony A6700",
    price: "$1,799.00",
    images: ["/img/products/6700.png"],
  },
  {
    id: "8",
    category: "Camera",
    name: "Sony AZV-E10",
    price: "$699.00",
    images: ["/img/products/ZVE10.png"],
  },
];

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/hero-1920x1080.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
    </Container>
  );
}
