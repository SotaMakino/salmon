<script lang="ts">
  export let src: string;
  export let srcset = '';
  export let width: number;
  export let height: number;
  export let alt = '';
  export let className = '';
  export let sizes = '';

</script>

<img class={className} {src} {srcset} {alt} {width} {height} {sizes} />
