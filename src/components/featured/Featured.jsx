import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts/featured", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const res = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Antral and Dev here!</b> Discover our stories and creative ideas.
      </h1>
      {res && (
        res.map((post)=>(
          <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postDesc}>
              {post.desc.replace(/<[^>]+>/g, '')}
            </p>
            <button className={styles.button}>
              <Link href={`/posts/${post.slug}`}>Read More</Link>
            </button>
          </div>
        </div>
        ))
      )}
    </div>
  );
};

export default Featured;
