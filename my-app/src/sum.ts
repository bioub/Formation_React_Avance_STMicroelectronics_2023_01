// Fonction Pure
// - prédictive : appelée avec des paramètres donnés, elle a toujours le même retour
// ex: sum(1, 2) === 3
// (contre ex: rand(0, 10) === ???)
// - elle n'a pas de side effect : pas d'appels externe, ex: réseaux, storage...
// - elle ne modifie pas ses paramètres


export function sum(a: number, b: number): number {
  return a + b;
}
