export function getTermColor(term) {
  term = term.toLowerCase()
  if (term.includes('fall')) {
    return 'bg-blue-500'
  }
  if(term.includes('spring')) {
    return 'bg-green-500'
  }
  if(term.includes('summer')) {
    return 'bg-yellow-500'
  }
}
