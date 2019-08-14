import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Repository = ({ repository }) => (
  <ListGroup>
    {repository.map(repo => (
      <ListGroupItem
        className='d-flex justify-content-center  bg-transparent text-dark'
        key={repo.node.id}
      >
        {repo.node.name}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default Repository;
