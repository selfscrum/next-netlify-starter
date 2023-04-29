export default function FacetSummary({ facetName, baseElements, customTags }) {
    return (
      <div>
        <h2>{facetName}</h2>
        <p>Number of base elements: {baseElements.length}</p>
        <ul>
          {customTags.map((tag) => (
            <li key={tag.name}>{tag.name}: {tag.value}</li>
          ))}
        </ul>
      </div>
    )
  }