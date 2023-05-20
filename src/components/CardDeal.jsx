import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="docs" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Getting Started: A Guide to Using Your Bot
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Step-by-Step Instructions for Accessing and Navigating WhatsGPT


      </p>
      <a href="https://wa.link/dwpztn" target="_blank">
        <button type="button" class="text-white bg-gradient-to-r mt-6 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Connect with WhatsGPT </button>
      </a>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;