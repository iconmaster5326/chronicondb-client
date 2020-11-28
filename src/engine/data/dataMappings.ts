import { CharacterClass } from '../../types/Character.types';
import { EnchantType, ItemRawEnchantCategory } from '../../types/Enchant.types';
import { ItemCategory, SetId, ItemType, ItemRarity } from '../../types/Item.types';


export const ENCHANT_SLOTS_BY_RARITY: Record<ItemRarity, ItemRawEnchantCategory[]> = {
  [ItemRarity.Ordinary]: [],
  [ItemRarity.Enchanted]: [
    { count: 1, types: [EnchantType.Minor, EnchantType.Major] },
  ],
  [ItemRarity.Rare]: [
    { count: 1, types: [EnchantType.Minor] },
    { count: 1, types: [EnchantType.Major] },
    {
      count: 1,
      types: [EnchantType.Epic],
      categoriesRestriction: [ItemCategory.Ring, ItemCategory.Amulet],
    },
  ],
  [ItemRarity.Unique]: [
    { count: 1, types: [EnchantType.Minor] },
    { count: 2, types: [EnchantType.Major] },
    {
      count: 1,
      types: [EnchantType.Epic],
      categoriesRestriction: [ItemCategory.Ring, ItemCategory.Amulet],
    },
  ],
  [ItemRarity.Legendary]: [
    { count: 2, types: [EnchantType.Minor] },
    { count: 2, types: [EnchantType.Major] },
    {
      count: 1,
      types: [EnchantType.Epic],
      categoriesRestriction: [ItemCategory.Ring, ItemCategory.Amulet],
    },
  ],
  [ItemRarity.TrueLegendary]: [
    { count: 2, types: [EnchantType.Minor] },
    { count: 2, types: [EnchantType.Major] },
    {
      count: 1,
      types: [EnchantType.Epic],
      categoriesRestriction: [ItemCategory.Ring, ItemCategory.Amulet],
    },
  ],
  [ItemRarity.Set]: [],
  [ItemRarity.Mythical]: [],
};

export const ITEM_TYPES_BY_CATEGORIES: Record<ItemCategory, ItemType[]> = {
  [ItemCategory.Helmet]: [ItemType.Helm],
  [ItemCategory.Armor]: [ItemType.Armor],
  [ItemCategory.Boots]: [ItemType.Boots],
  [ItemCategory.Weapon]: [
    ItemType.Bow,
    ItemType.Sword,
    ItemType.Staff,
    ItemType.Fists,
  ],
  [ItemCategory.Offhand]: [
    ItemType.Spellbook,
    ItemType.Shield,
    ItemType.Tome,
    ItemType.Claw,
    ItemType.Arrow,
  ],
  [ItemCategory.Ring]: [ItemType.Ring],
  [ItemCategory.Amulet]: [ItemType.Amulet],
  [ItemCategory.Accessory]: [ItemType.Accessory],
  [ItemCategory.Gem]: [
    ItemType.CubeGem,
    ItemType.StarGem,
    ItemType.SphereGem,
  ],
  [ItemCategory.Consumables]: [
    ItemType.Elixir,
    ItemType.Potion,
    ItemType.Scroll,
    ItemType.Relic,
  ],
  [ItemCategory.Misc]: [
    ItemType.Key,
    ItemType.QuestItem,
    ItemType.SpecialItem,
    ItemType.Container,
    ItemType.UnknownItem,
    ItemType.Bag,
  ],
  [ItemCategory.Craft]: [
    ItemType.CraftingMaterial,
    ItemType.Rune,
  ],
};

