---
bgColor: "bg-gallery-1"
textColor: "text-base-900"
category: "Foto Ritratti"
title: "Ritratto Fine Art"
order: 0
description: "A series of intimate, painterly portraits evoking a quiet reverence for form, light, and human presence. Inspired by classical portraiture with a modern gaze."
# - Use `imageGrid` to control the grid container (e.g. columns, gaps, etc.)
# - Use `class` on each image to control its span and position in the grid
# - This gives you full visual control: overlap, asymmetry, large hero blocks, etc.
thumbnail:
  url: "/src/images/gallery/ritratti-fine-art/thumbnail.jpg"
  alt: "prova1"
  title: "Uomo ritratto"
# - Use `thumbnailClass` to control the span of the thumbnail image on GalleryLayout.astro
imageGrid: "grid grid-cols-3 md:grid-cols-1 ms:grid-cols-1 gap-8 text-black"
thumbnailClass: "lg:col-span-3 rounded w-full"
images:
  - url: "/src/images/gallery/ritratti-fine-art/1.jpeg"
    alt: "#_"
    title: "Ritratto2"
    class: "lg:col-span-1 lg:row-span-1 rounded"
  - url: "/src/images/gallery/ritratti-fine-art/2.jpeg"
    alt: "#_"
    title: "il mio titolo"
    class: "lg:col-span-1 lg:row-span-1 rounded"
  - url: "/src/images/gallery/ritratti-fine-art/3.jpeg"
    alt: "#_"
    title: "Ritratto3"
    class: "lg:col-span-1 lg:row-span-1 rounded"
  
---
