import React from 'react';
import './left.css';
import { useQuery, gql } from '@apollo/client';

const TEXT_QUERY = gql`
  query {
    getData
  }
`;

function Left() {
  //Most data rendered in this component is placed via top and left positions via CSS
  //Rest all is simple element rendering

  const { loading, error, data } = useQuery(TEXT_QUERY);
  //if (loading) return 'loading...';
  //if (error) return 'Error!';
  //console.log(data);
  return (
    <React.Fragment>
      <div className='left-container'>
        <div className='logo'></div>
        <div className='left-heading'>
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. */}
          {data && <>{data.getData}</>}
          {error && <>Data not found</>}
          {loading && <>Data is loading...</>}
          {/* If data is available, i.e. fetched from the query, then display it here*/}
        </div>
        <div className='left-content'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        <a href='https://www.apple.com/in/app-store/'>
          <div className='app-store-badge'></div>
        </a>
        <a href='https://play.google.com/store/'>
          <div className='play-store-badge'></div>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Left;
