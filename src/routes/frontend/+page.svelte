<script lang="ts">
  import mosaicV1 from "$lib/assets/mosaic-v1.png";
  import mosaicV2 from "$lib/assets/mosaic-v2.png";
  import mosaicV3 from "$lib/assets/mosaic-v3.png";
  import deepDive from "$lib/assets/deep-dive-v2.png";
  import t from "$lib/translations/language.svelte";
  import icManagerV1 from "$lib/assets/icmanager-v1.jpg";
  import icManagerV2 from "$lib/assets/icmanager-v2.jpg";
</script>

<div class="projects">
  <span>
    <h2>{t("frontend.mosaic.title")}</h2>
    <div class="images">
      <img src={mosaicV1} alt={t("frontend.mosaic.title") + " 1"} />
      <img src={mosaicV2} alt={t("frontend.mosaic.title") + " 2"} />
      <img src={mosaicV3} alt={t("frontend.mosaic.title") + " 3"} />
    </div>
    <p>{t("frontend.mosaic.content")}</p>
  </span>

  <span>
    <h2>{t("frontend.deepdive.title")}</h2>
    <div class="images">
      <img src={deepDive} alt={t("frontend.deepdive.title")} />
    </div>
    <p>{t("frontend.deepdive.content")}</p>
  </span>

  <span>
    <h2>{t("frontend.pkp.title")}</h2>
    <div class="images">
      <img src={icManagerV1} alt={t("frontend.pkp.title") + " 1"} />
      <img src={icManagerV2} alt={t("frontend.pkp.title") + " 2"} />
    </div>
    <p>{t("frontend.pkp.content")}</p>
  </span>
</div>

<style>
  .projects {
    display: grid;
  }
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
  }
</style>
