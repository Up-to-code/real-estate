'use client'

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/10" />
            <div className="space-y-2">
              <h3 className="font-bold">John Doe</h3>
              <p className="text-sm text-muted-foreground">
                "Found my dream home through EstateHub. The process was smooth and professional."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/10" />
            <div className="space-y-2">
              <h3 className="font-bold">Jane Smith</h3>
              <p className="text-sm text-muted-foreground">
                "Excellent service and very knowledgeable agents. Highly recommended!"
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/10" />
            <div className="space-y-2">
              <h3 className="font-bold">Mike Johnson</h3>
              <p className="text-sm text-muted-foreground">
                "The best real estate platform I've used. Simple and effective."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 