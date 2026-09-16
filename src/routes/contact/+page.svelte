<script lang="ts">
  import mail from "$lib/assets/email.svg";
  import linkedin from "$lib/assets/linkedin.svg";
  import t from "$lib/translations/language.svelte";
</script>

<p>{t("contact.content")}</p>
<section>
  <a href="mailto:emiliaglibowska@gmail.com">
    <img src={mail} alt="email" />
    Email
  </a>
  <a href="https://www.linkedin.com/in/emilia-glibowska-72b669437">
    <img src={linkedin} alt="linkedin" />
    Linked In
  </a>
</section>

<style>
  section {
    img {
      width: 2rem;
    }
    a {
      text-decoration: none;
      display: block;
      color: var(--color-foreground);
      font-size: 28px;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
    }
  }
</style>
