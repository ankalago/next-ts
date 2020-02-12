import gql from 'graphql-tag';

export interface Jobs {
    jobs: Job[];
}

export interface Job {
    id: string;
    title: string;
}

const CATALOGS_QUERY = gql`
  query Jobs {
    jobs {
      id
      title
    }
  }
`;

export default CATALOGS_QUERY;
