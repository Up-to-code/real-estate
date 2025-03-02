'use client'

export default function FeaturedProperties() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property Card 1 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357"
                alt="Luxury Villa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Luxury Villa</h3>
              <p className="text-sm text-muted-foreground">Beverly Hills, CA</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">$2,500,000</span>
                <span className="text-sm text-muted-foreground">5 bed • 4 bath</span>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <div className="h-full bg-muted" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Modern Apartment</h3>
              <p className="text-sm text-muted-foreground">Manhattan, NY</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">$1,200,000</span>
                <span className="text-sm text-muted-foreground">2 bed • 2 bath</span>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <div className="h-full bg-muted" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">Seaside Condo</h3>
              <p className="text-sm text-muted-foreground">Miami Beach, FL</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">$850,000</span>
                <span className="text-sm text-muted-foreground">3 bed • 2 bath</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 