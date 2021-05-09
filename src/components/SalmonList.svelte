<script lang="ts">
	import Image from './Image.svelte';

	export let pathnames: string[];
</script>

<div class="flex flex-wrap">
	{#each pathnames as name}
		<a class="w-1/3" sveltekit:prefetch href={`/salmon/${name}`}>
			<Image
				className="m-auto"
				src={`/mainview/main_${name}.jpg`}
				width={320}
				height={220}
				alt={name}
			/>
		</a>
	{/each}
</div>
