import RelationshipList from './RelationshipList'
import CustomTagList from './CustomTagList'

export default function BaseElementDetails({ element }) {
  return (
    <div>
      <h2>{element.name}</h2>
      <p>Type: {element.type}</p>
      <RelationshipList relationships={element.relationships} />
      <CustomTagList customTags={element.customTags} />
    </div>
  )
}
