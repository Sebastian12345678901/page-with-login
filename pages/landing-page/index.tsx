// set up a basic page in nextjs
import React from 'react';
import { withRouter } from 'next/router'

const LandingPage = (props: any) => {
  return (<>
    <h1>Hello {props.router.query.name} :D</h1>
  </>)
}

export default withRouter(LandingPage)