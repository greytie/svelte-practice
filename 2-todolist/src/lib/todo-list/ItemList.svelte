<script lang="ts">
	import { Item } from "$lib";

	export let items: any[]
</script>

<div>
	{#each items as item}
		<Item item={item}></Item>
	{/each}
</div>