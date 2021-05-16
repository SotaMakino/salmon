<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Image from '../components/Image.svelte';
  import SalmonList from '../components/SalmonList.svelte';

  let isVisible = false;

  onMount(() => (isVisible = true));

</script>

<svelte:head>
  <title>Salmon</title>
</svelte:head>

{#if isVisible}
  <div
    class="flex flex-col items-center justify-center px-16 pb-16 h-screen"
    in:fade={{ delay: 200 }}
  >
    <Image src="/mainview/main_title.webp" width={300} height={100} />
    <SalmonList />
  </div>
{/if}
