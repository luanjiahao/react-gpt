import styles from "./mask-page-module.scss"
import { Avatar, EmojiAvatar } from "./emoji";






export function MaskAvatar(props: { avatar: string }) {
    return (
        <Avatar avatar={props.avatar} />
    );
}

export function MaskPage() {

    return (
        <div className={styles["new-chat"]}>
          <div className={styles["mask-cards"]}>
            <div className={styles["mask-card"]}>
              <EmojiAvatar avatar="1f606" size={24} />
            </div>
            <div className={styles["mask-card"]}>
              <EmojiAvatar avatar="1f916" size={24} />
            </div>
            <div className={styles["mask-card"]}>
              <EmojiAvatar avatar="1f479" size={24} />
            </div>
          </div>
    
          <div className={styles["title"]}>{"挑选一个面具"}</div>
          <div className={styles["sub-title"]}>{"现在开始，与面具背后的灵魂思维碰撞"}</div>
    
          <div className={styles["mask-container"]}>
              {"遍历面具"}
            </div>
        </div>
      );
}