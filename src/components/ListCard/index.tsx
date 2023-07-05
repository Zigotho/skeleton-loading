import { cardValues } from '@/consts/constCards'
import { Card } from '../Card'

export const ListCard = () => {
  return (
    <div className="grid grid-cols-6 m-4">
      {cardValues.map((card) => (
        <Card isLoading={card.isLoading} key={card.id} {...card} />
      ))}
    </div>
  )
}
