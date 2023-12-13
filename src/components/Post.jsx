import { format, formatDistanceToNow, set } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comments";
import styles from "./post.module.css";
import { useState } from "react";

//author: {avatar_url, name, role, }
//publishedAt: Date
//content: String

export function Post(props) {
	const publishedDateFormated = format(
		props.publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR }
	);

	const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
	const [newCommentText, setNewCommentText] = useState("");

	function handleNewCommentChange(e) {
		e.target.setCustomValidity("");
		setNewCommentText(e.target.value);
	}

	function handleCreateNewComment(event) {
		event.preventDefault();
		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function deleteComment(commentToDelte) {
		const commentsWithoutDeletedItem = comments.filter((comment) => {
			return comment != commentToDelte;
		});
		setComments(commentsWithoutDeletedItem);
	}

	function handleNewCommentInvalid(e) {
		console.log(e);
		e.target.setCustomValidity("Este campo é obrigatório!");
	}

	const isNewCommentEmpty = newCommentText.length == 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={props.author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{props.author.name}</strong>
						<span>{props.author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormated}
					dateTime={props.publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{props.content.map((item) => {
					if (item.type === "paragraph") {
						return <p key={item.content}>{item.content}</p>;
					} else if (item.type == "link") {
						return (
							<p>
								<a key={item.content} href="#">
									{item.content}
								</a>
							</p>
						);
					}
				})}
			</div>
			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu comentário</strong>
				<textarea
					name="comment"
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required={true}
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
