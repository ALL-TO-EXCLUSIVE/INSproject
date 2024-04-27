
import React from "react";
import styles from "./editPage.module.css";
import prisma from "@/utils/connect";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const getData = async () => {
  const session = await getSession();
  // if(!session?.user){
  //   redirect("/login");
  // }
  // const res = await fetch(`http://localhost:3000/api/posts/allpost`);
  // return res
  const data = await prisma.post.findMany({
    where: { userEmail: session?.user.email },
  });
  return data;
};

const editPage = async () => {

  const data = await getData();
  return (
    <div className={styles.container} >
      <table className={styles.table} >
        <th className={styles.th} >#</th>
        <th className={styles.th} >Title</th>
        <th className={styles.th} >Edit</th>
        {data && data.map((post,index) => (
          <tr className={styles.tr}> 
            <td className={styles.td} >{(index+1)} </td>
            <td className={styles.td} style={{textAlign:"left"}} > {post.title} </td>
            <td className={styles.td} style={{background:"transparent"}} > <Link className={styles.editButton}  href={`/edit/${post.id}`} >Edit</Link> </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default editPage;
