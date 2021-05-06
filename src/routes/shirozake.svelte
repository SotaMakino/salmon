<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Slider from '../components/Slider.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	const imgWidth = 600;
	const imgHeight = 500;

	const draw = () => {
		ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = `sirozake/1.jpg`;
		const drawImageActualSize = () => {
			canvas.width = imgWidth;
			canvas.height = imgHeight;
			ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
		};
		img.onload = drawImageActualSize;
	};

	onMount(() => {
		draw();
	});
</script>

<svelte:head>
	<title>Shirozake</title>
</svelte:head>

<Header image="interface/title_siro.png" />
<canvas bind:this={canvas} />
<Slider />
