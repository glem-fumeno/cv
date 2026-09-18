<script lang="ts">
  import t, { type Translation } from "$lib/translations/language.svelte";

  type Props = {
    name: string;
    images: string[];
  };

  let { name: project, images }: Props = $props();
</script>

<span>
  <h2>{t(`${project}.title` as Translation)}</h2>
  <div class="images">
    {#each images as image, i (image)}
      <img src={image} alt={`${`${project}.title`} ${i}`} />
    {/each}
  </div>
  <p>{t(`${project}.content` as Translation)}</p>
</span>

<style>
  h2 {
    margin-block: 1rem;
  }
  span {
    &:nth-of-type(odd) {
      .images {
        float: left;
        margin-right: 1rem;
      }
    }
    &:nth-of-type(even) {
      .images {
        float: right;
        margin-left: 1rem;
      }
    }
  }
  img {
    object-fit: cover;
    display: inline-block;
    border-radius: 0.5rem;
    border: 2px solid var(--color-accent);
    width: calc(200px / sibling-count());
    margin-right: 0.2rem;
  }
</style>
