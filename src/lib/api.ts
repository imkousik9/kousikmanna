const query = `query {
    projectsCollection {
      items {
          title
          url
          gitHubRepository
          image {
            url
          }
      }
    }
  }`;

export const fetchProjects = async () => {
    return await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({ query })
        }
    ).then((response) => response.json());
};
