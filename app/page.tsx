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
        backgroundImage: "url('/999.png')",
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
                minHeight: '288px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontFamily:
                    '"Hiragino Mincho ProN", "Yu Mincho", "Times New Roman", serif',
                  fontSize: '68px',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: '0.04em',
                  color: '#1f1f1f',
                  textAlign: 'left',
                }}
              >
                日々の暮らしを支える
                <br />
                ささやかな贈り物
              </h2>
            </div>
          </div>
        </div>
      </section>

    
<section
  id="products"
  style={{
    background: 'white',
    padding: '0 0 64px',
  }}
>
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
    `}
  </style>

  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '340px',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}
  >
    <img
      src="/slide-1.png"
      alt="会員限定ビジュアル 1"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        animation: 'yukisakiSlideA 8s infinite',
      }}
    />

    <img
      src="/slide-2.png"
      alt="会員限定ビジュアル 2"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        animation: 'yukisakiSlideB 8s infinite',
      }}
    />
  </div>

  <div
    style={{
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '72px 24px 0',
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: '40px',
      alignItems: 'start',
    }}
  >
    <aside
      style={{
        position: 'sticky',
        top: '48px',
        borderTop: '1px solid rgba(0,0,0,0.18)',
        paddingTop: '18px',
      }}
    >
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

      <nav style={{ display: 'grid', gap: '12px' }}>
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
      <div
        style={{
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '30px', fontWeight: 600 }}>
          6月度ご紹介商品
        </h2>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '32px',
        }}
      >
        {sortedProducts.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                position: 'relative',
                height: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0,0,0,0.12)',
                borderRadius: '12px',
                background: '#fafafa',
                padding: '48px',
                overflow: 'hidden',
              }}
            >
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

              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
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