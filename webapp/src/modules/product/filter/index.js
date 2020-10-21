function type(type) {
  return {
    SHEET: 'Lençol',
    PILLOW: 'Travesseiro',
    CUSHION: 'Almofada',
    BEDSPREAD: 'Colcha',
    BLANKET: 'Cobertor',
  }[type];
}

function size(size) {
  return {
    SINGLE: 'Solteiro',
    COUPLE: 'Casal',
    QUEEN: 'Queen',
    KING: 'King',
    KID: 'Infantil',
  }[size];
}

export { type, size };
