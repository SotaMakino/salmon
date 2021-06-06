<script context="module" lang="ts">
  export const prerender = true;

  export const load = async ({
    page: {
      params: { salmon }
    }
  }: LoadInput): Promise<LoadOutput> => {
    if (SALMONS.includes(salmon)) {
      return {
        props: {
          salmon
        }
      };
    }
    // will respond with a generic 404.
    return;
  };

</script>

<script lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';
  import Header from '../../components/Header.svelte';
  import Slider from '../../components/Slider.svelte';
  import Viewer from '../../components/Viewer.svelte';
  import { IMG_INITIAL_INDEX, SALMONS } from '../../constant';

  export let salmon: string;
  $: index = IMG_INITIAL_INDEX;

</script>

<svelte:head>
  <title>{salmon}</title>
</svelte:head>

<div class="flex flex-col z-10">
  <div class="z-10"><Header image={`/interface/title_${salmon}.webp`} /></div>
  <div class="relative transform scale-75 pb-10/12 sm:pb-3/4 md:pb-1/2 lg:pb-1/3">
    <Viewer {salmon} bind:index />
  </div>
  <div class=" w-96 z-10 absolute bottom-0 left-0 right-0 mx-auto py-20">
    <Slider bind:index />
  </div>
</div>
