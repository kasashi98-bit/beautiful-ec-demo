import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'

type BrandPageProps = {
  params: Promise<{
    brand: string
  }>
}

const brandNames: Record<string, string> = {
  rolex: 'ROLEX',
  'audemars-piguet': 'AUDEMARS PIGUET',
  'patek-philippe': 'PATEK PHILIPPE',
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params
  const brandProducts = products.filter((product) => product.brandSlug === brand)
  const brandName = brandNames[brand]

  if (!brandName) {
    notFound()
  }

  return (
    <main style={{ minHeight: '100vh', background: '#080705', padding: '64px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#171716', textDecoration: 'none' }}>
          ← 会員ページへ戻る
        </Link>

        <h1 style={{ marginTop: '40px', fontSize: '42px', fontWeight: 500 }}>
          {brandName}
        </h1>

        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '32px',
          }}
        >
          {brandProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div
                style={{
                  height: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '12px',
                  background: 'white',
                  padding: '48px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>

              <h2 style={{ marginTop: '18px', fontSize: '18px', fontWeight: 500 }}>
                {product.name}
              </h2>

              <p style={{ marginTop: '8px', fontSize: '14px', fontWeight: 600 }}>
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}