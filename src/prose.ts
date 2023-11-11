const punctuation: Map<RegExp, string> = new Map();

punctuation.set(/--/g, '—');
punctuation.set(/!?/g, '‽');
punctuation.set(/.../g, '…');
punctuation.set(/\(c\)/gi, '©');

export { punctuation };
