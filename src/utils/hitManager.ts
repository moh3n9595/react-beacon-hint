import storage from 'local-storage-fallback';
import {HitManager} from '../@types';

export const STORAGE = 'react-beacon-hint';

export const manageHit = (key: string, options: {increase: boolean} = {increase: false}) => {
	let hitsObj: HitManager = {};
	const stringifyHits = storage.getItem(STORAGE);
	if (stringifyHits) {
		try {
			hitsObj = JSON.parse(stringifyHits);
			// eslint-disable-next-line no-empty
		} catch {}
	}

	hitsObj[key] = {
		occurred: (hitsObj[key]?.occurred || 0) + (options.increase ? 1 : 0),
	};

	storage.setItem(STORAGE, JSON.stringify(hitsObj));

	return hitsObj[key];
};
