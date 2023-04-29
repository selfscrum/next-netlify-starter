import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/identity">
            <a>Identity</a>
          </Link>
        </li>
        <li>
          <Link href="/architecture">
            <a>Architecture</a>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="/organisation">
            <a>Organisation</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/brand">
            <a>Brand</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
