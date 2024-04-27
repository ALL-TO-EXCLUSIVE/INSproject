import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET FEATURED POST
export const GET = async () => {

  try {
    const featuredPosts = await prisma.post.findMany({where:{isFeatured:true}})

    return new NextResponse(JSON.stringify(featuredPosts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
