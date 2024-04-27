import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import prisma from "@/utils/connect";

const getData = async () =>{
  const res = await prisma.post.findMany();
  return res
}

const Menu = async () => {
  const data = await getData()
  const PopularPost =[]
   data.sort(function (a, b) {return b.views - a.views})
   for(let i=0;i<2;i++){
    PopularPost.push(data[i])
   }
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts data={PopularPost} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
