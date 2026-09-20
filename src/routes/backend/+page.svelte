<script lang="ts">
  import fmnV1 from "$lib/assets/projects/backend/fmn-v1.png";
  import fmnV2 from "$lib/assets/projects/backend/fmn-v2.png";
  import fmnV3 from "$lib/assets/projects/backend/fmn-v3.png";
  import ImageView from "$lib/components/image-view.svelte";
  import Project from "$lib/components/project.svelte";
  let drawer: ImageView | undefined = $state();
</script>

<div class="projects">
  <Project name="backend.fmn" images={[fmnV1, fmnV2, fmnV3]} drawer={drawer!} />
  <Project name="backend.pim" images={[]} drawer={drawer!} />
  <Project name="backend.users" images={[]} drawer={drawer!} />
  <Project name="backend.qpw" images={[]} drawer={drawer!} />
  <Project name="backend.deepdive" images={[]} drawer={drawer!} />
  <ImageView bind:this={drawer} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
