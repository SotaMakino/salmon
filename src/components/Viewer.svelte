<script lang="ts">
  import { afterUpdate, onMount } from 'svelte';
  import { IMG_HEIGHT, IMG_INITIAL_INDEX, IMG_LIMIT, IMG_WIDTH } from '../constant';

  type ImageItem = { id: number; el: HTMLImageElement };

  export let salmon: string;
  export let index: number;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let imageList: ImageItem[] = [];
  let lastIndex = IMG_INITIAL_INDEX;

  const getImageEl = (i: number): HTMLImageElement => {
    const found: ImageItem | null = imageList.find((item) => item.id == i);
    if (found != null) {
      return found.el;
    } else {
      const newImage = new Image();
      imageList.push({ id: i, el: newImage });
      return newImage;
    }
  };

  const loadImage = (i: number): HTMLImageElement => {
    const img = getImageEl(i);
    img.src = `/${salmon}/${i}.webp`;
    return img;
  };

  const draw = (i: number) => {
    const img = loadImage(i);
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

  const preloadImageAll = () => {
    for (let i = IMG_LIMIT; i > 0; i--) {
      loadImage(i);
    }
  };

  onMount(() => {
    draw(index);
    preloadImageAll();
  });

  afterUpdate(() => {
    if (index != lastIndex) {
      draw(index);
    }
    lastIndex = index;
  });

</script>

<canvas
  class="absolute w-full h-full object-cover"
  bind:this={canvas}
  width={IMG_WIDTH}
  height={IMG_HEIGHT}
/>
