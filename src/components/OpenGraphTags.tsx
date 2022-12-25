import { Helmet } from 'react-helmet-async'
import { OpenGraphTagsProps } from '../utils/types'

const OpenGraphTags = ({ title }: OpenGraphTagsProps) => {
  const description: string = 'This is the ranking for cheesecake and burgers'
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default OpenGraphTags
