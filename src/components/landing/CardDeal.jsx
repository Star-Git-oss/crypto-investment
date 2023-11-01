import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";
import { useGlobalContext } from "../../context/SidebarContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardDeal = () => {
  const { openSidebar } = useGlobalContext();
  const { userInfo }  = useSelector((state) => state.auth);
  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better investment chance in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      Let's Experience the New Era of Crypto Currency.
      Earn Together with Friends!
      </p>

      {userInfo?
        <Link to={'/admin'}>
            <Button />
        </Link>:
        <button onClick={openSidebar}>
          <Button />
        </button>}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);
}
export default CardDeal;
