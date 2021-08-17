import React from "react";
import { useQuery } from "@apollo/client";
import { REPOS_QUERY, CLIENT } from "../graphql/queries/getRepo";


function Repos() {
  const { data, error, loading, fetchMore } = useQuery(REPOS_QUERY, {
    variables: { after: null },
    client: CLIENT
  });
  if (error) return <div>errors</div>;
  if (loading || !data) return <div>loading</div>;
  if (data) {
    console.log(data);
  }

  return (
    <>
      <h4>Github Repos:</h4>
      <ul style={{ "listStyle": "none" }}>
        {data.viewer.repositories.edges.map(({ node }) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
      {/* <p>length : {data.viewer.repositories.edges.length}</p> */}
      <button
        onClick={() => {
          const { endCursor } = data.viewer.repositories.pageInfo;

          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.viewer.repositories.edges = [
                ...prevResult.viewer.repositories.edges,
                ...fetchMoreResult.viewer.repositories.edges
              ];
              return fetchMoreResult;
            }
          });
        }}
      >
        more
      </button>
    </>
  );
}

export default Repos;
