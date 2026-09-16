<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.svg";
  import t, { setLanguage } from "$lib/translations/language.svelte";
  import english from "$lib/assets/en.svg";
  import polish from "$lib/assets/pl.svg";
  import { resolve } from "$app/paths";

  let { children } = $props();
  const urlMap: {
    [key: string]: string;
  } = $derived({
    "/": t("bio.header"),
    "/robotics": t("robotics.header"),
    "/backend": t("backend.header"),
    "/frontend": t("frontend.header"),
    "/contact": t("contact.header")
  });
  let url = $derived(
    page.url.pathname.substring(page.url.pathname.lastIndexOf("/"))
  );
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  <h1>{urlMap[url]}</h1>
  <nav>
    <a href={resolve("/")} class:active={url === "/"}>{t("bio.header")}</a>
    <a href={resolve("/robotics")} class:active={url === "/robotics"}
      >{t("robotics.header")}</a
    >
    <a href={resolve("/backend")} class:active={url === "/backend"}
      >{t("backend.header")}</a
    >
    <a href={resolve("/frontend")} class:active={url === "/frontend"}
      >{t("frontend.header")}</a
    >
    <a href={resolve("/contact")} class:active={url === "/contact"}
      >{t("contact.header")}</a
    >
    <div class="languages">
      <button
        onclick={() => {
          setLanguage("English");
        }}
      >
        <img src={english} alt="english" />
      </button>
      <button
        onclick={() => {
          setLanguage("Polski");
        }}
      >
        <img src={polish} alt="polish" />
      </button>
    </div>
  </nav>
  <div class="content">
    {@render children()}
  </div>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    font-family: "Mako", sans-serif;
  }
  :global(body) {
    margin: 0;
    --color-base: #fffafa;
    --color-primary: #f7d6d0;
    --color-secondary: #fff0ee;
    --color-accent: #8c6f6a;
    --color-foreground: #4a4a4a;

    background-color: var(--color-base);
    color: var(--color-foreground);
  }
  :global(img) {
    width: 100%;
  }
  :global(p) {
    font-size: 20px;
    color: var(--color-foreground);
    text-align: justify;
    line-height: 2rem;
  }
  :global(h1) {
    font-size: 48px;
  }
  :global(h2) {
    font-size: 36px;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    max-width: 1200px;
    margin-inline: auto;
    column-gap: 5rem;
  }
  h1 {
    grid-column: 1 / -1;
    margin-inline: auto;
    font-size: 48px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.5rem;
  }

  .languages {
    display: flex;
    gap: 0.5rem;
    margin: 1rem;

    button {
      border: none;
      padding: 0;
      display: grid;
      place-items: center;
      border-radius: 100vw;
    }

    img {
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 100vw;
      border: 2px solid var(--color-foreground);
      width: 32px;
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: var(--color-foreground);
    font-size: 20px;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    &.active {
      font-weight: bold;
      background-color: var(--color-secondary);
    }
  }
</style>
