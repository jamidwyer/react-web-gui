import React from "react";
import PropTypes from "prop-types";

// For screen reading purposes, I might like more labels like "Album:", "Year:",
// and "Catalog Number:", but it would be hard to fit those even on the ~ 360px
// albums I went with.
function Card({ item }) {
  const {
    image,
    id,
    name,
    creators,
    dateCreated,
    catalogNumber,
    url,
  } = item;
  // const imageStyle = {
  //   backgroundImage: `url(${image})`,
  // };
  const alt = `${name} by ${creators}`;
  return (
    <li key={id} className="card-item">
      <a href={url}>
        <div className="card">
          <div className="card-image">
            <img src={image} alt={alt} />
          </div>
          <div className="card-content">
            <div className="card-column">
              <div className="card-title">{name}</div>
              <div className="card-creator">{creators}</div>
            </div>
            <div className="card-column card-column-right">
              <div className="card-creation-date">{dateCreated}</div>
              <div className="card-catalog-number">
                {catalogNumber}
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    creators: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    image: PropTypes.string,
    dateCreated: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    catalogNumber: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Card;
