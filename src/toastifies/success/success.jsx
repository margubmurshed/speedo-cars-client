import React from "react";
import classNames from "classnames";
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import styles from "./success.module.css";

const successToastify = (text) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>Success!</h1>
          <p>
            {text}
          </p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );

export default successToastify;
