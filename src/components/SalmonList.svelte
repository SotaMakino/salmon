<script lang="ts">
  import { SALMONS } from '../constant';
  import Image from './Image.svelte';

</script>

<div class="flex flex-wrap">
  {#each SALMONS as name (name)}
    <a class="w-1/3" sveltekit:prefetch href={`/salmon/${name}`}>
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
