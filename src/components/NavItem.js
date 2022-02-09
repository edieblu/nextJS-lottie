import Link from "next/link";

export default function NavItem({ url, name }) {
  return (
    <Link href={url}>
      <a>{name}</a>
    </Link>
  );
}
