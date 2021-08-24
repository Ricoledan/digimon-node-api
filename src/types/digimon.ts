export interface Digimon {
  name: string
  level: Level
  type: Type
  attribute: Attribute
  field: Field[] | null
  group: Group[] | null
  technique: [Technique]
  profile: {
    artwork: string
    sprite: {
      sprite: string[]
      map: string
    }
    description: string
  }
}

export type Technique = {
  name: string
  description: string | null
}

export interface DigimonSchema extends Digimon {
  _id: { $oid: string }
  __v: number
  timestamps: {
    createdAt: string
    updatedAt?: string
    deletedAt: string
  }
}

export interface TechniqueSchema extends Technique {
  _id: { $oid: string }
  timestamps: {
    createdAt: string
    updatedAt?: string
    deletedAt: string
  }
}

export type Level =
  | 'Baby I'
  | 'Baby II'
  | 'Child'
  | 'Adult'
  | 'Perfect'
  | 'Ultimate'
  | 'Armor'
  | 'Hybrid'
  | 'Unknown'

export type Type =
  | '9000'
  | 'Aerial Assault'
  | 'Alien'
  | 'Amphibian'
  | 'Ancient'
  | 'Ancient Aquatic Beast Man'
  | 'Ancient Beast'
  | 'Ancient Bird'
  | 'Ancient Bird Man'
  | 'Ancient Crustacean'
  | 'Ancient Dragon'
  | 'Ancient Dragon Man'
  | 'Ancient Fish'
  | 'Ancient Holy Knight'
  | 'Ancient Insect'
  | 'Ancient Mutant'
  | 'Ancient Mythical Beast'
  | 'Ancient Ore'
  | 'Ancient Plant'
  | 'Angel'
  | 'Ankylosaur'
  | 'Aquatic'
  | 'Aquatic Beast Man'
  | 'Aquatic Mammal'
  | 'ArchAngel'
  | 'Armed Reconnaissance'
  | 'Armor'
  | 'Artificial Fallen Angel'
  | 'Avatar'
  | 'Baby Dragon'
  | 'Base Defense'
  | 'Beast'
  | 'Beast Dragon'
  | 'Beast Knight'
  | 'Beast Man'
  | 'Bewitching Beast'
  | 'Bewitching Bird'
  | 'Bird'
  | 'Bird Dragon'
  | 'Bird Man'
  | 'Braun'
  | 'Bulb'
  | 'Card'
  | 'Ceratopsian'
  | 'Cherub'
  | 'Chick'
  | 'ComMander'
  | 'Composite'
  | 'Crustacean'
  | 'Cyborg'
  | 'Dark Dragon'
  | 'Dark Knight'
  | 'Demon Beast'
  | 'Demon Dragon'
  | 'Demon God'
  | 'Demon Lord'
  | 'Demon Man'
  | 'Devil'
  | 'Dinosaur'
  | 'Dominion'
  | 'Dragon'
  | 'Dragon Man'
  | 'Dragon Warrior'
  | 'Earth Dragon'
  | 'Enhancement'
  | 'Espionage'
  | 'Evil Dragon'
  | 'Fairy'
  | 'Fallen Angel'
  | 'Flame'
  | 'Flame Dragon'
  | 'Food'
  | 'Galaxy'
  | 'Ghost'
  | 'Giant Bird'
  | 'God Beast'
  | 'God Man'
  | 'Grappling'
  | 'Ground Assault'
  | 'Holy Beast'
  | 'Holy Bird'
  | 'Holy Dragon'
  | 'Holy Knight'
  | 'Holy Sword'
  | 'Hybrid'
  | 'Ice-Snow'
  | 'Information Gathering'
  | 'Insect'
  | 'Insectivorious Plant'
  | 'Invade'
  | 'Larva'
  | 'Lcd'
  | 'Lesser'
  | 'Light Dragon'
  | 'Machine'
  | 'Machine Dragon'
  | 'Magic Warrior'
  | 'Magic Knight'
  | 'Major'
  | 'Mammal'
  | 'Marine Animal'
  | 'Marine Man'
  | 'Mine'
  | 'Mineral'
  | 'Minor'
  | 'Mollusk'
  | 'Monk'
  | 'Mother Ship'
  | 'Musical Instrument'
  | 'Mutant'
  | 'Mythical Beast'
  | 'Mythical Dragon'
  | 'No Data'
  | 'Ocean Dragon'
  | 'Oni'
  | 'Ophan'
  | 'Ore'
  | 'Parasite'
  | 'Perfect'
  | 'Plant'
  | 'Plesiosaur'
  | 'Power'
  | 'Pterosaur'
  | 'Puppet'
  | 'Rare Animal'
  | 'Reptile'
  | 'Reptile Man'
  | 'Rock'
  | 'Rock Dragon'
  | 'Seed'
  | 'Seraph'
  | 'Skeleton'
  | 'Sky Dragon'
  | 'Slime'
  | 'Small Angel'
  | 'Small Bird'
  | 'Small Devil'
  | 'Small Dragon'
  | 'Smoke'
  | 'Spirit'
  | 'Stegosaur'
  | 'Super Major'
  | 'Synthetic Beast'
  | 'Tathāgata'
  | 'Toy'
  | 'Tropical fish'
  | 'Unbalanced'
  | 'Undead'
  | 'Unique'
  | 'Unanalyzable'
  | 'Unknown'
  | 'Virtue'
  | 'Warrior'
  | 'Weapon'
  | 'Wicked God'

export type Attribute =
  | 'vaccine'
  | 'data'
  | 'virus'
  | 'free'
  | 'variable'
  | 'unknown'

export type Field =
  | 'Nature Spirits'
  | 'Deep Savers'
  | 'Nightmare Soldiers'
  | 'Wind Guardians'
  | 'Metal Empire'
  | 'Unknown'
  | 'Dark Area'
  | 'Virus Busters'
  | "Dragon'S Roar"
  | 'Jungle Troopers'

export type Group =
  | 'Artifical Digimon'
  | 'BAN-TYO'
  | 'Big Death-Stars'
  | 'Crack Team'
  | 'D-Brigade'
  | 'Dark Masters'
  | 'Digimon King'
  | 'Deva'
  | 'Four Great Dragons'
  | 'Four Holy Beasts'
  | 'Gaia Origin'
  | 'Legend-Arms'
  | 'Olympus Twelve'
  | 'Royal Knights'
  | 'Seven Great Demon Lords'
  | 'Three Gods of Destruction'
  | 'Three Great Angels'
  | 'Three Head Officers'
  | 'Three Musketeers'
  | 'Ultimate 4'
  | 'Warrior Ten'
