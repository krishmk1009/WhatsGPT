import styles from "../style";
import Button from "./Button";
import {qr} from "../assets"

const CTA = () => (
  <section id="scan" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Scan and Connect to Your <br></br> Personal Bot on WhatsApp!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Scan the QR or use the links mentioned above to use the WhatsGPT
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={qr} alt="code" className="w-[180px] h-[180px]" />
    </div>
  </section>
);

export default CTA;