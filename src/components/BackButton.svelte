<script lang="ts">
  import { ICON_SIZE } from '../constant';
  import Image from './Image.svelte';

</script>

<button class="hover:bg-gray-300 rounded">
  <a href="/">
    <Image src="/interface/back.webp" alt="back" width={ICON_SIZE} height={ICON_SIZE} />
  </a>
</button>
