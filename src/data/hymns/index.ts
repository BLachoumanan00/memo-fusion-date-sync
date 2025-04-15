
import { Hymn } from '@/types/hymnal';
import { adorationHymns } from './adoration';
import { faithHymns } from './faith';

// Combine all hymns into a single array
export const allHymns: Hymn[] = [
  ...adorationHymns,
  ...faithHymns,
];

// Define all available categories
export const hymnCategories = [
  'Adoration',
  'Foi'
];
