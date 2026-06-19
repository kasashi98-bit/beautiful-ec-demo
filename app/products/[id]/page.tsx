import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((item) => item.id === id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#1f1f1f]">
      <div className="px-6 py-6 md:px-16">
        <Link href="/" className="text-sm text-[#6b665f]">
          ← 商品一覧へ戻る
        </Link>
      </div>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 md:grid-cols-2 md:px-16 md:pb-28">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-16">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8a6f4d]">
            {product.category}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-semibold">{product.price}</p>

          <p className="mt-8 text-base leading-8 text-[#5f5a52]">
            {product.detail}
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-[#1f1f1f] px-7 py-4 text-sm font-medium text-white">
              カートに入れる
            </button>

            <Link
              href="/"
              className="rounded-full border border-[#1f1f1f]/20 px-7 py-4 text-sm font-medium"
            >
              他の商品を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}