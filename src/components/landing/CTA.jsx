import styles from "../../style";
import Button from "./Button";
import { useGlobalContext } from "../../context/SidebarContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CTA = () => {
  const { openSidebar } = useGlobalContext();
  const { userInfo }  = useSelector((state) => state.auth);
  return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept crypto payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {userInfo?
        <Link to={'/admin'}>
            <Button />
        </Link>:
        <button onClick={openSidebar}>
          <Button />
        </button>}
    </div>
  </section>
  );
  };

export default CTA;
