'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'

type SortMode = 'default' | 'priceAsc' | 'priceDesc' | 'nameAsc'

function priceToNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ''))
}

export default function Home() {
  const [sortMode, setSortMode] = useState<SortMode>('default')

  const sortedProducts = useMemo(() => {
    const copiedProducts = [...products]

    if (sortMode === 'priceAsc') {
      return copiedProducts.sort(
        (a, b) => priceToNumber(a.price) - priceToNumber(b.price)
      )
    }

    if (sortMode === 'priceDesc') {
      return copiedProducts.sort(
        (a, b) => priceToNumber(b.price) - priceToNumber(a.price)
      )
    }

    if (sortMode === 'nameAsc') {
      return copiedProducts.sort((a, b) => a.name.localeCompare(b.name))
    }

    return copiedProducts
  }, [sortMode])

  const sortButtonStyle = (mode: SortMode) => ({
    border: '1px solid rgba(0,0,0,0.18)',
    background: sortMode === mode ? '#111' : 'white',
    color: sortMode === mode ? 'white' : '#1f1f1f',
    padding: '8px 12px',
    fontSize: '12px',
    letterSpacing: '0.08em',
    cursor: 'pointer',
  })

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/999.webP')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '19px clamp(24px, 5vw, 76px) 0',
        color: '#1f1f1f',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '19px',
          background: '#111',
          zIndex: 50,
        }}
      />
     <Link href="/cart" className="cart-link">
  マイカート
</Link>

      <section
        style={{
          background: '#f7f3ed',
          padding: '32px 24px 0',
        }}
      >
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontFamily:
                  '"Hiragino Mincho ProN", "Yu Mincho", "Times New Roman", serif',
                fontSize: '34px',
                fontWeight: 400,
                lineHeight: '1.1em',
                letterSpacing: '0.18em',
                color: '#1f1f1f',
              }}
            >
              ゆきさき
            </h1>

            <p
              style={{
                marginTop: '4px',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                color: '#6b665f',
              }}
            >
              会員限定マイページ
            </p>
          </div>

          <div
            style={{
              maxWidth: '920px',
              margin: '18px auto 0',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '1px',
                background: '#b8aa96',
              }}
            />

            <div
              style={{
                padding:'clamp(60px,8vw,96px)0clamp(72px,9vw,116px)',
              }}
            >
             <h2
  style={{
    margin: 0,
    fontFamily:
      '"Hiragino Mincho ProN", "Yu Mincho", "Times New Roman", serif',
    fontSize: 'clamp(26px, 6.2vw, 68px)',
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: '0.02em',
    color: '#1f1f1f',
    textAlign: 'left',
    maxWidth: '100%',
  }}
>
  <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
    日々の暮らしを支える
  </span>
  <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
    ささやかな贈り物
  </span>
</h2>
            </div>
          </div>
        </div>
      </section>

    
