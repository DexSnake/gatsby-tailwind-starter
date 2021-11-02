import { Link } from 'gatsby'
import React from 'react'

export default function Home() {
	return (
		<div className="bg-green-500 flex gap-3 items-center justify-center h-screen w-screen">
			<span className="text-white text-5xl font-medium">Home Page</span>
			<Link to="/blog">
				<span className="text-white text-5xl font-medium">Blog Page</span>
			</Link>
		</div>
	)
}
