import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ['200', '600'],  subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#f3332f]">
        <Image src={"/logo.png"} width={150} alt="logo" height={150} />

        <div className="sm:flex py-[40px] mx-[100px] ">
          <div className="w-full">
            <Image src={"/logo.png"} alt="logo" width={500} height={500} />
          </div>
          <div className="sm:mt-[100px] mx-[60px]text-white sm:mx-[0px]">
            <h1 className=" text-4xl font-bold  sm:leading-loose">THE SANTA COIN OF THE PEOPLE</h1>
            {/* eslint-disable react/no-unescaped-entities */}
            <p>
              Missed out on $BONK? Here's your chance with generational wealth <br />{" "}
              opportunity with twice the better on $BONK2.0 
            </p>
            {/* eslint-disable react/no-unescaped-entities */}
            <p className="text-[10px] sm:text-[20px]">Gh9AcyeZezm5DBvVpG9eSwN1pArtFGNU9q7RzLKkkQ8n</p>

            <div className="flex text-white  space-x-4 pt-3">
              <button className="bg-white   text-sm sm:text-lg text-[#f28b8c]  px-2 py-2  sm:px-3 sm:py-3 hover:bg-[#524c47] hover:text-white">
                Buy here
              </button>
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-3 py-2  sm:px-4 sm:py-3 hover:bg-[#524c47] hover:text-white">
                Chart
              </button>
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-2 py-2 sm:px-3 sm:py-3 hover:bg-[#524c47] hover:text-white">
                Telegram
              </button>
              <button className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-6 py-2  sm:px-9 sm:py-3 hover:bg-[#524c47] hover:text-white">
                X
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second secction */}
      <div className="bg-white text-center text-[#524c47] py-[100px]">
        <div>
          <button className="bg-[#f3332f] px-5 py-5 text-white">
            OUR MISSION
          </button>

          <p className="mx-[60px] text-center pt-5">
            Bonk 2.0 is dedicated to becoming the premier Web3 community on the
            Solana blockchain. Our mission is to foster inclusivity, innovation,
            and decentralized collaboration. We aim to create a vibrant space
            where creators, developers, and enthusiasts converge to push the
            boundaries of what's possible. Through transparent governance and
            community-driven initiatives, Bonk 2.0 seeks to set the standard for
            excellence in the Solana ecosystem. We are committed to providing a
            dynamic platform that empowers individuals, fosters creativity, and
            propels us to be the best Web3 community on the Solana chain. Join
            us in shaping the future of decentralized collaboration.
          </p>
        </div>
      </div>

      {/* third section */}
      <div className="bg-[#f3332f] text-center text-white py-[100px]">
        <button className="bg-white  px-5 py-5 text-[#f3332f]">
          TOKENOMICS
        </button>

        <div className="flex space-x-8 justify-center pt-[30px]">
          <div>
            <p>100,000,000</p>
            <p>Total Supply</p>
          </div>

          <div>
            <p>0/0</p>
            <p>Tax</p>
          </div>
        </div>
      </div>

      {/* forth section */}
      <div className="bg-white  text-[#f3332f] py-[120px]">
        <div className="grid justify-items-center">
          <button className="bg-[#f3332f]  px-5 py-5 text-white">
            ROADMAP
          </button>
        </div>

        <div>
          {/* content 1 */}
          <div className="px-[60px] sm:mx-[100px] pt-[30px] text-balance justify-items-center grid  grid-cols-2 sm:grid sm:grid-cols-4 space-y-[30px] sm:space-y-[0px] space-x-[20px]  sm:space-x-[70px]">
            <div className="pt-[30px] sm:pt-[0px] pl-[20px] sm:pl-[20px]">
              <h2>PHASE 1</h2>

              <ul className="list-disc text-[#524c47]">
                <li> Token launch</li>
                <li> Website and social medias</li>
                <li>Bonk meme generator</li>
              </ul>
            </div>

            <div>
              <h2>PHASE 1</h2>

              <ul className="list-disc text-[#524c47]">
                <li> Token launch</li>
                <li> Website and social medias</li>
                <li>Bonk meme generator</li>
              </ul>
            </div>

            <div>
              <h2>PHASE 1</h2>

              <ul className="list-disc text-[#524c47]">
                <li> Token launch</li>
                <li> Website and social medias</li>
                <li>Bonk meme generator</li>
              </ul>
            </div>

            <div>
              <h2>PHASE 1</h2>

              <ul className="list-disc text-[#524c47]">
                <li> Token launch</li>
                <li> Website and social medias</li>
                <li>Bonk meme generator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
