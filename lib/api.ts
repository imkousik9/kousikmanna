const query = `query {
    projectsCollection {
      items {
        sys {
          id
        }
          title
          url
          gitHubRepository
          image {
            url
          }
          description
      }
    }
  }`;

export type Items = {
  sys: {
    id: string;
  };
  title: string;
  url: string;
  gitHubRepository: string;
  image: {
    url: string;
  };
  description: string;
};

export type Project = {
  data: {
    projectsCollection: {
      items: Array<Items>;
    };
  };
};

export const fetchProjects = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  );

  const projects = (await res.json()) as Project;

  if (!res.ok) {
    throw new Error(`Failed to fetch projects, received status ${res.status}`);
  }

  return projects;
};
