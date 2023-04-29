export default function RelationshipList({ relationships }) {
    return (
      <div>
        <h3>Relationships</h3>
        <ul>
          {relationships.map((relationship) => (
            <li key={relationship.id}>{relationship.type}: {relationship.baseElementName}</li>
          ))}
        </ul>
      </div>
    )
  }
  