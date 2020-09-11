// @flow
import * as React from 'react';
import EmailSentCount from "../components/emailSentBrokeDown"
import EmailSentOpensClicks from "../components/emailSentOpensClicks"

export function Dashboard(props) {
  const data = props.match.params;
  
  return (
    <div>
   
     <EmailSentCount params={data} />
     <EmailSentOpensClicks params={data} />
     
    </div>
  );
};

export default Dashboard;