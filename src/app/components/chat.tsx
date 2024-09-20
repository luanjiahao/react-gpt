
import styles from "./chat.module.scss";
import Locale from "../locales";
import { Fragment, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { CHAT_PAGE_SIZE, LAST_INPUT_KEY } from "../constant";
import { Avatar } from "./emoji";
import { MaskAvatar } from "./mask-page";
import { useDebouncedCallback } from "use-debounce";
import SendWhiteIcon from "../icons/send-white.svg";



export default function Chat() {
    return (
        <div className={styles.chat}>{"hello!!!"}</div>
    );
}