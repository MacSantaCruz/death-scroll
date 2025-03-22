<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import { mockCards } from '$lib/data/cardData';
  
  // Use all 12 entries from the mock data file
  const cards = mockCards;
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8 text-center">Death Scroll</h1>
  
  <!-- Pinterest-like Masonry Grid -->
  <!-- Using CSS columns for a simple masonry layout -->
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
    {#each cards as card, i}
      <!-- The break-inside-avoid prevents cards from breaking across columns -->
      <div class="break-inside-avoid mb-6 group transform hover:z-10 transition-all duration-300">
        <Card {card} />
      </div>
    {/each}
  </div>
  
  <!-- Optional pagination or load more button -->
  <div class="mt-8 text-center">
    <button class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all">
      Load more
    </button>
  </div>
</div>

<style>
  /* Optional: Add some custom styles for the masonry layout */
  .columns-1 {
    column-count: 1;
  }
  
  @media (min-width: 640px) {
    .sm\:columns-2 {
      column-count: 2;
    }
  }
  
  @media (min-width: 768px) {
    .md\:columns-3 {
      column-count: 3;
    }
  }
  
  @media (min-width: 1024px) {
    .lg\:columns-4 {
      column-count: 4;
    }
  }
</style>