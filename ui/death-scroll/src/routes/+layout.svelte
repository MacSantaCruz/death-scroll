<script>
  import { setContextClient } from '@urql/svelte';
  import { client } from '$lib/graphql-client';
  import '../app.css';
  setContextClient(client);
</script>

<slot />
