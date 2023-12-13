import { useState } from "react";
import { Header } from "./components/header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

//author: {avatar_url, name, role, }
//publishedAt: Date
//content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl:
				"https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Pedro Mandello",
			role: "Java Developer",
		},
		content: [
			{ type: "paragraph", content: "	Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare", url: "#" },
			{
				type: "link",
				content: "#novoprojeto #nlw #rocketseat",
				url: "#",
			},
		],
		publishedAt: new Date("2022-05-03 08:16:13"),
	},
	{
		id: 2,
		author: {
			avatarUrl:
				"https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Pedro Mandello",
			role: "Java Developer",
		},
		content: [
			{ type: "paragraph", content: "	Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare", url: "#" },
			{
				type: "link",
				content: "#novoprojeto #nlw #rocketseat",
				url: "#",
			},
		],
		publishedAt: new Date("2022-05-03 08:16:13"),
	},
];

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}

export default App;
