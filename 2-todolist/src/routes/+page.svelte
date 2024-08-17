<script lang="ts">
	import { db, type Item } from '$lib/storage/db';
	import type { Tab } from '$lib/tabs/tab';
	import TabbedContainer from '$lib/tabs/TabbedContainer.svelte';
	import ItemList from '$lib/todo-list/ItemList.svelte';
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

	let tabs: Tab[] = [
		{
			label: "Level 1",
			id: 1
		},
		{
			label: "Level 2",
			id: 2
		},
		{
			label: "Level 3",
			id: 3
		}
	];
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

<div>
	<TabbedContainer tabs={tabs}></TabbedContainer>
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