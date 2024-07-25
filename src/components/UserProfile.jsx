import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "./Title";

// TODO pass whole url
// eslint-disable-next-line react/function-component-definition
const UserProfile = ({ username }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    const {
      name,
      avatar_url: image,
      created_at: createdAt,
      homeLocation: location,
      url,
      language,
      age,
      twitter_username: twitterUsername,
    } = data;
    return (
      <div>
        {image ? (
          <div className="p-4">
            <img
              src={image}
              className="br-100 h3 w3 dib"
              alt="avatar"
            />
          </div>
        ) : null}
        <div className="profileName userCardContent">
          <Title title={name} />
          <div className="userCardSubTitle">
            <div>{location}</div>
            <span className="age">{age}</span>
            <span className="twitterUsername">{twitterUsername}</span>
            <span className="language">{language}</span>
          </div>
        </div>
        <div className="websites">{url}</div>
        <div className="w100 memberDates paddingBottom">
          <div className="title">Joined</div>
          <div className="content">{createdAt}</div>
        </div>
      </div>
    );
  }

  return <div>No data.</div>;
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserProfile;
