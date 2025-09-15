import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: RPGGames, isLoading: isLoadingRPG } = useGetRPGGamesQuery()

  return (
    <>
      <ProductList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSport}
      />
      <ProductList
        id="fight"
        games={simulationGames}
        title="Luta"
        background="black"
        isLoading={isLoadingFight}
      />
      <ProductList
        id="rpg"
        games={fightGames}
        title="RPG"
        background="gray"
        isLoading={isLoadingRPG}
      />
      <ProductList
        id="simulation"
        games={RPGGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
