'use client'

import { useState } from 'react'

type CartItem = {
  id: string
  quantity: number
}

type AddToCartButtonProps = {
  productId: string
  soldOut?: boolean
}

const CART_STORAGE_KEY = 'yukisaki-cart'

export default function AddToCartButton({
  productId,
  soldOut,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    const cart: CartItem[] = savedCart ? JSON.parse(savedCart) : []

    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ id: productId, quantity: 1 })
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    setAdded(true)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={soldOut}
      style={{
        border: '1px solid #111',
        background: soldOut ? '#999' : '#111',
        color: 'white',
        padding: '14px 24px',
        fontSize: '13px',
        letterSpacing: '0.12em',
        cursor: soldOut ? 'not-allowed' : 'pointer',
      }}
    >
      {soldOut ? 'SOLD OUT' : added ? '追加しました' : 'カートに入れる'}
    </button>
  )
}