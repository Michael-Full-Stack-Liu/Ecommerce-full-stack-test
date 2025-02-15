// import SignUp from "@/components/auth/signUp";
import RemoveFromYourCart from "@/components/cartAction/removeFromYourCart";
import SalesCampaignBanner from "@/components/layout/salesCampaignBanner";
import ProductGrid from "@/components/product/productGrid";
import { getAllProducts } from "@/sanity/lib/client";



export default async function Home() {

  const products = await getAllProducts();

  return (
    <div>

      <div className="flex flex-col w-full">
      {/* <SignUp /> */}
      <SalesCampaignBanner />
      
      <RemoveFromYourCart />
      
      <ProductGrid products={products} />
      </div>
      
    </div>
  );
}
