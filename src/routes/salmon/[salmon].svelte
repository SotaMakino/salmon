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
  import { SALMONS } from '../../constant';

  export let salmon: string;
  let value = 0;

  const setValue = (v: typeof value) => {
    value = v;
  };

</script>

<svelte:head>
  <title>{salmon}</title>
</svelte:head>

<div class="flex flex-col z-10">
  <div class="z-10"><Header image={`/interface/title_${salmon}.webp`} /></div>
  <div class="w-full h-full text-center absolute top-0 left-0 px-56">
    <Viewer {salmon} {value} />
  </div>
  <div class=" w-96 z-10 absolute bottom-0 left-0 right-0 mx-auto py-20">
    <Slider {setValue} />
  </div>
</div>
