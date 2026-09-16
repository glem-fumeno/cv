<script lang="ts">
  import skills from "$lib/assets/skills-v1.jpg";
  import rubiks from "$lib/assets/rubiks.webp";
  import mobileRobot from "$lib/assets/mobile-robot.jpg";
  import rocketEngine from "$lib/assets/engine.webp";
  import t from "$lib/translations/language.svelte";
</script>

<h2>{t("robotics.skills.title")}</h2>
<span>
  <img src={skills} alt={t("robotics.skills.title")} />
  <p>{t("robotics.skills.content")}</p>
</span>

<h2>{t("robotics.rubiks.title")}</h2>
<span>
  <p>{t("robotics.rubiks.content")}</p>
  <img src={rubiks} alt={t("robotics.rubiks.title")} />
</span>

<h2>{t("robotics.mobil.title")}</h2>
<span>
  <img src={mobileRobot} alt={t("robotics.mobil.content")} />
  <p>{t("robotics.mobil.content")}</p>
</span>

<h2>{t("robotics.engine.title")}</h2>
<span>
  <p>{t("robotics.engine.content")}</p>
  <img src={rocketEngine} alt={t("robotics.engine.title")} />
</span>

<style>
  h2 {
    margin-block: 1rem;
  }
  img {
    object-fit: cover;
    display: block;
    aspect-ratio: 4 / 3;
    border-radius: 0.5rem;
    margin-block: 1.5rem;
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
