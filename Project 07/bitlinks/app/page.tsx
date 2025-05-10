import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});



export default function Home() {
  return (
    <main className="bg-purple-100">
     <section className="grid grid-cols-2 h-[50vh]">
      <div className=" flex flex-col gap-4 items-center justify-center ">
        <p className={`text-3xl font-bold ${poppins.className}`}>
        The best URL shortner in the Market 
        </p>
        <p className="px-56">
          We are the most straightforward URL shortner in the World. Most Of the URL Shortner will track you or ask you to give your details for login. we understand your needs and hence we have created this URl shortner which is completely free and does not track you. 
        </p>
        <div className='flex gap-3 justify-start'>
        <Link href="/shorten"><button className='text-white bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold'>Try Now</button></Link>
        <Link href="/github"><button className='text-white bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold'>Github</button></Link> 
        </div>
          
      </div>
      <div className="flex justify-start relative">
        <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}  />
      </div>

     </section>
    </main>
  );
}
