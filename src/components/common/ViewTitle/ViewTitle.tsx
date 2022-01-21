import React from 'react';

type Props = {
  title: string
};

function ViewTitle({title}: Props) {
  return (
    <React.Fragment>
        <div>ViewTitle Works!</div>
    </React.Fragment>
  );
}

export default ViewTitle;
