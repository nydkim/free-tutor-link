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
        <a
          href={window.open(
            'mailto:' +
              `${props.email}` +
              '?subject=Test&body=Hi%20there,%20I%20am%20interested%20in%20a%20tutoring%20session.'
          )}
        >
          Send an Email
        </a>

        {/* window.open(
            "mailto:" +
              this.state.recipientEmail +
              "?subject=Postcard%20Created%20Just%20For%20" +
              this.state.recipientName +
              "!%20(From:%20" +
              this.state.senderName +
              ")&body=[Note%20to%20sender:%20screenshot%20and%20paste%20postcard%20here]"
          ) */}
      </span>
    </div>
  );
};

export default AvailableTutor;
