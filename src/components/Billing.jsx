import { bill, google, linkedin, logo } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Utilize the Power of OpenAI to Explore everything from your place
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With the option to receive responses in either text or image format, users have the flexibility to customize their experience to meet their needs. Whether you're looking for quick answers or engaging in conversation, WhtspGPT provides a seamless and reliable solution for all your communication needs.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="#home">

          <img src={logo} alt="logo" className="w-[128.86px] h-[60.05px] object-contain mr-5 cursor-pointer" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US" target="_blank">
          <img src={google} alt="goole_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;