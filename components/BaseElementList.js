import Link from 'next/link'

export default function BaseElementList({ facetName, baseElements }) {
  return (
    <div>
      <h2>{facetName}</h2>
      <ul>
        {baseElements.map((element) => (
          <li key={element.id}>
            <Link href={`/${facetName.toLowerCase()}/${element.id}`}>
              <a>{element.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
