import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["200", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src={"/santa.jpg"}
          width={200}
          height={100}
          alt="image"
          className="filter brightness-50 shadow-lg' block h-full w-full object-cover"
        />
        
        <div className=" absolute">
        {/* <Image src={"/logo.png"} width={60} alt="logo" height={60} /> */}

        <div className="sm:flex py-[40px] ">
          
          <div className="sm:mt-[100px]  mx-[60px] text-center sm:mx-[0px]  text-white">
            <h1 className="text-white pb-[30px] text-4xl sm:text-6xl font-bold sm:leading-loose">
              SANTA COIN FOR THE PEOPLE
            </h1>
            {/* eslint-disable react/no-unescaped-entities */}
            {/* <p className="text-white sm:text-[20px]">
              Missed out on $BONK? Here's your chance with generational wealth{" "}
              <br /> opportunity with twice the better on $BONK2.0
            </p>
            eslint-disable react/no-unescaped-entities */}
            {/* <p className="text-white text-[10px] pt-[10px]  sm:text-[12px]">
              Gh9AcyeZezm5DBvVpG9eSwN1pArtFGNU9q7RzLKkkQ8n
            </p> */}
            <p className="text-white sm:text-[20px]">
            $Santa Coin Contract: 0xaDBA987955Eac146f1983062100046be46e632fA
            </p>

            <div className="flex justify-center text-white  gap-4 pt-3">
              {/* <Link  href="https://t.me/santaclausonavax" >
              <button className="bg-white   text-sm sm:text-lg text-[#f28b8c]  px-2 py-2  sm:px-3 sm:py-3 hover:bg-[#524c47] hover:text-white">
                Buy here
              </button>
              </Link>
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-3 py-2  sm:px-4 sm:py-3 hover:bg-[#524c47] hover:text-white">
                Chart
              </button> */}
              <Link  href="https://t.me/santaclausonavax" >
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-3 py-3 hover:bg-[#524c47] hover:text-white">
                Telegram
              </button>
              </Link>

              <Link href="https://x.com/santaclaus_avax?t=a1Ni1QvGshnnSSHI0wBf8w&s=08">
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-9 py-3 hover:bg-[#524c47] hover:text-white">
                X
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
      <div className="bg-white">
        {/* <Image src={"/logo.png"} width={60} alt="logo" height={60} /> */}

        <div className="grid justify-center align-items-center pb-[100px]">
          <div className="">
            <Image src={"/logo.png"} alt="logo" width={700} height={700} />
          </div>
         
            
          
            
            <p className="mx-[60px] text-[#f3332f] text-center pt-5">
            It’s finally the time of the year where we gift our loved ones to
            celebrate the birth of Jesus Christ. This practice was invented by
            Santa Claus who is also known as the father of Christmas. Santa
            Claus on avax is a meme token without any financial return/reward
            created to for fun to celebrate the birth of Jesus Christ and also
            to Celebrate the father of Christmas Santa.
          </p>
            
         
        </div>
      </div>

      {/* second secction */}
      <div className="bg-[#f3332f]  text-center text-[#524c47] py-[100px]">
        <div>
          

          
        </div>
      </div>

      

      
    </main>
  );
}
