<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import favicon from "$lib/assets/favicon.svg";
  import t, { setLanguage } from "$lib/translations/language.svelte";
  import english from "$lib/assets/en.svg";
  import polish from "$lib/assets/pl.svg";
  import type { Language } from "$lib/types";
  import burger from "$lib/assets/burger.svg";

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
  let routes = [
    { url: "/", header: t("bio.header") },
    { url: "/robotics", header: t("robotics.header") },
    { url: "/backend", header: t("backend.header") },
    { url: "/frontend", header: t("frontend.header") },
    { url: "/contact", header: t("contact.header") }
  ];
  let languages: { language: Language; picture: string }[] = [
    { language: "English", picture: english },
    { language: "Polski", picture: polish }
  ];
  let drawer: HTMLDialogElement;

  function openDrawer() {
    drawer.showModal();
  }

  function closeDrawer() {
    drawer.close();
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  <header>
    <button class="nav-trigger" onclick={openDrawer} aria-label="Open menu">
      <img src={burger} alt="nav trigger" />
    </button>
    <h1>{urlMap[url]}</h1>
  </header>
  <div class="non-header">
    <nav class="nav-sidebar">
      {#each routes as route}
        <a href={route.url} class:active={url === route.url}>{route.header}</a>
      {/each}
      <div class="languages">
        {#each languages as language}
          <button onclick={() => setLanguage(language.language)}>
            <img src={language.picture} alt={language.language} />
          </button>
        {/each}
      </div>
    </nav>
    <div class="content">
      {@render children()}
    </div>
  </div>

  <dialog
    bind:this={drawer}
    class="nav-drawer"
    onclick={(e) => e.target === drawer && closeDrawer()}
  >
    <nav>
      {#each routes as route}
        <a
          href={route.url}
          onclick={closeDrawer}
          class:active={url === route.url}>{route.header}</a
        >
      {/each}
      <div class="languages">
        {#each languages as language}
          <button onclick={() => setLanguage(language.language)}>
            <img src={language.picture} alt={language.language} />
          </button>
        {/each}
      </div>
    </nav>
  </dialog>
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
    margin-inline: 1rem;
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
    height: 100vh;
    max-width: 1000px;
    margin-inline: auto;
    position: relative;
  }
  header {
    grid-column: 1 / -1;
    display: flex;
  }
  h1 {
    margin-inline: auto;
    font-size: 48px;
    max-width: 800px;
  }
  .non-header {
    display: flex;
    gap: 5rem;
  }
  .content {
    margin-inline: auto;
    width: 100%;
  }
  .nav-trigger {
    display: none;
    img {
      width: 24px;
    }
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0.5rem;
    position: absolute;
    top: 2.5rem;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 120px;
  }

  .nav-sidebar {
    align-items: end;
  }
  @media (max-width: 800px) {
    .nav-trigger {
      display: unset;
    }
    .nav-sidebar {
      display: none;
    }
  }
  .nav-drawer {
    margin: 0 auto 0 0;
    height: 100dvh;
    max-height: 100dvh;
    width: min(80vw, 320px);
    border: none;

    transition:
      translate 0.25s ease,
      overlay 0.25s allow-discrete,
      display 0.25s allow-discrete;
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
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    &.active {
      font-weight: bold;
      background-color: var(--color-secondary);
    }
  }
</style>
