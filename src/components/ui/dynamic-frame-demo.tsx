
"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const judgesFrames = [
  {
    id: 1,
    video: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://pbs.twimg.com/profile_images/1856486626072915968/JEQpB9CW_400x400.jpg",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://pbs.twimg.com/profile_images/1878086921726943233/vOx1kjeP_400x400.jpg",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://pbs.twimg.com/profile_images/1619147369999917056/5jd5MK9C_400x400.jpg",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
]

export function DynamicFrameDemo() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <DynamicFrameLayout 
        frames={judgesFrames} 
        className="w-full h-full" 
        hoverSize={6}
        gapSize={4}
      />
    </div>
  )
}
