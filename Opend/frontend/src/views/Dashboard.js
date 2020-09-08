// @flow
import * as React from 'react';
import EmailSentCount from "../components/emailSentBrokeDown"

export function Dashboard(props) {
  const data = props.match.params;
  return (
    <div>
        <EmailSentCount params={data} />
    </div>
  );
};

export default Dashboard;