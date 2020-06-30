import React from 'react';

const AvailableTutor = (props) => {
  return (
    <div>
      <span>
        <a href={props.linkedInUrl}>
          <img src={props.imgUrl} />
        </a>
      </span>
      <span>{props.name}</span>
      <span>{props.date}</span>
      <span>
        {props.startTime} to {props.endTime}
      </span>
      <span>
        {/* <a href={`mailto: ${props.email}`}>Send an Email</a> */}

        <button
          type="button"
          onClick={window.open(
            'mailto:' +
              `${props.email}` +
              '?subject=Hi&body=Hi%20there,%20I%20am%20interested%20in%20a%20tutoring%20session.'
          )}
        >
          Contact Tutor
        </button>
        {/* <a
          href={window.open(
            'mailto:' +
              `${props.email}` +
              '?subject=Test&body=Hi%20there,%20I%20am%20interested%20in%20a%20tutoring%20session.'
          )}
        > */}
        {/* Send an Email */}
        {/* </a> */}
      </span>
    </div>
  );
};

export default AvailableTutor;
