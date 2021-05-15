<script lang="ts">
  export let src: string;
  export let width: number;
  export let height: number;
  export let alt = '';
  export let className = '';

</script>

<img class={className} {src} {alt} {width} {height} />
