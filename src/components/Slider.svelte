<script lang="ts">
	import Slider from 'svelte-slider';

	export let value = 0;
</script>

<div class="slider">
	<Slider on:change={(event) => (value = event.detail[1])} value={[0, 0]} single />
	Slider value: {value}
</div>

<style>
	.slider {
		--sliderPrimary: #fa8072;
		--sliderSecondary: rgba(0, 0, 0, 0.175);
		margin: 16px;
	}
</style>
