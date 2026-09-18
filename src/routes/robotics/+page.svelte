<script lang="ts">
  import skills from "$lib/assets/projects/robotics/skills-v1.jpg";
  import rubiks from "$lib/assets/projects/robotics/rubiks.webp";
  import mobileRobot from "$lib/assets/projects/robotics/mobile-robot.jpg";
  import rocketEngine from "$lib/assets/projects/robotics/engine.webp";
  import Project from "$lib/components/project.svelte";
</script>

<div class="projects">
  <Project name="robotics.skills" images={[skills]} />
  <Project name="robotics.rubiks" images={[rubiks]} />
  <Project name="robotics.mobil" images={[mobileRobot]} />
  <Project name="robotics.engine" images={[rocketEngine]} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
