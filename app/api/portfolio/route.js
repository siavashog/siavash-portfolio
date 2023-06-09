import mongoose from "mongoose";
import {NextResponse} from "next/server";
import connectDB from "../../lib/mongoose";
import {Portfolio} from "../../models/portfolio";

// mongoose.Promise = clientPromise;
export async function GET(req) {
  await connectDB()
  if(req){
     const _id = '647321edb121da0f0e2df12f'
      const data =  await Portfolio.findOne({_id:'647321edb121da0f0e2df12f'})
      return NextResponse.json(data)
    } else{
    const data = await Portfolio.find()
    return NextResponse.json({data})
    }
}
export async function POST(req) {
  await connectDB()
  const {mainImage , aboutImage , aboutDescription ,experienceImage,experienceDescription,skillImage
    ,skillPercentage,projectImage,projectTitle,projectDescription
  } = req.body;
    const portfolioDuc = await Portfolio.create({
    mainImage , aboutImage , aboutDescription ,experienceImage,experienceDescription,skillImage
    ,skillPercentage,projectImage,projectTitle,projectDescription
    })
  console.log(portfolioDuc)
  return NextResponse.json({portfolioDuc})
}
export async function PUT(req) {
  await connectDB()
  console.log(req)
  const {mainImage , aboutImage , aboutDescription ,experienceImage,experienceDescription,skillImage
    ,skillPercentage,projectImage,projectTitle,projectDescription} = await req.json();
    await Portfolio.updateOne({_id:'647321edb121da0f0e2df12f'} , {
      mainImage , aboutImage , aboutDescription ,experienceImage,experienceDescription,skillImage
    ,skillPercentage,projectImage,projectTitle,projectDescription })

  return NextResponse.json(true)
}
export async function DELETE(req) {
  await connectDB()
  if(req.query?.id){
    await Portfolio.deleteOne({_id:req.query.id});
  }
  return NextResponse.json(true)
}
