import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_POST = gql`
	mutation AddPost($user_id: ID!, $title: String!, $desc: String!) {
		createPost(user_id: $user_id, title: $title, desc: $desc) {
			title
			id
			desc
			user {
				name
			}
		}
	}
`;
export default function CreatePost() {
	const [addTodo, { error }] = useMutation(ADD_POST);

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	return (
		<div>
			{error && error.message}
			<h3>Create Post Form</h3>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo({
						variables: {
							user_id: 10,
							title: title,
							desc: desc,
						},
					});
				}}>
				<label htmlFor=''>Post Title</label>

				<input value={title} onChange={e => setTitle(e.target.value)} />

				<label htmlFor=''>Post Description</label>

				<textarea
					name=''
					id=''
					cols='30'
					rows='10'
					value={desc}
					onChange={e => setDesc(e.target.value)}></textarea>

				<button>Post</button>
			</form>
		</div>
	);
}
