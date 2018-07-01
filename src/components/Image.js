import React from 'react'
import Img from 'react-image'

import mdToHTML from '../utils/mdToHTML'

class Image extends React.Component {
  render() {

    const img = (
      <Img
        src={this.props.src}
      />
    );

    return (
      <figure
        className={[
          this.props.className,
          "ml"
        ].join(' ')}
      >
        {img}
        {this.props.caption && (
          <figcaption className="small meta">
            {mdToHTML(this.props.caption)}
          </figcaption>
        )}
      </figure>
    )
  }
}

export default Image
