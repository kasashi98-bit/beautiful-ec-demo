'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'

type CartItem = {
  id: string
  quantity: number
}

type CartProduct = (typeof products)[number] & {
  quantity: number
}

const CART_STORAGE_KEY = 'yukisaki-cart'

function priceToNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ''))
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const cartProducts = useMemo(() => {
    return cart.reduce<CartProduct[]>((items, cartItem) => {
      const product = products.find((item) => item.id === cartItem.id)

      if (product) {
        items.push({ ...product, quantity: cartItem.quantity })
      }

      return items
    }, [])
  }, [cart])

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + priceToNumber(product.price) * product.quantity
  }, 0)

  return (
    <main style={{ minHeight: '100vh', background: '#0a0805', padding: '64px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#544c40', textDecoration: 'none' }}>
          ← 会員ページへ戻る
        </Link>

        <h1 style={{ marginTop: '40px', fontSize: '42px', fontWeight: 500 }}>
          マイカート
        </h1>

        {cartProducts.length === 0 ? (
          <p style={{ marginTop: '40px', color: '#040403' }}>
            現在、カートに商品は入っていません。
          </p>
        ) : (
          <div style={{ marginTop: '40px', display: 'grid', gap: '24px' }}>
            {cartProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  borderTop: '1px solid #030202',
                  paddingTop: '24px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                />

                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 500 }}>
                    {product.name}
                  </h2>
                  <p style={{ marginTop: '8px', color: '#0a0a09' }}>
                    数量: {product.quantity}
                  </p>
                </div>

                <p style={{ fontWeight: 600 }}>{product.price}</p>
              </div>
            ))}

            <div style={{ marginTop: '32px', textAlign: 'right', fontSize: '20px' }}>
              合計: ¥{totalPrice.toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}