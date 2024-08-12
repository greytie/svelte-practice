<script lang="ts">
	import { db, type Item } from '$lib/storage/db';
	import ItemList from '$lib/todo-list/ItemList.svelte';
	import ItemEntry from '$lib/item/ItemEntry.svelte';
	import { liveQuery, type Observable } from 'dexie';

	let items: Observable<Item[]> = liveQuery(() => db.items.toArray());

	let itemName: string;

	async function addItem() {
		try {
			const id = await db.items.add({
				name: itemName,
				completed: false
			});
		} catch (err) {
			console.error(err);
		}
	}

	async function deleteItem(event: CustomEvent) {
		try {
			await db.items.delete(event.detail.itemID)
		} catch (err) {
			console.error(err);
		}
	}
</script>
<header>
	<h1>ToDo List</h1>
</header>
<div class="content-container">
	<div class="content-column">
		<div class="input-container">
			<input type="text" bind:value={itemName} />
			<button on:click={addItem}>Add item</button>
		</div>	
		{#if $items}
			<ItemList on:deleteItem={deleteItem} items={items}></ItemList>
		{/if}
	</div>
</div>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	header > h1 {
		font-family: Arial, sans-serif 
	}

	.content-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.content-column {
		display: flex;
		flex-direction: column;
	}
</style>