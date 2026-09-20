<script lang="ts">
  import t, { type Translation } from "$lib/translations/language.svelte";
  import ImageView from "./image-view.svelte";

  type Props = {
    name: string;
    images: string[];
    drawer: ImageView;
  };

  let { name: project, images, drawer }: Props = $props();
</script>

<span>
  <h2>{t(`${project}.title` as Translation)}</h2>
  {#if images}
    <div class="images">
      {#each images as image, i (image)}
        <button type="button" onclick={() => drawer.openDrawer(image)}>
          <img src={image} alt={`${`${project}.title`} ${i}`} />
        </button>
      {/each}
    </div>
  {/if}
  <p>{t(`${project}.content` as Translation)}</p>
</span>

<style>
  h2 {
    margin-block: 0.75rem;
  }
  p {
    margin-top: 0;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    margin-inline: 0.1rem;
    max-width: calc(90% / sibling-count());
    max-height: 200px;
  }
  img {
    object-fit: cover;
    display: block;
    border-radius: 0.5rem;
    border: 2px solid var(--color-accent);
    margin-inline: 0.1rem;
    max-height: 200px;
    margin-bottom: 1rem;
  }
  .images {
    display: flex;
    justify-content: center;
    margin-inline: auto;
    max-width: 300px;
  }

  @media (min-width: 500px) {
    button {
      max-width: calc(200px / sibling-count());
    }
    img {
      max-width: calc(200px / sibling-count());
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
  }
</style>
