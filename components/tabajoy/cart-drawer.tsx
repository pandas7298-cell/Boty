"use client"

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useCart } from "./cart-context"
import { formatPrice, getProductCopy, getProductById, useLocale, useLocalizedPath, useMessages } from "@/lib/i18n"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isOpen, setIsOpen, itemCount, subtotal } = useCart()
  const t = useMessages()
  const locale = useLocale()
  const localize = useLocalizedPath()
  const shipping = 0
  const total = subtotal + shipping

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="h-full w-full sm:max-w-[440px]">
        <DrawerHeader className="border-b border-border/50 p-6 py-2.5">
          <DrawerTitle className="font-serif text-2xl">{t.cart}</DrawerTitle>
          <DrawerDescription>{itemCount} {t.itemCount}</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">{t.emptyCart}</p>
              <DrawerClose asChild>
                <Link href={localize("/shop")} className="mt-4 text-primary hover:underline text-sm">{t.continueShopping}</Link>
              </DrawerClose>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => {
                const product = getProductById(item.id)
                const copy = product ? getProductCopy(product, locale) : null
                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={copy?.name ?? item.id} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base text-foreground mb-1 font-semibold">{copy?.name ?? item.id}</h3>
                      {copy && <p className="text-muted-foreground mb-3 text-sm">{copy.description}</p>}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-full">
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:bg-muted storefront-transition rounded-l-full" aria-label={t.decreaseQty}><Minus className="w-3 h-3" /></button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:bg-muted storefront-transition rounded-r-full" aria-label={t.increaseQty}><Plus className="w-3 h-3" /></button>
                        </div>
                        <button type="button" onClick={() => removeItem(item.id)} className="p-1.5 text-muted-foreground hover:text-destructive storefront-transition" aria-label={t.removeProduct}><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="text-right"><p className="font-medium text-foreground">{formatPrice(item.price * item.quantity, locale)}</p></div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter className="border-t border-border/50 p-6 gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground"><span>{t.subtotal}</span><span>{formatPrice(subtotal, locale)}</span></div>
              <div className="flex justify-between text-muted-foreground"><span>{t.shippingCost}</span><span>{shipping === 0 ? t.free : formatPrice(shipping, locale)}</span></div>
              <div className="flex justify-between text-base font-medium text-foreground pt-2 border-t border-border/50"><span>{t.total}</span><span>{formatPrice(total, locale)}</span></div>
            </div>
            <button type="button" disabled className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium opacity-60 cursor-not-allowed" aria-label={t.checkoutPreparing}>{t.checkoutPreparing}</button>
            <DrawerClose asChild><button type="button" className="w-full border border-border text-foreground py-4 rounded-full font-medium hover:bg-muted storefront-transition">{t.continueShopping}</button></DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
