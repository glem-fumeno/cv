<script lang="ts">
  import fmnV1 from "$lib/assets/fmn-v1.png";
  import fmnV2 from "$lib/assets/fmn-v3.png";
  import fmnV3 from "$lib/assets/fmn-v2.png";
  import pim from "$lib/assets/pim.png";
  import users from "$lib/assets/users.png";
  import qpw from "$lib/assets/qpw.png";
  import deepDive from "$lib/assets/deep-dive-v1.png";
  import t from "$lib/translations/language.svelte";
</script>

<div class="projects">
  <span>
    <h2>{t("backend.fmn.title")}</h2>
    <div class="images">
      <img src={fmnV1} alt={t("backend.fmn.title") + " 1"} />
      <img src={fmnV2} alt={t("backend.fmn.title") + " 2"} />
      <img src={fmnV3} alt={t("backend.fmn.title") + " 3"} />
    </div>
    <p>{t("backend.fmn.content")}</p>
  </span>

  <span>
    <h2>{t("backend.pim.title")}</h2>
    <div class="images">
      <img src={pim} alt={t("backend.pim.title")} />
    </div>
    <p>{t("backend.pim.content")}</p>
  </span>

  <span>
    <h2>{t("backend.users.title")}</h2>
    <div class="images">
      <img src={users} alt={t("backend.users.title")} />
    </div>
    <p>{t("backend.users.content")}</p>
  </span>

  <span>
    <h2>{t("backend.qpw.title")}</h2>
    <div class="images">
      <img src={qpw} alt={t("backend.qpw.title")} />
    </div>
    <p>{t("backend.qpw.content")}</p>
  </span>

  <span>
    <h2>{t("backend.deepdive.title")}</h2>
    <div class="images">
      <img src={deepDive} alt={t("backend.deepdive.title")} />
    </div>
    <p>{t("backend.deepdive.content")}</p>
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
