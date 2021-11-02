/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `your_space_id`,
				accessToken: `your_access_token`
			}
		},
		'gatsby-plugin-postcss'
	]
}
