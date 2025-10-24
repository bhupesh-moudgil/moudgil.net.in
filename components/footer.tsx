import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-gold" />
            <div>
              <p className="text-sm opacity-75">Phone</p>
              <p className="font-semibold">+91 (98) 1234-5678</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-gold" />
            <div>
              <p className="text-sm opacity-75">Email</p>
              <p className="font-semibold">info@moudgil.net.in</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-gold" />
            <div>
              <p className="text-sm opacity-75">Address</p>
              <p className="font-semibold"> Punjab, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 MatrixCraft by Moudgil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
