<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { DIVIDER, IMG_HEIGHT, IMG_LIMIT, IMG_WIDTH } from '../constant';

  type ImageItem = { id: number; el: HTMLImageElement };

  export let salmon: string;
  export let value = 0;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let store: ImageItem[] = [];
  let lastIndex = 0;
  $: roundedValue = Math.round(value * 10 * 1e2) / 1e2; // rounds like 0.xx
  $: index = Math.floor(roundedValue / DIVIDER);

  const getImageEl = (i: number, store: ImageItem[]): HTMLImageElement => {
    const found: ImageItem | null = store.find((item) => item.id == i);
    if (found != null) {
      return found.el;
    } else {
      const newImage = new Image();
      store.push({ id: i, el: newImage });
      return newImage;
    }
  };

  const loadImage = (i: number, store: ImageItem[], salmon: string): HTMLImageElement => {
    const img = getImageEl(i, store);
    img.src = `/${salmon}/${i}.webp`;
    return img;
  };

  const draw = (i: number, store: ImageItem[], salmon: string) => {
    const img = loadImage(i, store, salmon);
    const drawImageActualSize = () => {
      if (canvas != null) {
        canvas.width = IMG_WIDTH;
        canvas.height = IMG_HEIGHT;
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
      }
    };
    img.onload = drawImageActualSize;
  };

  const preload = () => {
    for (let i = IMG_LIMIT; i > 0; i--) {
      loadImage(i, store, salmon);
    }
  };

  onMount(() => {
    draw(1, store, salmon);
    preload();
  });

  afterUpdate(() => {
    if (index < IMG_LIMIT && index !== lastIndex) {
      draw(index + 1, store, salmon);
      lastIndex = index;
    }
  });

</script>

<canvas class="inline w-full h-full" bind:this={canvas} width={IMG_WIDTH} height={IMG_HEIGHT} />
