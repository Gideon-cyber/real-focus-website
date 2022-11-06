import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Real Focus</title>
        <meta name="description" content="Real focus company website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Poppins bg-likeBlack">
        <Hero />
        <Info />
        <About />
        <div className="bg-likeBlack flex items-center justify-center w-full relative md:h-[450px] py-[36px]">
          <div className="flex items-center flex-col md:flex-row gap-[60px] relative z-10">
            <img
              src="/girl.svg"
              alt="laptop"
              className="w-[300px] mt-11 flex items-baseline"
            />
            <div className="w-[300px] md:w-[600px] md:relative flex flex-col">
              <h2
                className={`${styles.active} text-[32px] md:text-[45px] leading-[40px] md:leading-[55px] font-b-500 uppercase w-[100%] md:w-[400px] mb-3`}
              >
                Move with the beat of yor life
              </h2>
              <span className="font-b-400 text-[20px] text-white leading-[30px] w-[100%] md:w-[400px] block mb-3">
                Enjoy the biggest collection of the best gadgets on sales that
                match your needs.
              </span>
              {/* <button
                type="button"
                className="rounded-[40px] h-[46px] w-[158px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-b-500 mx-auto"
              >
                Learn More
              </button> */}
              <div className="hidden md:block md:absolute">
                <div className="flex items-center gap-[20px] overflow-scroll md:overflow-hidden md:mt-[15rem] w-full">
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/Topographic2.svg"
            alt="topographic2"
            className="absolute right-0 top-0"
          />
        </div>

        {/* Values section */}
        <div className="bg-white flex items-center justify-center w-full h-auto relative z-3 py-[37px] md:pt-[200px] md:pb-[100px] text-white">
          <div className="bg-likeBlack flex items-center justify-center flex-col p-[30px] md:p-[100px] w-[90%] md:w-[80%] rounded-[24px] relative overflow-hidden">
            <img
              src="/Topographic3.svg"
              alt="topographic"
              className="absolute bottom-0 left-0"
            />
            <img
              src="/Topographic4.svg"
              alt="topographic"
              className="absolute top-0 right-0"
            />
            <h3 className="block font-b-700 text-[24px] leading-[30px] mb-2">
              WHY US?
            </h3>
            <span className="mb-6">Our values and our philosophy</span>

            <div className="flex flex-col items-start relative z-[3] w-[100%] md:w-[60%] mb-10">
              <h4 className="uppercase font-b-500 mb-3">We Care</h4>
              <span className="text-[13px] leading-[18px]">
                We care about our work. We care about doing a good job. We care
                about customers. We care about the environment and society. We
                are not ‘just doing our joib’ we care about product you recieve
                and experience you will have.
              </span>
            </div>

            <div className="flex flex-col items-start relative z-[3] w-[100%] md:w-[60%] mb-10">
              <h4 className="uppercase font-b-500 mb-3">
                We Provide the best quality
              </h4>
              <span className="text-[13px] leading-[18px]">
                Here you will find products of the best brands in gadgets worls.
                Moreover if you are not satisfied with quality of product we are
                always here to help you.
              </span>
            </div>

            <div className="flex flex-col items-start relative z-[3] w-[100%] md:w-[60%] mb-10">
              <h4 className="uppercase font-b-500 mb-3">
                We promote the comfort
              </h4>
              <span className="text-[13px] leading-[18px]">
                We deliver all products to provide the most comfortable servise.
                You can order a delivery to home, office, garage, garden,
                island...Wherever you need.
              </span>
            </div>

            <div className="flex flex-col items-start relative z-[3] w-[100%] md:w-[60%]">
              <h4 className="uppercase font-b-500 mb-3">We learn</h4>
              <span className="text-[13px] leading-[18px]">
                We always grow and learn new. We have a special blog about news
                from thech world. Subscribe to recieve news and articles which
                our specialists recommend to read to keep up with fast growing
                world of tech.
              </span>
            </div>
          </div>
        </div>
        {/* What customers say section */}
        <div className="bg-likeBlack w-full h-[450px] text-white flex items-center justify-center relative overflow-hidden">
          <img
            src="/Topographic5.svg"
            alt="topography"
            className="absolute top-0 right-0"
          />
          <h3 className="uppercase font-b-600">What our customers say</h3>
        </div>

        {/* Contact section */}
        <div className="flex items-center justify-center text-likeBlack bg-white w-full h-[350px]">
          <div className="flex items-center gap-2 flex-col">
            <h3 className="uppercase font-b-700 text-[24px] leading-[30px] mb-2">
              You have questions?
            </h3>
            <span className="text-[16px] leading-[20px] mb-3">Contact us</span>
            <div className="flex items-center gap-2">
              <Image src="/phone.svg" alt="phone" width={18} height={18} />
              <span className="">+2341112223344</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/mail.svg" alt="phone" width={18} height={18} />
              <span className="">google.gmail.com</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
