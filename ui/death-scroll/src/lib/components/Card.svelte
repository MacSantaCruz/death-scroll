<script>
  // Props for the card component with properly typed tags
  export let card = {
    id: 0,
    image: '',
    title: '',
    description: '',
    tags: /** @type {string[]} */ ([])
  };
</script>

<div class="card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div class="card-img">
    <img src={card.image} alt={card.title} class="w-full h-auto" />
  </div>
  <div class="p-4">
    <h3 class="h3 font-bold mb-2">{card.title}</h3>
    <p class="text-sm text-gray-600 mb-3">{card.description}</p>
    <div class="flex flex-wrap gap-1">
      {#each card.tags as tag}
        <span class="badge variant-soft-primary">{tag}</span>
      {/each}
    </div>
  </div>
</div>