import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Title from "../components/Title";

// TODO pass whole url
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
          <div className="pa4">
            <img
              src={image}
              class="br-100 h3 w3 dib"
              alt="avatar"
            ></img>
          </div>
        ) : null}
        <div class="profileName userCardContent">
          <Title title={name} />
          <div class="userCardSubTitle">
            <div>{location}</div>
            <span class="age">{age}</span>
            <span class="language">{language}</span>
          </div>
        </div>
        <div class="websites">{url}</div>
        <div class="w100 memberDates paddingBottom">
          <div class="title">Joined</div>
          <div class="content">{createdAt}</div>
        </div>
      </div>
    );
  }

  return <div>No data.</div>;
};

UserProfile.propTypes = {
  source: PropTypes.string,
};

export default UserProfile;
