export interface TypeColorInfo {
    class: string; // pour le chip
    hex: string; // pour le fond et la bordure
}

export const TYPE_COLOR_MAP: Record<string, TypeColorInfo> = {
    feu: { class: 'red lighten-1', hex: '#e57373' },
    eau: { class: 'blue lighten-1', hex: '#64b5f6' },
    plante: { class: 'green lighten-1', hex: '#81c784' },
    insecte: { class: 'brown lighten-1', hex: '#a1887f' },
    normal: { class: 'grey lighten-3', hex: '#e0e0e0' },
    vol: { class: 'blue lighten-3', hex: '#90caf9' },
    poison: { class: 'deep-purple accent-1', hex: '#b388ff' },
    fée: { class: 'pink lighten-4', hex: '#f8bbd0' },
    psy: { class: 'deep-purple darken-2', hex: '#512da8' },
    électrik: { class: 'lime accent-1', hex: '#f4ff81' },
    electrik: { class: 'lime accent-1', hex: '#f4ff81' },
    combat: { class: 'deep-orange', hex: '#ff7043' },
    sol: { class: 'amber darken-2', hex: '#e0c068' },
    default: { class: 'grey', hex: '#f5f5f5' },
};
