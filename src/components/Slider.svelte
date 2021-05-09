<script lang="ts">
	import Slider from 'svelte-slider';
	import { ICON_SIZE } from '../layout';
	import Image from './Image.svelte';

	export let setValue: (v: number) => void;
</script>

<div class="flex items-center">
	<Image src="/interface/sea.png" width={ICON_SIZE} height={ICON_SIZE} />
	<div class="slider w-full">
		<Slider on:change={(event) => setValue(event.detail[1])} value={[0, 0]} single />
	</div>
	<Image src="/interface/river.png" width={ICON_SIZE} height={ICON_SIZE} />
</div>

<style>
	.slider {
		--sliderPrimary: #fa8072;
		--sliderSecondary: rgba(0, 0, 0, 0.175);
	}
</style>
