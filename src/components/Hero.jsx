import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="text-slate-300">Empowering Learning through Technology
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            CampusAi -<br className="sm:block hidden" />{" "}
            <span className="text-gradient md:text-6xl sm:text-5xl	">Educational Chatbot Integration</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">

        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unlock Learning Opportunities on WhatsApp with Our Educational Chatbot Integration
        </p>
        <div >
          {/* <GetStarted /> */}
          <a href='https://wa.link/yqgz7h' target="_blank">

            <button type="button" className="text-black pt-3 pb-3 mt-6 bg-white via-cyan-500 to-cyan-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Connect to Our Educational Bot</button>

          </a>

        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[550px] h-[100%] relative z-[5]" />

        {/* gradient start */}
        
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


    </section>
  );
};

export default Hero;