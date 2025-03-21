
"use client"

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { X } from "lucide-react"

import { TextRotateRef } from "@/components/ui/text-rotate"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    twitter: "branislav_rodman",
    bio: "Photography enthusiast focusing on black and white portraits that capture genuine human emotions.",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1640680608781-2e4199dd1579?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
    twitter: "TimMossholder",
    bio: "Designer and photographer specializing in vibrant, colorful compositions that spark creativity.",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    twitter: "andriisolok",
    bio: "Documentary photographer capturing the essence of urban life and social gatherings.",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    twitter: "WesleyTingey",
    bio: "Nature photographer with a passion for water landscapes and the serene beauty of natural elements.",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    twitter: "styaglovsky",
    bio: "Portrait photographer exploring the relationship between humans and their environment.",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://images.unsplash.com/photo-1689553079282-45df1b35741b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    twitter: "vyelizarov",
    bio: "Artistic photographer specializing in portrait photography with natural elements and props.",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://images.unsplash.com/photo-1721968317938-cf8c60fccd1a?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    twitter: "egolovesov",
    bio: "Macro photographer finding beauty in the small details of nature that often go unnoticed.",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Mathilde Langevin",
    twitter: "mathildelangevin",
    bio: "Lifestyle photographer capturing everyday moments with artistic elegance and attention to detail.",
    link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
    title: "A table topped with two wine glasses and plates",
  },
]

function Item({
  index,
  image,
  link,
  onInView,
  author,
  twitter,
  bio,
}: {
  index: number
  image: string
  link: string
  author: string
  twitter: string
  bio: string
  onInView: (inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "-35% 0px -35% 0px", // Adjusted margin for better visibility
  })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      key={index}
      className="h-full w-full flex justify-center items-center snap-center py-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl px-4">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden rounded-xl">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt={`${author}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        </div>
        <div className="text-center md:text-left flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">{author}</h3>
          <div className="flex items-center justify-center md:justify-start gap-1 mt-1 mb-2">
            <X className="w-3.5 h-3.5 text-white" />
            <span className="text-sm text-white/80">@{twitter}</span>
          </div>
          <p className="text-white/70 text-sm max-w-xs">{bio}</p>
        </div>
      </div>
    </section>
  )
}

function Preview() {
  const textRotateRef = useRef<TextRotateRef>(null)
  const slicedImages = exampleImages.slice(1)

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index)
    }
  }

  return (
    <div className="w-full h-[70vh] flex">
      <div className="w-full h-full relative">
        {/* Removed the sticky header with text animation */}
        <div className="absolute inset-0 overflow-auto snap-y snap-mandatory">
          {slicedImages.map((image, index) => (
            <Item
              key={index}
              index={index}
              image={image.url}
              link={image.link}
              author={image.author}
              twitter={image.twitter}
              bio={image.bio}
              onInView={(inView) => handleInView(index, inView)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Preview }
