export interface Personnage {
    id: string
    nom: string
    clan: string
    titre: string
    statut: string
    position: string
    caracteristiques: Record<string, number>
    influences: Record<string, number>
    utilisateur_id: string
  }
  