import styles from "./home.module.scss"
import ChatGptIcon from "../icons/chatgpt.svg"


export function SideBar() {
    return (
      <div className={styles.sidebar}>
        <div className={styles["sidebar-header"]} >
            <div className={styles["sidebar-title"]} >
                {"新聊天"}
            </div>
            <div className={styles["sidebar-sub-title"]}>
                {"创建你的ai助手"}
            </div>
            <div className={styles["sidebar-logo"] + " no-dark"}>
                <ChatGptIcon />
            </div>
        </div>
        <button
            className={styles["new-chat-button"]}
            onClick={()=>{

            }}>
        hello
        </button>
        <div className={styles["sidebar-body"]}>
            world
        </div>
      </div>
    );
  }