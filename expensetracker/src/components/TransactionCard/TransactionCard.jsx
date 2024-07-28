import "./TransactionCard.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoPencil } from "react-icons/go";

const TransactionCard = ({ action, transactionid, clickHandler }) => {
  return (
    <>
      <button
        onClick={() => {
          clickHandler(transactionid);
        }}
        className={
          action === "remove" ? "removeTransaction" : "editTransaction"
        }
      >
        {action === "remove" ? (
          <>
            <IoIosCloseCircleOutline />
          </>
        ) : (
          <>
            <GoPencil />
          </>
        )}
      </button>
    </>
  );
};

export default TransactionCard;
