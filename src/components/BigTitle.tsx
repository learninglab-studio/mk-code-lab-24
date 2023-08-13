import React, { ReactNode } from 'react';

interface BigTitleProps {
  children: ReactNode;
}

const BigTitle: React.FC<BigTitleProps> = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-black">{props.children}</h1>
    </div>
  );
};

export default BigTitle;

