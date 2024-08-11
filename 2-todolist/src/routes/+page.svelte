<script lang="ts">
	import ItemList from "$lib/todo-list/ItemList.svelte";
	let items: any[] = [
		{
			label: 'Item 1'
		},
		{
			label: 'Item 2'
		}
	]
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ItemList items={items}>

</ItemList>