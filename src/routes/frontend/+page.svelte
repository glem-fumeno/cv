<script lang="ts">
  import mosaicV1 from "$lib/assets/projects/frontend/mosaic-v1.png";
  import mosaicV2 from "$lib/assets/projects/frontend/mosaic-v2.png";
  import mosaicV3 from "$lib/assets/projects/frontend/mosaic-v3.png";
  import icmgrV1 from "$lib/assets/projects/frontend/icmanager-v1.jpg";
  import icmgrV2 from "$lib/assets/projects/frontend/icmanager-v2.jpg";
  import Project from "$lib/components/project.svelte";
  import ImageView from "$lib/components/image-view.svelte";

  let drawer: ImageView | undefined = $state();
</script>

<div class="projects">
  <Project
    name="frontend.mosaic"
    images={[mosaicV1, mosaicV2, mosaicV3]}
    drawer={drawer!}
  />
  <Project name="frontend.pkp" images={[icmgrV1, icmgrV2]} drawer={drawer!} />
  <Project name="frontend.deepdive" images={[]} drawer={drawer!} />
  <ImageView bind:this={drawer} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
