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

export type Items = {
  title: string;
  url: string;
  gitHubRepository: string;
  image: {
    url: string;
  };
};

export type Project = {
  data: {
    projectsCollection: {
      items: Array<Items>;
    };
  };
};

export const fetchProjects = async () => {
  return (await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json())) as Project;
};
