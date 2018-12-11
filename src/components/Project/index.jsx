import React from 'react';
import Link from 'gatsby-link';
import './style.scss';

class Project extends React.Component {
  render() {
    return (
      <div className="project"> 
        <div className="project__meta">
            {/* <div className="project__card"> */}
            <h1>Currently Under Development</h1>
            {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Project;
