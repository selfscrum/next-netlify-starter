export default function CustomTagList({ customTags }) {
    return (
      <div>
        <h3>Custom Tags</h3>
        <ul>
          {customTags.map((tag) => (
            <li key={tag.name}>{tag.name}: {tag.value}</li>
          ))}
        </ul>
      </div>
    )
  }
  