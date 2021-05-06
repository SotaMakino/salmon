<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Slider from '../components/Slider.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let value = 0;

	const IMG_WIDTH = 600;
	const IMG_HEIGHT = 500;

	const setValue = (v: number) => (value = v);

	const draw = () => {
		ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = `sirozake/1.jpg`;
		const drawImageActualSize = () => {
			canvas.width = IMG_WIDTH;
			canvas.height = IMG_HEIGHT;
			ctx.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
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
<Slider {value} {setValue} />
