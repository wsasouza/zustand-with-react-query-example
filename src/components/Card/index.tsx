import { Repo } from '../../queries/repo/types'
import './styles.css'

type CardProps = {
  repo: Repo
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
  isFavorite: boolean
}

export default function Card({
  repo,
  addToFavorites,
  isFavorite,
  removeFromFavorites,
}: CardProps) {
  function handleToggleFavorite() {
    if (isFavorite) {
      removeFromFavorites(repo.id)
    } else {
      addToFavorites(repo.id)
    }
  }

  return (
    <div className="card">
      <h2>{repo.name}</h2>

      <div className="card-buttons">
        <button onClick={handleToggleFavorite}>
          {!isFavorite ? 'Favoritar' : 'Remover dos favoritos'}
        </button>
      </div>
    </div>
  )
}