export const SETS_BY_CLASS: Record<CharacterClass, SetId[]> = {
  [CharacterClass.All]: [
    SetId.Scout,
    SetId.WrathfulRevenge,
    SetId.Seeker,
    SetId.Challenger,
    SetId.Thief,
    SetId.Bond,
    SetId.Harverst,
    SetId.Summoner,
    SetId.SunAndMoon,
    SetId.FuriousRetaliation,
    SetId.AllForOne,
    SetId.OneForAll,
  ],
  [CharacterClass.Templar]: [
    SetId.Reckoning,
    SetId.Valkyrie,
    SetId.ThunderCharged,
    SetId.ThunderingArmy,
    SetId.Caines,
    SetId.Wargod,
    SetId.Ayeela,
    SetId.Soulpurger,
  ],
  [CharacterClass.Berserker]: [
    SetId.Bloodsoak,
    SetId.Cataclysm,
    SetId.SpiritualGarb,
    SetId.Skysoul,
    SetId.Dragonfire,
    SetId.Volcanic,
    SetId.NothernRage,
    SetId.FrostWyrm,
  ],
  [CharacterClass.Warden]: [
    SetId.HighRanger,
    SetId.Windcaller,
    SetId.Everspring,
    SetId.ShroomTender,
    SetId.Stormcaller,
    SetId.WispMother,
    SetId.Torrential,
    SetId.Snowstorm,
  ],
  [CharacterClass.Warlock]: [
    SetId.BloodBinder,
    SetId.PlagueMage,
    SetId.Coldhearted,
    SetId.Deathbringer,
    SetId.DemonLord,
    SetId.BurningHells,
    SetId.Desecrator,
    SetId.Masochist,
  ],
};

export const ITEM_ID_BY_SETS: Record<SetId, number[]> = {
  [SetId.SunAndMoon]: [504, 505],
  [SetId.Seeker]: [331, 332, 333],
  [SetId.Bond]: [496, 497],
  [SetId.AllForOne]: [502, 503],
  [SetId.OneForAll]: [500, 501],
  [SetId.Scout]:  [151, 327, 328],
  [SetId.Summoner]: [510, 511, 512, 513],
  [SetId.Thief]: [494, 495],
  [SetId.Harverst]:  [498, 499],
  [SetId.WrathfulRevenge]: [329, 330, 149],
  [SetId.FuriousRetaliation]: [506, 507, 508, 509],
  [SetId.Challenger]: [334, 335, 336],
  [SetId.Valkyrie]: [547, 548, 549, 550],
  [SetId.Reckoning]: [376, 377, 378, 379],
  [SetId.ThunderingArmy]: [539, 540, 541, 542],
  [SetId.ThunderCharged]: [123, 134, 318, 326],
  [SetId.Caines]: [372, 373, 374, 375],
  [SetId.Wargod]: [543, 544, 545, 546],
  [SetId.Soulpurger]: [535, 536, 537, 538],
  [SetId.Ayeela]: [124, 323, 324, 325],
  [SetId.Bloodsoak]: [91, 100, 337, 556],
  [SetId.Cataclysm]: [552, 553, 554, 555],
  [SetId.Skysoul]: [557, 558, 559, 560],
  [SetId.SpiritualGarb]: [380, 381, 382, 383],
  [SetId.Volcanic]: [562, 563, 564, 565],
  [SetId.Dragonfire]: [102, 339, 340, 561],
  [SetId.NothernRage]: [384, 385, 386, 566],
  [SetId.FrostWyrm]: [567, 568, 569, 570],
  [SetId.BloodBinder]: [368, 369, 370, 594],
  [SetId.PlagueMage]: [598, 599, 600, 601],
  [SetId.Coldhearted]: [113, 321, 322, 596],
  [SetId.Deathbringer]: [606, 607, 608, 609],
  [SetId.DemonLord]: [112, 118, 319, 595],
  [SetId.BurningHells]: [602, 603, 604, 605],
  [SetId.Desecrator]: [364, 365, 366, 597],
  [SetId.Masochist]: [610, 611, 612, 613],
  [SetId.HighRanger]: [142, 341, 342, 343],
  [SetId.Windcaller]: [576, 577, 578, 579],
  [SetId.ShroomTender]: [585, 586, 587, 588],
  [SetId.Everspring]: [388, 389, 390, 391],
  [SetId.Stormcaller]: [74, 139, 140, 580],
  [SetId.WispMother]: [581, 582, 583, 584],
  [SetId.Torrential]: [590, 591, 592, 593],
  [SetId.Snowstorm]: [392, 393, 394, 589],
  [SetId.Christmas]: [716, 717, 718, 719, 720],
  [SetId.Master]: [776, 616],
};
