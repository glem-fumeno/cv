<script lang="ts">
  import mosaicV1 from "$lib/assets/mosaic-v1.png";
  import mosaicV2 from "$lib/assets/mosaic-v2.png";
  import mosaicV3 from "$lib/assets/mosaic-v3.png";
  import deepDive from "$lib/assets/deep-dive-v2.png";
  import t from "$lib/translations/language.svelte";
</script>

<h2>{t("frontend.mosaic.title")}</h2>
<span>
  <div class="images">
    <img src={mosaicV1} alt={t("frontend.mosaic.title") + " 1"} />
    <img src={mosaicV2} alt={t("frontend.mosaic.title") + " 2"} />
    <img src={mosaicV3} alt={t("frontend.mosaic.title") + " 3"} />
  </div>
  <p>{t("frontend.mosaic.content")}</p>
</span>

<h2>{t("frontend.deepdive.title")}</h2>
<span>
  <p>{t("frontend.deepdive.content")}</p>
  <img src={deepDive} alt={t("frontend.deepdive.title")} />
</span>

<h2>{t("frontend.pkp.title")}</h2>
<span>
  <p style="grid-column: 1 / -1">{t("frontend.pkp.content")}</p>
</span>

<style>
  h2 {
    margin-block: 1rem;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
    img {
      aspect-ratio: auto;
    }
  }
  img {
    margin-block: 1.5rem;
    object-fit: cover;
    display: block;
    border-radius: 0.5rem;
    border: 2px solid var(--color-accent);
  }
  span {
    display: grid;
    gap: 1rem;

    &:nth-of-type(odd) {
      grid-template-columns: 200px 1fr;
    }
    &:nth-of-type(even) {
      grid-template-columns: 1fr 200px;
    }
  }
</style>
