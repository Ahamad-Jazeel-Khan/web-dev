import Link from "next/link"
import React from 'react'
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const { handle } = (await params).handle
  const client = await clientPromise
  const db = client.db('bittree')
  const collection = db.collection('link')

  // if the handle is already claimed. you cannot create the Bittree
  const item = await collection.findOne({ handle })
  if(!item) {
    return notFound()
  }


  const item2 = {
    "_id": {
      "$oid": "6821df00367a957d377a2a40"
    },
    "links": [
      {
        "link": "https://www.instagram.com/codewithharry/?hl=en",
        "linktext": "instagram"
      },
      {
        "link": "https://www.codewithharry.com/",
        "linktext": "website"
      },
      {
        "link": "https://www.youtube.com/@CodeWithHarry",
        "linktext": "youtube"
      }
    ],
    "handle": "harry",
    "pic": "https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_400x400.png"
  }



  return <div className="bg-purple-400 min-h-screen flex justify-center items-start py-10">
    {item && <div className="photo flex flex-col justify-center items-center gap-4">
      <img src={item.pic} alt="" />
      <span className="font-bold text-xl" >@{item.handle}</span>
      <span className="desc w-80 text-center">{item.desc}</span>
      <div className="links">
        {item.links.map((item, index) => {
          return <Link target="__blanck" key={index} href={item.link}><div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center  rounded-md my-3" >
            {item.linktext}

          </div></Link>
        })}
      </div>
    </div>}

  </div>
}