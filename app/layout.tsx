import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "sonner";
import { SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import HeaderCategorySelector from "@/components/layout/HeaderCategorySelector";
import Cart from "@/components/cart/Cart";



const inter = Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Full Stack Temu like ecommerce",
  description: "Use Next js, React, AUth js, Prisma, Zustand, Sanity, Stripe",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth()

  return (
    <html lang="en">
      <body className={`${inter.className} w-full antialiased min-h-[200vh]`}>
        

        <main className="w-full">
        <Header user={String(user?.user?.id)} categorySelector={<HeaderCategorySelector />}/>
        
        {children}
        </main>
        <Cart />
        <Toaster />
        <SanityLive />
      </body>
      
    </html>
      
  );
}
