import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
	query {
		posts {
			data {
				id
				title
			}
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_POSTS);

	return (
		<div className='App'>
			{error && <span>Something went wrong</span>}
			{loading && <p>Loading....</p>}

			<Link to='/post/create'>New Post</Link>
			<ul>
				{!loading &&
					data.posts.data.map(post => {
						return (
							<li>
								<Link key={post.id} to={`/posts/${post.id}`}>
									{post.title}
								</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default App;
