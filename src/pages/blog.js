import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Blog() {
	// This will be an array of blog posts
	const posts = useStaticQuery(query).allContentfulBlog.edges

	return (
		<div className="bg-yellow-500 flex items-center justify-center h-screen w-screen">
			<span className="text-white text-5xl font-medium">Blog Page</span>
			{posts.map((post) => {
				return <p key={post.id}>{post.name}</p>
			})}
		</div>
	)
}

// Sample graphql query from Contentful to get all blog posts

const query = graphql`
	query {
		allContentfulBlog {
			edges {
				node {
					id
					title
				}
			}
		}
	}
`
