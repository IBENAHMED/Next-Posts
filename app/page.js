import Link from "next/link";
import style from "./page.module.css";

export default function Home() {

  return (
    <div className={style.home}>
      <Link href="/postes">Go to Postes</Link>
    </div>
  );
}
