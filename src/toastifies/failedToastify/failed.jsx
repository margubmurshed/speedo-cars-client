import React from "react";
import classNames from "classnames";
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { BiError } from "react-icons/bi";
import styles from "./failed.module.css";

const failedToastify = (text) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className={styles.iconWrapper}>
          <BiError />
        </div>
        <div className={styles.contentWrapper}>
          <h1>Failed!</h1>
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

export default failedToastify;
