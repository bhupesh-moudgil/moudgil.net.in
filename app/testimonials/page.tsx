import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "CloudTech Solutions",
      role: "CTO",
      content:
        "MatrixCraft transformed our cloud infrastructure. Their expertise in AWS and DevOps practices helped us reduce costs by 40% while improving performance.",
      rating: 5,
      image: "/professional-woman-avatar.jpg",
    },
    {
      name: "Michael Chen",
      company: "DataFlow Inc",
      role: "VP of Engineering",
      content:
        "The team's approach to system architecture was exceptional. They designed a scalable solution that grew with our business from 100 to 10,000 users seamlessly.",
      rating: 5,
      image: "/professional-man-avatar.jpg",
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Corp",
      role: "Security Director",
      content:
        "Their security and compliance expertise gave us peace of mind. They implemented enterprise-grade solutions that passed all our audits on the first try.",
      rating: 5,
      image: "/professional-woman-avatar-2.jpg",
    },
    {
      name: "David Park",
      company: "InnovateTech",
      role: "Founder & CEO",
      content:
        "Working with MatrixCraft was a game-changer. Their web development team built a modern, responsive platform that our users love. Highly recommended!",
      rating: 5,
      image: "/professional-man-avatar-2.jpg",
    },
    {
      name: "Lisa Thompson",
      company: "GlobalScale Systems",
      role: "Operations Manager",
      content:
        "The DevOps services streamlined our entire deployment process. What used to take hours now takes minutes. Their CI/CD pipeline is rock solid.",
      rating: 5,
      image: "/professional-woman-avatar-3.jpg",
    },
    {
      name: "James Wilson",
      company: "NextGen Analytics",
      role: "Database Administrator",
      content:
        "Their database optimization work was incredible. Query performance improved by 60%, and our infrastructure costs dropped significantly. Outstanding work!",
      rating: 5,
      image: "/professional-man-avatar-3.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Trusted by Industry <span className="gold-accent">Leaders</span>
              </h1>
              <p className="text-xl text-foreground/70 text-balance">
                See what our clients say about their experience working with MatrixCraft by Moudgil
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:border-gold transition"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-primary/10"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                      <p className="text-sm text-gold font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold gold-accent mb-2">500+</p>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold gold-accent mb-2">98%</p>
                <p className="text-foreground/70">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold gold-accent mb-2">150+</p>
                <p className="text-foreground/70">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold gold-accent mb-2">12+</p>
                <p className="text-foreground/70">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Join Our Success Stories?</h2>
            <p className="text-lg mb-8 opacity-90 text-balance">
              Let's discuss how MatrixCraft by Moudgil can help your business achieve its goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition gold-glow"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
