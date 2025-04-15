import { Hymn } from '@/types/hymnal';
import { adorationHymns } from './adoration';
import { faithHymns } from './faith';
import { praiseHymns } from './praise';
import { redemptionHymns } from './redemption';
import { prayerHymns } from './prayer';
import { jesusChristHymns } from './jesusChrist';
import { holySpiritHymns } from './holySpirit';
import { confidenceHymns } from './confidence';
import { hopeHymns } from './hope';
import { spiritualWarfareHymns } from './spiritualWarfare';
import { christianLifeHymns } from './christianLife';
import { missionHymns } from './mission';
import { fellowshipHymns } from './fellowship';
import { invitationHymns } from './invitation';
import { consecrationHymns } from './consecration';
import { resurrectionHymns } from './resurrection';
import { divineLoveHymns } from './divineLove';
import { divineFidelityHymns } from './divineFidelity';
import { comfortHymns } from './comfort';
import { divinePresenceHymns } from './divinePresence';
import { warningHymns } from './warning';
import { exaltationHymns } from './exaltation';
import { searchForGodHymns } from './searchForGod';
import { blessingHymns } from './blessing';
import { victoryHymns } from './victory';
import { encouragementHymns } from './encouragement';
import { purificationHymns } from './purification';

export const allHymns: Hymn[] = [
  ...adorationHymns,
  ...faithHymns,
  ...praiseHymns,
  ...redemptionHymns,
  ...prayerHymns,
  ...jesusChristHymns,
  ...holySpiritHymns,
  ...confidenceHymns,
  ...hopeHymns,
  ...spiritualWarfareHymns,
  ...christianLifeHymns,
  ...missionHymns,
  ...fellowshipHymns,
  ...invitationHymns,
  ...consecrationHymns,
  ...resurrectionHymns,
  ...divineLoveHymns,
  ...divineFidelityHymns,
  ...comfortHymns,
  ...divinePresenceHymns,
  ...warningHymns,
  ...exaltationHymns,
  ...searchForGodHymns,
  ...blessingHymns,
  ...victoryHymns,
  ...encouragementHymns,
  ...purificationHymns,
];

export const hymnCategories = [
  'Adoration',
  'Foi',
  'Louange',
  'Rédemption',
  'Prière',
  'Jésus-Christ',
  'Saint-Esprit',
  'Confiance',
  'Espérance',
  'Combat spirituel',
  'Vie chrétienne',
  'Mission',
  'Communion fraternelle',
  'Invitation',
  'Consécration',
  'Résurrection',
  'Amour de Dieu',
  'Fidélité divine',
  'Réconfort',
  'Présence divine',
  'Avertissement',
  'Exaltation',
  'Recherche de Dieu',
  'Bénédiction',
  'Victoire',
  'Encouragement',
  'Purification'
];
