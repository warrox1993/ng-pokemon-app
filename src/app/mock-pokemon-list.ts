import { Pokemon } from './pokemon';

export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poison"],
    createdAt: new Date('2023-01-12T10:00:00'),
    location: "Labo du Prof. Chen (Bourg Palette)",
    encounterTime: "Toute la journée"
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    createdAt: new Date('2023-02-14T11:30:00'),
    location: "Labo du Prof. Chen (Bourg Palette)",
    encounterTime: "Toute la journée"
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
    createdAt: new Date('2023-03-20T09:15:00'),
    location: "Labo du Prof. Chen (Bourg Palette)",
    encounterTime: "Toute la journée"
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: ["Insecte", "Poison"],
    createdAt: new Date('2023-04-01T08:00:00'),
    location: "Forêt de Jade",
    encounterTime: "Matin et journée"
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: ["Normal", "Vol"],
    createdAt: new Date('2023-05-10T14:00:00'),
    location: "Routes 1, 2 et 3",
    encounterTime: "Journée"
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    types: ["Normal"],
    createdAt: new Date('2023-06-15T17:30:00'),
    location: "Routes 1 à 22",
    encounterTime: "Nuit"
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
    types: ["Normal", "Vol"],
    createdAt: new Date('2023-07-01T12:00:00'),
    location: "Route 3 et Route 4",
    encounterTime: "Journée"
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: ["Poison"],
    createdAt: new Date('2023-08-22T09:45:00'),
    location: "Route 4 et Grotte",
    encounterTime: "Nuit"
  },
  {
    id: 9,
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: ["Electrik"],
    createdAt: new Date('2023-09-25T13:20:00'),
    location: "Forêt de Jade",
    encounterTime: "Matin"
  },
  {
    id: 10,
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Normal"],
    createdAt: new Date('2023-10-30T10:10:00'),
    location: "Route 4 (dans Rouge uniquement)",
    encounterTime: "Toute la journée"
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: ["Fée"],
    createdAt: new Date('2023-11-15T18:45:00'),
    location: "Mont Sélénite (rare)",
    encounterTime: "Nuit"
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture: "https://images.weserv.nl/?url=assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: ["Feu"],
    createdAt: new Date('2023-12-01T07:30:00'),
    location: "Route 7 et Route 8",
    encounterTime: "Journée"
  }
];
