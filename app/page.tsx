"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlobeAnimation } from "@/components/globe-animation"
import Link from "next/link"
import { Cloud, Code, Zap, Shield, Database, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS, GCP, and Azure deployment and management solutions",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications and modern frontend solutions",
    },
    {
      icon: Zap,
      title: "DevOps Services",
      description: "CI/CD pipelines, containerization, and automation",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance solutions",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Database design, optimization, and management",
    },
    {
      icon: Cpu,
      title: "System Architecture",
      description: "Scalable and resilient system design",
    },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none animate-pulse">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M10,10 L50,30 L80,10 M50,30 L70,60 M80,10 L100,40 L120,20 M70,60 L100,80 M100,40 L130,70 M120,20 L150,50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-2xl">
                <h1
                  className={`text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance transition-all duration-1000 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  Enterprise IT Solutions for <span className="gold-accent">Global Scale</span>
                </h1>
                <p
                  className={`text-xl text-foreground/70 mb-8 text-balance transition-all duration-1000 delay-200 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  MatrixCraft delivers comprehensive IT services including cloud infrastructure, web development,
                  DevOps, and networking solutions tailored to your business needs.
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <Link
                    href="/contact"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 hover:scale-105 transition text-center transform gold-glow"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    href="/testimonials"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary/5 hover:scale-105 transition text-center transform"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>

              {/* Right Globe Animation */}
              <div
                className={`relative h-96 md:h-full min-h-96 transition-all duration-1000 delay-500 flex items-center justify-center ${
                  isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <GlobeAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Our <span className="gold-accent">Services</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Comprehensive IT solutions designed to transform your business and accelerate growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className={`bg-background border border-border rounded-lg p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-gold ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      transitionDelay: isLoaded ? `${400 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Cloud Platforms We <span className="gold-accent">Support</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Expert deployment and management across leading cloud providers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Amazon Web Services", desc: "EC2, S3, Lambda, RDS, and more" },
                { name: "Google Cloud Platform", desc: "Compute Engine, Cloud Storage, BigQuery" },
                { name: "Microsoft Azure", desc: "Virtual Machines, App Service, SQL Database" },
              ].map((platform, index) => (
                <div
                  key={index}
                  className={`bg-primary/5 border border-primary/20 rounded-lg p-8 text-center hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer hover:border-gold ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isLoaded ? `${700 + index * 100}ms` : "0ms",
                  }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
                  <p className="text-foreground/70">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none animate-pulse">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M10,10 L50,30 L80,10 M50,30 L70,60 M80,10 L100,40 L120,20 M70,60 L100,80 M100,40 L130,70 M120,20 L150,50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg mb-8 opacity-90 text-balance">
              Let's discuss how MatrixCraft by Moudgil can help your business scale and succeed
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 hover:scale-105 transition transform gold-glow"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
