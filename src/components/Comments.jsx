import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(props) {
	function handleDeleteComment() {
		props.onDeleteComment(props.content);
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Pedro Mandello</strong>
							<time
								title="11 de maio às 08:13"
								dateTime="2023-03-12 08:22:26"
							>
								Publicado há cerca de 1h
							</time>
						</div>
						<button
							onClick={handleDeleteComment}
							title="Deletar comentário"
						>
							<Trash size={24} />
						</button>
					</header>
					<p>{props.content}</p>
				</div>
				<footer>
					<button>
						<ThumbsUp /> Aplaudir <span> 20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
