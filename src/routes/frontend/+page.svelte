<script lang="ts">
  import mosaicV1 from "$lib/assets/projects/frontend/mosaic-v1.png";
  import mosaicV2 from "$lib/assets/projects/frontend/mosaic-v2.png";
  import mosaicV3 from "$lib/assets/projects/frontend/mosaic-v3.png";
  import deepDive from "$lib/assets/projects/frontend/deep-dive.png";
  import icManagerV1 from "$lib/assets/projects/frontend/icmanager-v1.jpg";
  import icManagerV2 from "$lib/assets/projects/frontend/icmanager-v2.jpg";
  import Project from "$lib/components/project.svelte";
</script>

<div class="projects">
  <Project name="frontend.mosaic" images={[mosaicV1, mosaicV2, mosaicV3]} />
  <Project name="frontend.pkp" images={[icManagerV1, icManagerV2]} />
  <Project name="frontend.deepdive" images={[deepDive]} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
