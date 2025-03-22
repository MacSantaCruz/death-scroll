// src/lib/data/cardData.ts
export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  aspectRatio: "square" | "portrait" | "landscape";
  size: "small" | "medium" | "large" | "extra-large"; // Control card width/prominence
}

// Helper function to get random aspect ratio
const getRandomAspectRatio = (): "square" | "portrait" | "landscape" => {
  const ratios = ["square", "portrait", "landscape"];
  return ratios[Math.floor(Math.random() * ratios.length)] as
    | "square"
    | "portrait"
    | "landscape";
};

// Generate random picsum image URL with dimensions based on aspect ratio
const getPicsumUrl = (id: number, aspectRatio: string): string => {
  // Base dimensions
  let width = 400;
  let height = 400;

  // Adjust height based on aspect ratio
  if (aspectRatio === "portrait") {
    height = 600;
  } else if (aspectRatio === "landscape") {
    width = 600;
    height = 400;
  }

  return `https://picsum.photos/id/${id + 10}/${width}/${height}`;
};

// Mock data with 12 entries using Picsum Photos - with variable sizes
export const mockCards: CardData[] = [
  {
    id: 1,
    title: "Getting Started with SvelteKit",
    description:
      "Learn how to build modern web applications with SvelteKit and Tailwind CSS. This guide covers installation, project structure, and basic concepts.",
    tags: ["sveltekit", "tutorial", "beginner"],
    author: "Alex Chen",
    aspectRatio: "landscape",
    size: "large",
    image: "https://picsum.photos/id/11/800/500",
  },
  {
    id: 2,
    title: "Responsive Design Patterns",
    description:
      "Explore common responsive design patterns and how to implement them with Tailwind CSS. Perfect for creating adaptive layouts.",
    tags: ["design", "tailwind", "responsive"],
    author: "Sarah Johnson",
    aspectRatio: "portrait",
    size: "medium",
    image: "https://picsum.photos/id/12/400/700",
  },
  {
    id: 3,
    title: "Working with APIs in SvelteKit",
    description:
      "A comprehensive guide to fetching and displaying data from external APIs in your SvelteKit application. Includes error handling and caching strategies.",
    tags: ["api", "data", "fetch"],
    author: "Mike Rivera",
    aspectRatio: "square",
    size: "small",
    image: "https://picsum.photos/id/13/350/350",
  },
  {
    id: 4,
    title: "Animation Techniques",
    description:
      "Learn how to add smooth animations to your web application using CSS transitions and Svelte animations for an enhanced user experience.",
    tags: ["animation", "css", "transitions"],
    author: "Emma Chang",
    aspectRatio: "landscape",
    size: "small",
    image: "https://picsum.photos/id/14/500/300",
  },
  {
    id: 5,
    title: "Building a Dark Mode Toggle",
    description:
      "Implement a dark mode toggle with Svelte stores and Tailwind CSS. Learn how to save user preferences and apply themes dynamically.",
    tags: ["dark-mode", "accessibility", "user-experience"],
    author: "James Wilson",
    aspectRatio: "portrait",
    size: "extra-large",
    image: "https://picsum.photos/id/15/500/900",
  },
  {
    id: 6,
    title: "Form Validation in SvelteKit",
    description:
      "Best practices for implementing form validation in your SvelteKit applications. Covers client-side and server-side validation techniques.",
    tags: ["forms", "validation", "user-input"],
    author: "Lisa Patel",
    aspectRatio: "landscape",
    size: "medium",
    image: "https://picsum.photos/id/16/600/350",
  },
  {
    id: 7,
    title: "Performance Optimization",
    description:
      "Tips and tricks to optimize your SvelteKit application for better performance. Learn about code splitting, lazy loading, and more.",
    tags: ["performance", "optimization", "speed"],
    author: "David Kim",
    aspectRatio: "square",
    size: "small",
    image: "https://picsum.photos/id/17/350/350",
  },
  {
    id: 8,
    title: "Creating Custom Svelte Stores",
    description:
      "Learn how to create and use custom Svelte stores for state management in your application. Perfect for complex application states.",
    tags: ["state-management", "stores", "advanced"],
    author: "Olivia Martinez",
    aspectRatio: "portrait",
    size: "large",
    image: "https://picsum.photos/id/18/450/800",
  },
  {
    id: 9,
    title: "Skeleton UI Components",
    description:
      "How to create and implement skeleton loading states for a better user experience while content is loading in your SvelteKit app.",
    tags: ["ui", "loading", "skeleton"],
    author: "Ryan Taylor",
    aspectRatio: "square",
    size: "medium",
    image: "https://picsum.photos/id/19/450/450",
  },
  {
    id: 10,
    title: "SEO Optimization for SvelteKit",
    description:
      "Best practices for optimizing your SvelteKit application for search engines. Learn about metadata, sitemaps, and structured data.",
    tags: ["seo", "metadata", "optimization"],
    author: "Nina Lee",
    aspectRatio: "square",
    size: "small",
    image: "https://picsum.photos/id/20/320/320",
  },
  {
    id: 11,
    title: "Working with SVG Animations",
    description:
      "Learn how to create and animate SVG graphics in your SvelteKit application for engaging visual effects and illustrations.",
    tags: ["svg", "animation", "graphics"],
    author: "Carlos Rodriguez",
    aspectRatio: "landscape",
    size: "extra-large",
    image: "https://picsum.photos/id/21/800/450",
  },
  {
    id: 12,
    title: "Building a SvelteKit E-commerce Site",
    description:
      "A step-by-step guide to building an e-commerce website with SvelteKit, including product listings, cart functionality, and checkout process.",
    tags: ["e-commerce", "project", "advanced"],
    author: "Sophia Nguyen",
    aspectRatio: "portrait",
    size: "medium",
    image: "https://picsum.photos/id/22/400/650",
  },
];

// Export a function that returns randomized content for testing
export function getRandomCards(count = 12): CardData[] {
  // Shuffle array and return the specified number of cards
  return [...mockCards]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((card, index) => ({
      ...card,
      id: index + 1, // Reassign IDs to ensure uniqueness
    }));
}
