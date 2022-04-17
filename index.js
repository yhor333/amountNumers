function amountNumers(incidence) {
  if (typeof incidence === 'number') {
    let result = String(incidence);
    return result.length;
  }
  throw new Error('Enter number');
}
