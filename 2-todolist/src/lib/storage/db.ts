import Dexie, { type EntityTable } from 'dexie';

interface Item {
	id: number;
	name: string;
	completed: boolean;
}

const db = new Dexie('ItemDatabase') as Dexie & {
	items: EntityTable<
		Item,
		'id' // primary key "id" (for the typings only)
	>;
};

// Schema declaration:
db.version(1).stores({
	items: '++id, name, completed' // primary key "id" (for the runtime!)
});

export type { Item };
export { db };