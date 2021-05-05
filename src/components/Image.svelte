<script lang="ts">
	export let src: string;
	export let width: number;
	export let height: number;
	export let alt = '';
</script>

<img {src} {alt} {width} {height} />
