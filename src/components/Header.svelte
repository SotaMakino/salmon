<script lang="ts">
	import BackButton from './BackButton.svelte';
	import Image from './Image.svelte';

	export let image: string;
</script>

<header class="flex justify-between items-center p-3">
	<Image src={image} width={300} height={80} />
	<div class="pr-5">
		<BackButton />
	</div>
</header>
