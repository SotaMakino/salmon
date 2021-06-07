<script lang="ts">
  import { ICON_SIZE, IMG_INITIAL_INDEX, IMG_LIMIT } from '../constant';
  import Image from './Image.svelte';

  export let index: number;

</script>

<div class="flex items-center">
  <Image src="/interface/sea.webp" width={ICON_SIZE} height={ICON_SIZE} />
  <label class="slider w-full">
    <input
      class="w-full cursor-pointer"
      type="range"
      bind:value={index}
      min={IMG_INITIAL_INDEX}
      max={IMG_LIMIT}
    />
  </label>
  <Image src="/interface/river.webp" width={ICON_SIZE} height={ICON_SIZE} />
</div>
