import styles from "./avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
	return (
		<img
			src={src}
			alt=""
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
		/>
	);
}
