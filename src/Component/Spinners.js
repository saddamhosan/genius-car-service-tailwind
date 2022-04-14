import { css } from "@emotion/react";
import React from 'react';
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;


const Spinners = () => {
    
    return (
      <div>
        <ClipLoader css={override} />
      </div>
    );
};

export default Spinners;