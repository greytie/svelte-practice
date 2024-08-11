<script lang="ts">
	import type { Item } from "$lib/storage/db";

	export let item: Item
</script>

<div>
	<input type="checkbox"/>
	<label for="An item">{item.name}</label>
</div>