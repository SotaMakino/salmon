<script lang="ts">
  import { SALMONS } from '../constant';
  import Image from './Image.svelte';

</script>

<div class="flex flex-wrap max-w-screen-lg">
  {#each SALMONS as name (name)}
    <a
      class="w-full md:w-1/3 transform transition-transform hover:scale-110"
      sveltekit:prefetch
      href={`/salmon/${name}`}
    >
      <Image
        className="m-auto"
        src={`/mainview/main_${name}.webp`}
        srcset={`/mainview/main_${name}.webp 480w, /mainview/main_${name}_lg.webp 1080w`}
        width={320}
        height={220}
        alt={name}
        sizes="50vw"
      />
    </a>
  {/each}
</div>
