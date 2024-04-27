import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage, data }) => {
 
  return (
    <div className={styles.items}>
      
      {data && data.map((post)=>(
              <Link href="/" className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
              )}
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.travel}`}> {[post.catSlug]} </span>
                <h3 className={styles.postTitle}>
                  {post.title}
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>John Doe</span>
                  <span className={styles.date}> - {JSON.stringify(post.createdAt).substring(1,11)} </span>
                </div>
              </div>
            </Link>
      )) }
    </div>
  );
};

export default MenuPosts;
