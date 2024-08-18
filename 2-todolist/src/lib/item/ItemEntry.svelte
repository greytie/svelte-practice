<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Item } from "$lib/storage/db";

	export let item: Item;
	
	const dispatch = createEventDispatcher();

	function dispatchDeleteItem(itemID: number) {
		dispatch('deleteItem', {
			itemID: itemID
		});
	}

	function checkboxClicked(event: Event) {
		console.log((<HTMLInputElement>event.target).checked);
		item.completed = (<HTMLInputElement>event.target).checked;
		// TODO: DB Update should happen
	}

</script>

<div>
	<input bind:value={item.completed} on:change={(event) => checkboxClicked(event)} type="checkbox"/>
	<label for="An item" class={item.completed ? 'completed' : ''}>{item.name}</label>
	<button on:click={() => dispatchDeleteItem(item.id)}>Delete</button>
</div>


<style>
	.completed {
		text-decoration: line-through;
	}
</style>