// import useFetch from 'fetch-suspense'
import '../styles/rankingTables.css'

const CheeseCakeRanking = () => {
  // const rankingData = useFetch('url')
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Restaurant</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bertys</td>
            <td>5 €</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Cremaet Valencia</td>
            <td>5 €</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CheeseCakeRanking
