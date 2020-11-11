import { compact, findKey } from 'lodash';

import { CharacterClass } from '../../types/Character.types';
import { Item, ItemCategory, ItemRarity, ItemType, SetId } from '../../types/Item.types';
import { ITEM_TYPES_BY_CATEGORIES, ITEM_ID_BY_SETS } from '../data/dataMappings';
import { readSourceFile, writeFile, assetExists } from '../utils/fileUtils';
import { getLocaleSection, parseLocaleData, LocaleData } from './parseLocale';

interface ItemMetaData {
  rarity: ItemRarity,
  type: ItemType,
  category: ItemCategory,
}

export function parseItems(version: number, verbose = false): Item[] {
  const rawItems = compact(readSourceFile(version, 'itemlist.txt').split(/\n|\r/));
  const itemLocales = parseLocale(version);

  const items: Item[] = rawItems.map((rawItem): Item => {
    const [itemData, enchantsData] = rawItem.split(' -- ');
    const [id, name, typeAndRarity, rawClassRestriction, rawMinLevel] = itemData.split(' - ').map(data => data.trim());

    const hasIcon = assetExists(`items/all/spr_itemicons_${id}.png`);
    const icon = hasIcon ? `spr_itemicons_${id}.png` : null;
    const uuid = parseInt(id);
    const classRestriction = parseClassRestriction(rawClassRestriction);
    const baseEnchants = parseBaseEnchants(enchantsData);
    const set = findSet(uuid);
    const minLevel = parseInt(rawMinLevel.replace(/Lv\s/, ''));
    const { rarity, type, category } = parseMetaData(typeAndRarity);

    const item = {
      uuid,
      name,
      icon,
      flavor: itemLocales[uuid].flavor,
      description: itemLocales[uuid].txt,
      category,
      type,
      rarity,
      classRestriction,
      minLevel,
      baseEnchants,
      set,
    };

    if (verbose) {
      console.log(item);
    }

    return item;
  });

  writeFile(items, version, 'items');

  return items;
}

function parseClassRestriction(classData: string): CharacterClass | null {
  return classData === 'Any Class'
    ? null
    : classData as CharacterClass;
}

function parseBaseEnchants(enchantsData: string): number[] {
  return enchantsData
    ? compact(enchantsData.split(/\s/).map(enchant => enchant.replace(/e/g, ''))).map(id => parseInt(id))
    : [];
}

function parseMetaData(typeAndRarity: string): ItemMetaData {
  const rarityAndTypeRegexp = /^(Ordinary|Common|Enchanted|Rare|Unique|Legendary|True\sLegendary|Mythical)\s((?:\w|\s)+)\s?(\(Offhand\))?$/;
  const match = typeAndRarity.match(rarityAndTypeRegexp);

  if (!match) {
    throw (`Couldn't parse ${typeAndRarity}`);
  }

  const rarity = match[1] as ItemRarity;
  const type = match[2] as ItemType;
  const isOffhand = !!match[3];
  const category = isOffhand ? ItemCategory.Offhand : getCategoryFromType(type);

  return {
    rarity,
    type,
    category,
  };
}

function getCategoryFromType(type: ItemType): ItemCategory {
  const category = findKey(ITEM_TYPES_BY_CATEGORIES, (itemTypes) => {
    return itemTypes.includes(type);
  }) as ItemCategory;

  return category || ItemCategory.Misc;
}

function findSet(uuid: number): SetId | null {
  const set = findKey(ITEM_ID_BY_SETS, (itemIds) => {
    return itemIds.includes(uuid);
  }) as SetId;

  return set;
}

function parseLocale(version: number): LocaleData  {
  const localeData = getLocaleSection(version, 'locale/EN/items', 'items');
  return parseLocaleData(localeData, /^item_(\d+)_(\w+)$/);
}