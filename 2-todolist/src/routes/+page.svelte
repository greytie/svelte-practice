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
</script>

<input type="text" bind:value={itemName} />
<button on:click={addItem}>Add item</button>
{#if $items}
	<ItemList {items}></ItemList>
{/if}
