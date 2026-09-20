<script lang="ts">
  import close from "$lib/assets/icons/close.svg";
  let drawer: HTMLDialogElement;
  let closing = $state(false);
  let image = $state("");

  export function openDrawer(new_image: string) {
    closing = false;
    drawer.showModal();
    image = new_image;
  }

  function closeDrawer() {
    closing = true;
  }

  function handleTransitionEnd(e: TransitionEvent) {
    if (closing && e.target === drawer && e.propertyName === "opacity") {
      closing = false;
      drawer.close();
    }
  }

  function handleCancel(e: Event) {
    e.preventDefault();
    closeDrawer();
  }
</script>

<dialog
  bind:this={drawer}
  class="nav-drawer"
  class:closing
  onclick={(e) => e.target === drawer && closeDrawer()}
  ontransitionend={handleTransitionEnd}
  oncancel={handleCancel}
>
  <div class="wrapper">
    <img src={image} alt="full size" />
  </div>
  <button onclick={closeDrawer} aria-label="close">
    <img src={close} alt="close" />
  </button>
</dialog>

<style>
  img {
    margin: 0;
    max-width: 80dvw;
    max-height: 80dvh;
  }
  .wrapper {
    display: grid;
    place-items: center;
  }
  button {
    position: fixed;
    right: 0.5rem;
    top: 0.5rem;
    display: grid;
    place-items: center;
    border: none;
    padding: 1rem;
    width: 48px;
    height: 48px;
    background-color: transparent;
    cursor: pointer;
  }
  .nav-drawer {
    inset: 0;
    border: none;
    padding: 0;
    border-radius: 0.5rem;

    transition:
      opacity 0.25s ease,
      overlay 0.25s allow-discrete,
      display 0.25s allow-discrete;

    &[open] {
      opacity: 100%;
    }

    &[open].closing {
      opacity: 0%;
    }

    @starting-style {
      &[open] {
        opacity: 0%;
      }
      &[open]::backdrop {
        background-color: #00000000;
      }
    }

    &::backdrop {
      background-color: #00000088;
      transition: background-color 0.25s ease;
    }

    &.closing::backdrop {
      background-color: #00000000;
    }
  }
</style>
