<script context="module" lang="ts">
	export const prerender = true;

	export const load = async ({ page }) => {
		if (page != null) {
			return {
				props: {
					salmon: page.params.salmon
				}
			};
		}
		return {
			error: new Error(`Something went wrong.`)
		};
	};
</script>

<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
	import Slider from '../../components/Slider.svelte';

	export let salmon: string;
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let store: { id: number; el: HTMLImageElement }[] = [];
	let value = 0;
	let lastIndex = 0;
	$: roundedValue = Math.round(value * 10 * 1e2) / 1e2;
	$: index = Math.floor(roundedValue / DIVIDER);

	const IMG_WIDTH = 600;
	const IMG_HEIGHT = 500;
	const IMG_LIMIT = 7;
	const DIVIDER = 1.42; // 10 / IMG_LIMIT

	const setValue = (v: typeof value): number => (value = v);

	const draw = (i: number) => {
		ctx = canvas.getContext('2d');
		const src = `/${salmon}/${i}.jpg`;
		const getImage = (): HTMLImageElement => {
			if (store.find((item) => item.id == i)) {
				return store.find((item) => item.id == i).el;
			} else {
				const newImage = new Image();
				store.push({ id: i, el: newImage });
				return newImage;
			}
		};
		const img = getImage();
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
	<meta name="description" content="added for master lighthouse." />
</svelte:head>

<Header image={`/interface/title_${salmon}.png`} />
<canvas bind:this={canvas} width={IMG_WIDTH} height={IMG_HEIGHT} />
<Slider {value} {setValue} />
