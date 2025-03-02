import Link from "next/link"
import Image from "next/image"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: string
  title: string
  location: string
  price: number
  image: string
  beds: number
  baths: number
  sqft: number
  type: string
  status: "For Sale" | "For Rent"
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="group overflow-hidden rounded-lg border hover:shadow-md transition-shadow">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{property.status}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-bold truncate">{property.title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground truncate">{property.location}</span>
          </div>
          <div className="mt-3">
            <span className="text-xl font-bold">${property.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground ml-1">{property.type}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4 text-muted-foreground" />
              <span>{property.sqft} Sq Ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