<section id="products" className="products-section">
  <style>
    {`
      @keyframes yukisakiSlideA {
        0%, 45% { opacity: 1; }
        50%, 95% { opacity: 0; }
        100% { opacity: 1; }
      }

      @keyframes yukisakiSlideB {
        0%, 45% { opacity: 0; }
        50%, 95% { opacity: 1; }
        100% { opacity: 0; }
      }

      .products-section {
        background: white;
        padding: 0 0 64px;
      }

      .visual-slider {
        position: relative;
        width: 100%;
        height: 340px;
        overflow: hidden;
        border-bottom: 1px solid rgba(0,0,0,0.08);
      }
.cart-link {
  position: fixed;
  top: 50px;
  right: clamp(78px, 6vw, 134px);
  z-index: 60;
  border: 1px solid rgba(226, 198, 198, 0.22);
  background: rgba(252, 250, 250, 0.9);
  color: #141313;
  padding: 10px 18px;
  font-size: 13px;
  letter-spacing: 0.12em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}

@media (max-width: 760px) {
  .cart-link {
    position: fixed;
    top: 44px;
    right: calc(clamp(24px, 5vw, 76px) + 16px);
    padding: 8px 12px;
    font-size: 11px;
    letter-spacing: 0.08em;
    white-space: nowrap;
  }
}

@media (max-width: 520px) {
  .cart-link {
    top: 38px;
    right: calc(clamp(24px, 5vw, 76px) + 10px);
    padding: 6px 9px;
    font-size: 10px;
    letter-spacing: 0.04em;
  }
}

@media (max-width: 380px) {
  .cart-link {
    top: 36px;
    right: calc(clamp(24px, 5vw, 76px) + 8px);
    padding: 5px 8px;
    font-size: 9px;
    letter-spacing: 0.02em;
  }
}
      .visual-slider img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .products-layout {
        max-width: 1120px;
        margin: 0 auto;
        padding: 72px 24px 0;
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 40px;
        align-items: start;
      }

      .brand-menu {
        position: sticky;
        top: 48px;
        border-top: 1px solid rgba(0,0,0,0.18);
        padding-top: 18px;
      }

      .brand-links {
        display: grid;
        gap: 12px;
      }

      .products-main-header {
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .sort-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 32px;
      }

      .product-image-box {
        position: relative;
        height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0,0,0,0.12);
        border-radius: 12px;
        background: #fafafa;
        padding: 48px;
        overflow: hidden;
      }

      .product-image-box img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      @media (max-width: 900px) {
        .products-layout {
          grid-template-columns: 1fr;
          gap: 36px;
          padding: 56px 24px 0;
        }

        .brand-menu {
          position: static;
        }

        .brand-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
        }

        .products-main-header {
          display: grid;
          gap: 18px;
        }

        .sort-buttons {
          justify-content: flex-start;
        }

        .products-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .visual-slider {
          height: 280px;
        }
      }

      @media (max-width: 560px) {
        .products-layout {
          padding: 44px 18px 0;
        }

        .products-grid {
          grid-template-columns: 1fr;
        }

        .product-image-box {
          height: 240px;
          padding: 44px;
        }

        .visual-slider {
          height: 220px;
        }
      }
    `}
  </style>

  <div className="visual-slider">
    <img
      src="/slide-1.webP"
      alt="会員限定ビジュアル 1"
      style={{ animation: 'yukisakiSlideA 8s infinite' }}
    />

    <img
      src="/slide-2.webP"
      alt="会員限定ビジュアル 2"
      loading="lazy"
      decoding="async"
      style={{ animation: 'yukisakiSlideB 8s infinite' }}
    />
  </div>

  <div className="products-layout">
    <aside className="brand-menu">
      <p
        style={{
          marginBottom: '16px',
          fontSize: '12px',
          letterSpacing: '0.18em',
          color: '#8a6f4d',
        }}
      >
        BRAND
      </p>

      <nav className="brand-links">
        <Link href="/brands/rolex" style={{ color: '#1f1f1f', textDecoration: 'none' }}>
          ROLEX
        </Link>

        <Link
          href="/brands/audemars-piguet"
          style={{ color: '#1f1f1f', textDecoration: 'none' }}
        >
          AUDEMARS PIGUET
        </Link>

        <Link
          href="/brands/patek-philippe"
          style={{ color: '#1f1f1f', textDecoration: 'none' }}
        >
          PATEK PHILIPPE
        </Link>
      </nav>
    </aside>

    <div>
      <div className="products-main-header">
        <h2 style={{ margin: 0, fontSize: '30px', fontWeight: 600 }}>
          6月度ご紹介商品
        </h2>

        <div className="sort-buttons">
          <button style={sortButtonStyle('default')} onClick={() => setSortMode('default')}>
            標準
          </button>
          <button style={sortButtonStyle('priceAsc')} onClick={() => setSortMode('priceAsc')}>
            価格が安い順
          </button>
          <button style={sortButtonStyle('priceDesc')} onClick={() => setSortMode('priceDesc')}>
            価格が高い順
          </button>
          <button style={sortButtonStyle('nameAsc')} onClick={() => setSortMode('nameAsc')}>
            ローマ字順
          </button>
        </div>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div className="product-image-box">
              {product.soldOut && (
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    border: '1px solid #b42318',
                    color: '#b42318',
                    background: 'rgba(255,255,255,0.88)',
                    padding: '4px 8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  SOLD OUT
                </span>
              )}

              <img src={product.image} 
              alt={product.name} 
              loading="lazy"
              decoding="async"
              />
            </div>

            <div style={{ marginTop: '20px' }}>
              <p
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a6f4d',
                }}
              >
                {product.category}
              </p>

              <div
                style={{
                  marginTop: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 500 }}>
                  {product.name}
                </h3>

                <p style={{ fontSize: '14px', fontWeight: 600 }}>
                  {product.price}
                </p>
              </div>

              <p style={{ marginTop: '12px', fontSize: '14px', color: '#6b665f' }}>
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>
</main>
  )
}