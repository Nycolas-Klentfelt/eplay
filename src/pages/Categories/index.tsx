import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: RPGGames } = useGetRPGGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && RPGGames) {
    return (
      <>
        <ProductList
          id="action"
          games={actionGames}
          title="Ação"
          background="black"
        />
        <ProductList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="gray"
        />
        <ProductList
          id="fight"
          games={simulationGames}
          title="Luta"
          background="black"
        />
        <ProductList
          id="rpg"
          games={fightGames}
          title="RPG"
          background="gray"
        />
        <ProductList
          id="simulation"
          games={RPGGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
