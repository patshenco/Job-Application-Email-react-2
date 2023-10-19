import React from 'react';

export default function App() {
  // Salutation
  const recipient = 'Stephen';
  const salutation = <h2>Dear {recipient}</h2>;

  // Body
  const senderName = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    return minutes % 2 === 0 ? 'YourFirstName' : 'YourLastName';
  };

  const achievements = ['Achievement 1', 'Achievement 2', 'Achievement 3'];

  const body = (
    <div>
      {salutation}
      <br />
      <p>Hi, my name is {senderName()}, and I would like to introduce myself to you. I am applying for the position of React developer.</p>
      <br />
      <p>I've attached my CV to this email.</p>
      <p>You can find details of my previous roles, experience, and achievements.</p>
      <p>I'm particularly proud of:</p>
      <ul id="my-achievements">
        {achievements.map((achievement, index) => (
          <li key={index} className="ln-achievement">
            {achievement}
          </li>
        ))}
      </ul>
      <p>I'm excited about this opportunity and would love to know more about the process, including timelines for you to decide on interviews.</p>
    </div>
  );

  // Signature
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const signature = (
    <div>
      <br />
      <span>Best regards,</span>
      <span>React</span>
      <b>{formattedDate}</b>
    </div>
  );

  return (
    <div>
      {body}
      {signature}
    </div>
  );
}





