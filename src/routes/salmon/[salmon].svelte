<script context="module" lang="ts">
	export const prerender = true;

	export const load = async ({
		page: {
			params: { salmon }
		}
	}: LoadInput): Promise<LoadOutput> => {
		if (SALMONS.includes(salmon)) {
			return {
				props: {
					salmon
				}
			};
		}
		// will respond with a generic 404.
		return;
	};
</script>

<script lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types/page';
	import { afterUpdate, onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
	import Slider from '../../components/Slider.svelte';
	import { DIVIDER, IMG_HEIGHT, IMG_LIMIT, IMG_WIDTH, SALMONS } from '../../constant';

	export let salmon: string;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let store: { id: number; el: HTMLImageElement }[] = [];
	let value = 0;
	let lastIndex = 0;
	$: roundedValue = Math.round(value * 10 * 1e2) / 1e2;
	$: index = Math.floor(roundedValue / DIVIDER);

	const setValue = (v: typeof value) => {
		value = v;
	};

	const draw = (i: number) => {
		ctx = canvas.getContext('2d');
		const src = `/${salmon}/${i}.jpg`;
		const getImageEl = (): HTMLImageElement => {
			if (store.find((item) => item.id == i)) {
				return store.find((item) => item.id == i).el;
			} else {
				const newImage = new Image();
				store.push({ id: i, el: newImage });
				return newImage;
			}
		};
		const img = getImageEl();
		img.src = src;
		const drawImageActualSize = () => {
			if (canvas != null) {
				canvas.width = IMG_WIDTH;
				canvas.height = IMG_HEIGHT;
				ctx.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
			}
		};
		img.onload = drawImageActualSize;
	};

	onMount(() => {
		draw(1);
	});

	afterUpdate(() => {
		if (index < IMG_LIMIT && index !== lastIndex) {
			draw(index + 1);
			lastIndex = index;
		}
	});
</script>

<svelte:head>
	<title>{salmon}</title>
</svelte:head>

<div class="flex flex-col z-10">
	<div class="z-10"><Header image={`/interface/title_${salmon}.png`} /></div>
	<div class="w-full h-full text-center absolute top-0 left-0 px-56">
		<canvas class="inline w-full h-full" bind:this={canvas} width={IMG_WIDTH} height={IMG_HEIGHT} />
	</div>
	<div class=" w-96 z-10 absolute bottom-0 left-0 right-0 mx-auto py-20">
		<Slider {setValue} />
	</div>
</div>
