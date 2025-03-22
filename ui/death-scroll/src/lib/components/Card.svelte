<script lang='ts'>
  import type { CardData } from '$lib/data/cardData';

  // Props for the card component
  export let card: CardData;

  // Determine the aspect ratio class based on the card property
  const getAspectRatioClass = (ratio: string): string => {
    switch (ratio) {
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/5]'; // More extreme portrait ratio
      case 'landscape': return 'aspect-[16/9]';
      default: return 'aspect-square';
    }
  };

  // Determine the size class based on the card property
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'small': return 'w-full';
      case 'medium': return 'w-full';
      case 'large': return 'w-full'; 
      case 'extra-large': return 'w-full';
      default: return 'w-full';
    }
  };

  const aspectRatioClass = getAspectRatioClass(card.aspectRatio);
  const sizeClass = getSizeClass(card.size || 'medium');
</script>

<a
  href={`/post/${card.id}`}
  class="card relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
>
  <!-- Image container with dynamic aspect ratio -->
  <header class="overflow-hidden rounded-t-lg">
    <img 
      src={card.image} 
      class={`w-full ${aspectRatioClass} object-cover transition-transform duration-300 hover:scale-105 hover:grayscale-0`}
      alt={card.title} 
    />
  </header>
  
  <!-- Card content -->
  <article class="p-4 bg-white dark:bg-slate-800 rounded-b-lg">
    <!-- Tags -->
    {#if card.tags.length > 0}
      <div class="flex flex-wrap gap-1 mb-2">
        {#each card.tags as tag}
          <span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">{tag}</span>
        {/each}
      </div>
    {/if}
    
    <!-- Title -->
    <h3 class="text-lg font-bold mb-2 line-clamp-2">{card.title}</h3>
    
    <!-- Description with line clamping -->
    <p class="text-sm opacity-75 line-clamp-3 mb-3">
      {card.description}
    </p>
    
    <!-- Footer -->
    <div class="flex items-center justify-between text-xs opacity-60 pt-2 border-t border-slate-200 dark:border-slate-700">
      <span>By {card.author}</span>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  </article>

</a>