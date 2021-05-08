<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Slider from '../components/Slider.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let value = 0;
	$: roundedValue = Math.round(value * 10 * 1e2) / 1e2;
	$: index = Math.floor(roundedValue / DIVIDER);

	const IMG_WIDTH = 600;
	const IMG_HEIGHT = 500;
	const IMG_LIMIT = 7;
	const DIVIDER = 1.42; // 10 / IMG_LIMIT

	const setValue = (v: typeof value) => (value = v);

	const draw = (i: number) => {
		ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = `sirozake/${i}.jpg`;
		const drawImageActualSize = () => {
			canvas.width = IMG_WIDTH;
			canvas.height = IMG_HEIGHT;
			ctx.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
		};
		img.onload = drawImageActualSize;
	};

	onMount(() => {
		draw(1);
	});

	afterUpdate(() => {
		if (index < IMG_LIMIT) {
			draw(index + 1);
		}
	});
</script>

<svelte:head>
	<title>Shirozake</title>
</svelte:head>

<Header image="interface/title_siro.png" />
<canvas bind:this={canvas} />
<Slider {value} {setValue} />
