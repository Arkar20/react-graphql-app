import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_DETAIL_POST = gql`
	query Detail($id: ID!) {
		PostResolver(id: $id) {
			title
			id
		}
	}
`;

export default function Detail() {
	let params = useParams();

	const { loading, data } = useQuery(GET_DETAIL_POST, {
		variables: { id: params.postid },
	});

	if (loading) return "Loading...";

	return <div>{data?.PostResolver.title}</div>;
}
