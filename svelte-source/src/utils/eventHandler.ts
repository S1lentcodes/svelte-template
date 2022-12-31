import { onMount, onDestroy } from "svelte";
import ExampleStore from '../stores/exampleStore';

interface nuiMessage {
  data: {
    action: string,
    [key: string]: any,
  },
}

export function EventHandler() {
  function mainEvent(event: nuiMessage) {
    switch (event.data.action) {
      case "open":
        ExampleStore.receiveShowMessage();
    }
  }

  onMount(() => window.addEventListener("message", mainEvent));
  onDestroy(() => window.removeEventListener("message", mainEvent));
}

// Handle when the user hits Escape on there keyboard, then the ui should close
export function HandleKeyUp() {
  function keyEvent(event:KeyboardEvent) {
    const charCode = event.key;
    if (charCode == "Escape") {
      ExampleStore.closeUI();
    }
  }

  onMount(() => window.addEventListener("keyup", keyEvent));
  onDestroy(() => window.removeEventListener("keyup", keyEvent));
}