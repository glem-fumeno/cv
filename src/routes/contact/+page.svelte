<script lang="ts">
  import mail from "$lib/assets/icons/email.svg";
  import linkedin from "$lib/assets/icons/linkedin.svg";
  import t from "$lib/translations/language.svelte";
</script>

<p>{t("contact.content")}</p>
<section>
  <a href="mailto:emiliaglibowska@gmail.com">
    <img src={mail} alt="email" />
    emiliaglibowska@gmail.com
  </a>
  <a href="https://www.linkedin.com/in/emilia-glibowska-72b669437">
    <img src={linkedin} alt="linkedin" />
    linkedin.com/in/emilia-glibowska-72b669437
  </a>
</section>

<style>
  section {
    img {
      width: 2rem;
    }
    a {
      display: block;
      color: var(--color-foreground);
      font-size: 20px;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
      @media (max-width: 950px) {
        font-size: 18px;
        line-height: 1.75rem;
      }
      @media (max-width: 500px) {
        font-size: 16px;
        line-height: 1.5rem;
      }
    }
  }
</style>
