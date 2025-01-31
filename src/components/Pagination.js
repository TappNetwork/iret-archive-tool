import styled from 'styled-components';
import { Pagination } from 'react-instantsearch-dom';

const StyledPagination = styled(Pagination)`
  ul {
    margin: 3rem auto 0;
    text-align: center;
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }

  a,
  span.ais-Pagination-link {
    border-radius: 4px;
    border: solid 1px #ccc;
    text-decoration: none;
    padding: 0.5rem 0.8rem;
    color: #888;
    transition: all 0.2s ease-out;

    &:hover {
      color: #333;
      background: #e6f4ff;
      cursor: pointer;
    }

    &.ais-Pagination-link--selected {
      color: white;
      background: #0094ff;
      border-radius: 4px;
      border: 1px solid #0094ff;
      transition: all 0.25s ease-out;

      &:hover {
        background: #0094ff;
        cursor: default;
      }
    }
  }
`;

export default StyledPagination;
