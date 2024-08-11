<script lang="ts">
	import { ItemEntry } from "$lib";
	import type { Item } from "$lib/storage/db";
	import type { Observable } from "dexie";

	export let items: Observable<Item[]>; 
</script>

<div>
	{#if $items}
		{#each $items as item (item.id)}
			<ItemEntry item={item}></ItemEntry>
		{/each}
	{/if}	
</div>