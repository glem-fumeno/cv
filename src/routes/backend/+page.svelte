<script lang="ts">
  import fmnV1 from "$lib/assets/projects/backend/fmn-v1.png";
  import fmnV2 from "$lib/assets/projects/backend/fmn-v2.png";
  import fmnV3 from "$lib/assets/projects/backend/fmn-v3.png";
  import pim from "$lib/assets/projects/backend/pim.png";
  import users from "$lib/assets/projects/backend/users.png";
  import qpw from "$lib/assets/projects/backend/qpw.png";
  import deepDive from "$lib/assets/projects/backend/deep-dive.png";
  import Project from "$lib/components/project.svelte";
</script>

<div class="projects">
  <Project name="backend.fmn" images={[fmnV1, fmnV2, fmnV3]} />
  <Project name="backend.pim" images={[pim]} />
  <Project name="backend.users" images={[users]} />
  <Project name="backend.qpw" images={[qpw]} />
  <Project name="backend.deepdive" images={[deepDive]} />
</div>

<style>
  .projects {
    display: grid;
  }
</style>
