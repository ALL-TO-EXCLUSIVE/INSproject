import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET FEATURED POST
export const POST = async (req) => {


  const data = await req.json()
  // console.log(data,"\n\ndata got in api request")
  try {
    const updatedPost = await prisma.post.update({
      where: { id: data.id },
      data: {
        title:  data.title,
        desc: data.desc,
        img: data.img,
        slug: data.slug,
        catSlug: data.catSlug
      },
      include: { user: true }
    })

    return new NextResponse(JSON.stringify(updatedPost, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
