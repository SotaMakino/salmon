<script lang="ts">
  import Image from '../components/Image.svelte';
  import SalmonList from '../components/SalmonList.svelte';

</script>

<svelte:head>
  <title>Salmon</title>
</svelte:head>

<div class="absolute top-1/2 transform -translate-y-1/2">
  <div class="flex flex-col items-center px-16 pb-16">
    <Image src="/mainview/main_title.webp" width={300} height={100} />
    <SalmonList />
  </div>
</div>
