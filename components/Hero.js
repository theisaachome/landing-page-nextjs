import Image from "next/image";
import styles from "../styles/components/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <Image
          src="/images/illustration-intro.png"
          alt="hero"
          width={716}
          height={531}
        />
      </div>
      <div className={styles.hero__text}>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button className={styles.cta}>Get Started</button>
    </section>
  );
};

export default Hero;
