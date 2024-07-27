// import React from "react";
// import { useState,useEffect } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { Typography,Button } from "@mui/material";
// import styles from "./Cards.module.css"



// function CardButton({text='Wallet Balance',Amount='500',type='Add income'}){


//     return(
//         <div>
//             <Card className={styles.CardContainer}>
//             <Card className={styles.Cards}>
//                 <Typography>{text}:{Amount}</Typography>
//                 <Button variant="contained">{type}</Button>
//             </Card>
//             </Card>
           

//         </div>
//     )
// }

// export default CardButton;

import Button from "../Button/Button"
import styles from "./Cards.module.css"


export default function Card({
  title,
  money,
  buttonText,
  buttonType,
  handleClick,
  success = true,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        {`${title}: `}
        <span className={success ? styles.success : styles.failure}>
          {`₹${money}`}
        </span>
      </h3>
      <Button handleClick={handleClick} style={buttonType}>
        {buttonText}
      </Button>
    </div>
  );
}
