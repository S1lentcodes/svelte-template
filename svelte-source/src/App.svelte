<script lang="ts">
  import { EventHandler } from './utils/eventHandler';
  import debugMode from './stores/debugStore';

  EventHandler();
</script>

<main class={`min-h-screen ${debugMode ? 'bg-dark-300':''}`}>
</main>
