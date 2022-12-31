<script lang="ts">
  import { EventHandler, HandleKeyUp } from './utils/eventHandler';
  import { exampleCall } from './utils/mockEvent';
  import DebugStore from './stores/debugStore';
  import ExampleStore from './stores/exampleStore';

  const { show } = ExampleStore;

  // Handle events we get from client.lua
  EventHandler();
  // Handle keystrokes from the user when the ui is showing
  // For example if player hits Escape key close the ui
  HandleKeyUp();

  // An example fake/mock client.lua call used when developing ui in browser
  exampleCall();
</script>

{#if $show}
  <main class={`min-h-screen ${DebugStore ? "bg-dark-300": "bg-transparent"}`}>
    <div class="bg-dark-400 text-2xl text-white p-5">
      <p class="text-center">
        Hello from svelte land!
      </p>
    </div>
  </main>
{/if}
