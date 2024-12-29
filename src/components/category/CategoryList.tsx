import styles from "./categoryList.module.css";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-semibold my-4 mt-10 py-4">Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/pages/tech"
          className={`${styles.category} ${styles.technology}`}
        >
          TECHNOLOGY
        </Link>

        <Link
          href={`/pages/webdev`}
          className={`${styles.category} ${styles.webdev}`}
        >
          WEB DEVELOPMENT
        </Link>

        <Link
          href={`/pages/learning`}
          className={`${styles.category} ${styles.learning}`}
        >
          LEARNING
        </Link>

        <Link
          href={`/pages/selfmotivation`}
          className={`${styles.category} ${styles.selfmotivation}`}
        >
          SELF MOTIVATION
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
