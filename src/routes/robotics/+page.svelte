<script lang="ts">
  import skills from "$lib/assets/projects/robotics/skills-v1.jpg";
  import rubiks from "$lib/assets/projects/robotics/rubiks.webp";
  import mobileRobot from "$lib/assets/projects/robotics/mobile-robot.jpg";
  import rocketEngine from "$lib/assets/projects/robotics/engine.webp";
  import Project from "$lib/components/project.svelte";
  import ImageView from "$lib/components/image-view.svelte";

  let drawer: ImageView | undefined = $state();
</script>

<div class="projects">
  <Project name="robotics.skills" images={[skills]} drawer={drawer!} />
  <Project name="robotics.rubiks" images={[rubiks]} drawer={drawer!} />
  <Project name="robotics.mobil" images={[mobileRobot]} drawer={drawer!} />
  <Project name="robotics.engine" images={[rocketEngine]} drawer={drawer!} />
  <ImageView bind:this={drawer} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
