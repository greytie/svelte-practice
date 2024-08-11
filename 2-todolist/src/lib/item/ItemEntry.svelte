<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Item } from "$lib/storage/db";

	export let item: Item
	
	const dispatch = createEventDispatcher();

	function dispatchDeleteItem(itemID: number) {
		dispatch('deleteItem', {
			itemID: itemID
		});
	}
</script>

<div>
	<input type="checkbox"/>
	<label for="An item">{item.name}</label>
	<button on:click={() => dispatchDeleteItem(item.id)}>Delete</button>
</div>