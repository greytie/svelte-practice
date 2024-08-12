<script lang="ts">
	import { ItemEntry } from "$lib";
	import type { Item } from "$lib/storage/db";
	import type { Observable } from "dexie";

	export let items: Observable<Item[]>; 

</script>

<div class="item-list">
	{#if $items}
		{#each $items as item (item.id)}
			<ItemEntry on:deleteItem item={item}></ItemEntry>
		{/each}
	{/if}
</div>

<style>
	.item-list{
		display: flex;
		flex-direction: column;
	}
</style>