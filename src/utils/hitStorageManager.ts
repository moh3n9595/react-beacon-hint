import storage from 'local-storage-fallback';

/**
 * Interface defining the structure of hit data.
 */
interface HitData {
	occurred: number;
}

/**
 * Interface defining the hit manager structure.
 */
interface HitManager {
	[key: string]: HitData;
}

/**
 * Class for managing hit occurrences in local storage.
 */
export class HitStorageManager {
	private static readonly STORAGE_KEY = 'react-beacon-hint';

	/**
	 * Retrieves hit data for a given key.
	 * @param key - The key to retrieve hit data for.
	 * @returns The hit data or `undefined` if not found.
	 */
	public static get(key: string): HitData {
		const hits = this.loadHits();
		hits[key] = {
			occurred: hits[key]?.occurred || 0,
		};
		return hits[key];
	}

	/**
	 * Increases the hit count for a given key by 1.
	 * @param key - The key to increase hit count for.
	 * @returns The updated hit data.
	 */
	public static increase(key: string): HitData {
		const hits = this.loadHits();
		hits[key] = {occurred: (hits[key]?.occurred || 0) + 1};
		this.saveHits(hits);
		return hits[key];
	}

	/**
	 * Loads hit data from local storage.
	 * @returns The parsed hit data or an empty object if none exists.
	 */
	private static loadHits(): HitManager {
		const data = storage.getItem(this.STORAGE_KEY);
		try {
			return data ? (JSON.parse(data) as HitManager) : {};
		} catch {
			return {};
		}
	}

	/**
	 * Saves hit data to local storage.
	 * @param hits - The hit data to save.
	 */
	private static saveHits(hits: HitManager): void {
		storage.setItem(this.STORAGE_KEY, JSON.stringify(hits));
	}
}
