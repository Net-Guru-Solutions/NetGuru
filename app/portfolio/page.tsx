"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce",
    description: "Our best E-commerce solutions.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ecommerce",
  },
  {
    id: 2,
    title: "Logos",
    description: "Creative logos for your brand.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "logos",
  },
  {
    id: 3,
    title: "Landing Pages",
    description: "High converting landing pages.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "landing",
  },
  {
    id: 4,
    title: "Consultancy Firms",
    description: "Consulting services for businesses.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661665305417-dcd04e05f7fe?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "consultancy",
  },
  {
    id: 5,
    title: "Tradesmen",
    description: "Professional websites for tradesmen.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677700375016-efecc99bc526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "tradesmen",
  },
  {
    id: 6,
    title: "Social Media Apps",
    description: "Engaging social media applications.",
    imageUrl: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "social",
  },
];

export default function PortfolioPage() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Link href={`/portfolio/${item.category}`} key={item.id}>
            <motion.a
              className="relative block overflow-hidden rounded-lg shadow-lg group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-64">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-75" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-all duration-500 group-hover:bg-opacity-75">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
}
