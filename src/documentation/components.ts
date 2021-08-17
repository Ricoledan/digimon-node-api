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
          },
          attribute: {
            type: 'string',
            description:
              'Refers to the type of computer file a Digimon represents. There are six different possible attributes',
            example: 'Vaccine'
          },
          field: {
            type: 'array',
            items: {
              type: 'string'
            },
            description:
              "A Digimon's Field is an overall branching group of Digimon that each one belongs to. There are ten different fields, each with a different theme. Digimon can have more than one field or none.",
            example: 'Metal Empire'
          },
          group: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: "A Digimon's Group is a specific theme it belongs to.",
            example: 'Warrior Ten'
          },
          technique: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Name of the technique',
                  example: 'Baby Flame'
                },
                description: {
                  type: 'string',
                  description: 'Brief description of the technique',
                  example:
                    'Spits a fiery breath from its mouth to attack the opponent.'
                }
              }
            }
          },
          artwork: {
            type: 'string',
            description: 'Representational image for a digimon'
          },
          profile: {
            type: 'string',
            description: 'Short biographical information about the Digimon'
          }
        }
      }
    }
  }
}

export default components
