import React, { FC } from "react";
import { CardPropTypes } from "./CardPropTypes";
import styles from "./index.module.scss";

const Card: FC<CardPropTypes> = (props) => {
  return <div className={styles.card}>{props.text}</div>;
};

export default Card;
