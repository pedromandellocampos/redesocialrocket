import { PencilLine } from "phosphor-react";

import styles from "./sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<div className={styles.profile}>
				<Avatar src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

				<strong>Pedro Mandello</strong>
				<span>Web Developer</span>

				<footer>
					<a href="#">
						<PencilLine size={20} />
						Editar seu perfil
					</a>
				</footer>
			</div>
		</aside>
	);
}
