import { bill } from "../../assets";
import styles, { layout } from "../../style";

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
        Easily control your <br className="sm:block hidden" /> deposit &
        withdraw
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We store 100% of your crypto in colde storage.
      We guarantee at least a 1:1 reserve ratio of our customer funds.
      </p>

    </div>
  </section>
);

export default Billing;
