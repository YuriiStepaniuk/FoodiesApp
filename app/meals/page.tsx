import Link from "next/link";

import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

const MealsPage: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, create{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and
          delicious
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
