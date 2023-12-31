import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const poppins = Poppins({ weight: ["200", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="relative  flex h-full w-full items-center justify-center">
        <Image
          src={"/santa.jpg"}
          width={300}
          height={300}
          alt="image"
          className="filter brightness-50 shadow-lg' block h-full w-full object-cover"
        />

        <div className="items-center mx-[200px] my-[300px] justify-center absolute ">
          <div className="sm:flex py-[100px] ">
            <div className="sm:mt-[100px]   mx-[60px] text-center sm:mx-[0px]  text-white">
              <motion.h1 className="text-white pt-[50px] pb-[30px] text-5xl sm:text-6xl font-extrabold sm:leading-loose">
                CHRISTMAS IS HERE 🎉
              </motion.h1>
              <p className="text-white text-[11px] sm:text-[20px]">
                $Christmas Coin Contract:
                0x50dc0aE51eC82178279f8bB6789EcA7D16e2aAe6
              </p>

              <div className="flex justify-center text-white pb-[50px]  gap-4 py-3">
                <Link href="https://traderjoexyz.com/avalanche/trade">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-white  text-xm sm:text-lg text-[#f28b8c] px-3 py-2.5 sm:px-9 sm:py-3 hover:bg-[#524c47] hover:text-white"
                  >
                    Buy
                  </motion.button>
                </Link>

                <Link href="https://t.me/christmasonavax">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-white  text-sm sm:text-lg text-[#f28b8c] px-3 py-3 sm:px-6 sm:py-3 hover:bg-[#524c47] hover:text-white"
                  >
                    Telegram
                  </motion.button>
                </Link>

                <Link href="https://twitter.com/xmasonavax">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-white  text-xm sm:text-lg text-[#f28b8c] px-3 py-2.5 sm:px-9 sm:py-3 hover:bg-[#524c47] hover:text-white"
                  >
                    X
                  </motion.button>
                </Link>

                <Link href="">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                    className="bg-white  text-xm sm:text-lg text-[#f28b8c] px-3 py-2.5 sm:px-9 sm:py-3 hover:bg-[#524c47] hover:text-white"
                  >
                    Chart
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="grid justify-center align-items-center pb-[100px]">
          <div className="grid place-items-center ">
            <Image src={"/christmas.png"} alt="logo" width={700} height={700} />
          </div>

          <p className="mx-[60px] text-[#f3332f] text-[15px] text-bold leading-loose sm:text-[20px] text-center pt-5">
            It’s finally the time of the year where we gift our loved ones to <br />
            celebrate the birth of Jesus Christ. This practice was invented by <br />
            Santa Claus who is also known as the father of Christmas. $Christmas <br />
            on avax is a meme token without any financial return/reward created <br />
            for fun to celebrate the birth of Jesus Christ and also to Celebrate <br />
            the father of Christmas Santa.
          </p>
        </div>
      </div>

      {/* second secction */}
      <div className="bg-[#f3332f]  text-center text-[#524c47] py-[100px]">
        <div>
          <button className="py-4 px-4 text-[#524c47] font-bold bg-white text-[30px]">
            Tokenomics
          </button>

          <div className="grid gap-[70px] pt-[60px]">
            <div className="grid text-white">
              <h4 className="text-[25px] font-medium">Token supply</h4>
              <p>100,000,000</p>
            </div>

            <div className="grid text-white">
              <h4 className="text-[25px] font-medium">Tax</h4>
              <p>5/5</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
