import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
        <li className="links__list-item">
            <a href={`https://github.com/tfaieta`} target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
          <a href={`https://www.linkedin.com/in/tony-faieta/`} target="_blank" >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://twitter.com/tfaieta`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:tfaieta@gmail.com`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
