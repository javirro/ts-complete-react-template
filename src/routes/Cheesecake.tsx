import { useState } from 'react'
import { RankingData } from '../utils/types'
import '../styles/inputPages.css'
import '../styles/global.css'
import CheeseCakeRanking from '../components/CheesecakeRanking'
import OpenGraphTags from '../components/OpenGraphTags'

const Cheesecake = () => {
  const [input, setInput] = useState<RankingData>({
    restaurant: '',
    position: '',
    price: '',
  })

  const saveHandler = async () => {}

  return (
    <div className="container">
      <OpenGraphTags title={"Cheesecake ranking"} />
      <input
        type="text"
        value={input.restaurant}
        placeholder="Where did you eat?"
        className="text-inputs"
        onChange={(e) => {
          setInput({ ...input, restaurant: e.target.value })
        }}
      />

      <input
        type="text"
        value={input.position}
        placeholder="What is the position in the ranking?"
        className="text-inputs"
        onChange={(e) => {
          setInput({ ...input, position: e.target.value })
        }}
      />

      <input
        type="text"
        value={input.price}
        placeholder="How much does it cost?"
        className="text-inputs"
        onChange={(e) => {
          setInput({ ...input, price: e.target.value })
        }}
      />
      <button className="save" onClick={saveHandler}>
        Save cheesecake
      </button>

      <CheeseCakeRanking />
    </div>
  )
}
export default Cheesecake
