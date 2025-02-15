"use client"

import { toast } from "sonner";
import { Button } from "../ui/button";


export default function RemoveFromYourCart() {
  return (
    <>
    <Button variant="outline" onClick={()=>toast("removed from your cart")}> Remove from your Cart. </Button>
    </>
  )
}
