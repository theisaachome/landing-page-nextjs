import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.scss";
const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <Link href="/" passHref>
            <Image src="/images/logo.svg" alt="logo" width={185} height={54} />
          </Link>
        </div>
        <div className={styles.header__items}>
          <Link href="/features">Features</Link>
          <Link href="/team">Team</Link>
          <Link href="signin">Sign In</Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
