import Link from "next/link";
import React from "react";
import styles from "@/components/menuCategories/menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/pages/tech"
        className={`${styles.categoryItem} ${styles.tech}`}
      >
        TECHNOLOGY
      </Link>
      <Link href="/pages/webdev" className={`${styles.categoryItem} ${styles.webdev}`}>
        WEB DEVELOPMENT
      </Link>
      <Link href="/pages/learning" className={`${styles.categoryItem} ${styles.learning}`}>
        LEARNING
      </Link>
      <Link href="/pages/selfmotivation" className={`${styles.categoryItem} ${styles.selfmotivation}`}>
        SELF MOTIVATION
      </Link>
      
    </div>
  );
};

export default MenuCategories;
