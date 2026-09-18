<script lang="ts">
  import skills from "$lib/assets/skills-v1.jpg";
  import rubiks from "$lib/assets/rubiks.webp";
  import mobileRobot from "$lib/assets/mobile-robot.jpg";
  import rocketEngine from "$lib/assets/engine.webp";
  import t from "$lib/translations/language.svelte";
</script>

<div class="projects">
  <span>
    <h2>{t("robotics.skills.title")}</h2>
    <div class="images">
      <img src={skills} alt={t("robotics.skills.title")} />
    </div>
    <p>{t("robotics.skills.content")}</p>
  </span>

  <span>
    <h2>{t("robotics.rubiks.title")}</h2>
    <div class="images">
      <img src={rubiks} alt={t("robotics.rubiks.title")} />
    </div>
    <p>{t("robotics.rubiks.content")}</p>
  </span>

  <span>
    <h2>{t("robotics.mobil.title")}</h2>
    <div class="images">
      <img src={mobileRobot} alt={t("robotics.mobil.content")} />
    </div>
    <p>{t("robotics.mobil.content")}</p>
  </span>

  <span>
    <h2>{t("robotics.engine.title")}</h2>
    <div class="images">
      <img src={rocketEngine} alt={t("robotics.engine.title")} />
    </div>
    <p>{t("robotics.engine.content")}</p>
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
