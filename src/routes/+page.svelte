<script lang="ts">
  import portrait from "$lib/assets/portrait.jpg";
  import t from "$lib/translations/language.svelte";
</script>

<img alt="Emilia Glibowska" src={portrait} />
<p>{t("bio.content")}</p>

<style>
  img {
    width: 200px;
    border-radius: 25%;
    display: block;
    margin-inline: auto;
    aspect-ratio: 1;
  }
</style>
