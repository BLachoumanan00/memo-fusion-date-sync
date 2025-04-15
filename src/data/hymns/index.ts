
import { Hymn } from '@/types/hymnal';
import { adorationHymns } from './adoration';
import { faithHymns } from './faith';
import { praiseHymns } from './praise';
import { prayerHymns } from './prayer';

// Combine all hymns into a single array
export const allHymns: Hymn[] = [
  ...adorationHymns,
  ...faithHymns,
  ...praiseHymns,
  ...prayerHymns,
];

// Define all available categories
export const hymnCategories = [
  'Adoration',
  'Foi',
  'Louange',
  'Prière'
];
