import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const ShopSection = () => {
  const products = [
    {
      id: 1,
      name: "Chasin' the Sun Tee",
      price: "$35",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Tour Hoodie",
      price: "$65",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Limited Vinyl",
      price: "$30",
      image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Alba Cap",
      price: "$28",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="shop" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-4xl font-light tracking-widest text-foreground md:text-5xl">
            Shop
          </h2>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            Official Merch
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-background">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Button variant="hero" size="sm">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-body text-sm font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button variant="heroOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
