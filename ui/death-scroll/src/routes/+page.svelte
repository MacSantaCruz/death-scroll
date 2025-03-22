<script>
  import Card from '$lib/components/Card.svelte';

  // Mock data for the Pinterest-like cards
  const cards = [
    {
      id: 1,
      image: 'https://picsum.photos/300/400',
      title: 'Beautiful Landscape',
      description: 'A stunning view of mountains and lakes',
      tags: ['nature', 'travel', 'outdoors']
    },
    {
      id: 2,
      image: 'https://picsum.photos/300/300',
      title: 'Delicious Food',
      description: 'Homemade pasta with fresh ingredients',
      tags: ['food', 'cooking', 'recipes']
    },
    {
      id: 3,
      image: 'https://picsum.photos/300/450',
      title: 'Modern Architecture',
      description: 'Contemporary building designs in the city',
      tags: ['architecture', 'design', 'urban']
    },
    {
      id: 4,
      image: 'https://picsum.photos/300/350',
      title: 'Artistic Expression',
      description: 'Abstract art using vibrant colors',
      tags: ['art', 'creative', 'inspiration']
    },
    {
      id: 5,
      image: 'https://picsum.photos/300/250',
      title: 'Tech Gadgets',
      description: 'Latest innovations in technology',
      tags: ['tech', 'gadgets', 'innovation']
    },
    {
      id: 6,
      image: 'https://picsum.photos/300/380',
      title: 'Fitness Journey',
      description: 'Workout routines for staying healthy',
      tags: ['fitness', 'health', 'workout']
    },
    {
      id: 7,
      image: 'https://picsum.photos/300/420',
      title: 'Travel Destinations',
      description: 'Explore beautiful places around the world',
      tags: ['travel', 'adventure', 'exploration']
    },
    {
      id: 8,
      image: 'https://picsum.photos/300/320',
      title: 'DIY Projects',
      description: 'Creative home improvement ideas',
      tags: ['diy', 'crafts', 'hobbies']
    },
    {
      id: 9,
      image: 'https://picsum.photos/300/360',
      title: 'Fashion Trends',
      description: 'Latest styles and fashion inspiration',
      tags: ['fashion', 'style', 'trends']
    },
    {
      id: 10,
      image: 'https://picsum.photos/300/280',
      title: 'Pet Photography',
      description: 'Adorable moments with furry friends',
      tags: ['pets', 'animals', 'photography']
    },
    {
      id: 11,
      image: 'https://picsum.photos/300/340',
      title: 'Book Recommendations',
      description: 'Must-read books for your collection',
      tags: ['books', 'reading', 'literature']
    },
    {
      id: 12,
      image: 'https://picsum.photos/300/370',
      title: 'Garden Ideas',
      description: 'Beautiful garden designs and plant care tips',
      tags: ['gardening', 'plants', 'outdoors']
    }
  ];
</script>

<div class="container mx-auto p-4">
  <h1 class="h1 text-center mb-8">Pinterest-like Grid Layout</h1>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each cards as card (card.id)}
      <Card {card} />
    {/each}
  </div>
</div>