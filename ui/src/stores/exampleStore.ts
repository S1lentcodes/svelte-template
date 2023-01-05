import { writable } from "svelte/store";
import type { Writable } from 'svelte/store';
import fetchNUI from '../utils/fetch';

interface exampleState {
  show: Writable<boolean>
}

const store = () => {
  const exampleStore: exampleState = {
    show: writable(false),
  }

  const methods = {
    closeUI() {
      // Close the ui locally
      exampleStore.show.set(false);
      // Tell client lua that we closed the ui
      fetchNUI("closeUI");
    },
    receiveShowMessage() {
      // If they send us true/false we set our store value to that
      exampleStore.show.set(true);
    }
  }

  return {
    ...exampleStore,
    ...methods
  }
}

export default store();