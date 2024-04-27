import Edit from '@/components/edit/Edit'
import prisma from '@/utils/connect'
import React from 'react'

const getDataOfPostToEdit = async(id) =>{
  const  response = await prisma.post.findUnique({where:{id: id}})
  return response
}

const editPage = async ({params}) => {
  
  const data = await getDataOfPostToEdit(params.id)
  // console.log(data)
  return (
    <div>
      <Edit data={data} />
    </div>
  )
}

export default editPage