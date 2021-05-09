<script lang="ts">
	import Image from '../components/Image.svelte';
	import SalmonList from '../components/SalmonList.svelte';

	const salmons = ['sakura', 'benizake', 'masuno', 'sirozake', 'karahuto', 'ginzake'];
</script>

<svelte:head>
	<title>Salmon</title>
</svelte:head>

<div class="flex flex-col items-center pt-5">
	<Image src="/main/main_title.png" width={300} height={100} />
	<SalmonList pathnames={salmons} />
</div>
