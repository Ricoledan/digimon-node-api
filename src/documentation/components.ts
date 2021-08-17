const components = {
  components: {
    schemas: {
      profile: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'name of the digimon',
            example: 'Agumon'
          },
          level: {
            type: 'string',
            description:
              'An Evolution Stage, also referred to as Level and Generation, is the level of development a Digimon is at. There are six stages of normal evolution, after hatching from a Digitama, through which a Digimon can naturally go through, starting with Baby I and progressing to Ultimate, although getting past Adult before death may be difficult.',
            example: 'Child'
          },
          type: {
            type: 'string',
            description:
              "What sort of category a Digimon's specific species belongs to. Many of these simply indicate what a Digimon is based on and only come into play under certain situations - some Digimon may have a certain advantage or disadvantage to a Digimon of another type. Or an item will work on a Digimon of one type or not the other.",
            example: 'Reptile'
          }
        }
      }
    }
  }
}

export default components
