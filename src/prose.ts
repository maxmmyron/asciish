const punctuation: Map<RegExp, string> = new Map();

punctuation.set(/--/g, '—');
punctuation.set(/!?/g, '‽');
punctuation.set(/.../g, '…');
punctuation.set(/\(c\)/gi, '©');
punctuation.set(/\(r\)/gi, '®');
punctuation.set(/\(tm\)/gi, '™');
punctuation.set(/&fleuron;/gi, '❦');
punctuation.set(/&hedera;/gi, '❦');

export { punctuation };
