<script lang="ts">
  import { SALMONS } from '../constant';
  import Image from './Image.svelte';

</script>

<div class="flex flex-wrap">
  {#each SALMONS as name}
    <a class="w-1/3" sveltekit:prefetch href={`/salmon/${name}`}>
      <Image
        className="m-auto"
        src={`/mainview/main_${name}.webp`}
        width={320}
        height={220}
        alt={name}
      />
    </a>
  {/each}
</div>
