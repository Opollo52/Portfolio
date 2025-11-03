import React from 'react';
import styled from 'styled-components';

const Button = () => {
  const mailto =
    'mailto:eliottpissis@gmail.com?subject=' +
    encodeURIComponent('Contact depuis le portfolio') +
    '&body=' +
    encodeURIComponent('Bonjour Eliott,\n\nJe vous contacte au sujet de ...');

  return (
    <StyledWrapper>
      <a href={mailto} className="button" role="button">
        Me contacter
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    color: rgba(59, 130, 246, 1);
    border: 2px solid rgba(59, 130, 246, 1);
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
    overflow: hidden;
  }

  .button::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    transform: scale(0);
    transform-origin: center center;
    z-index: -1;
    background-color: rgba(59, 130, 246, 1);
    transition: transform 360ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .button:hover::before {
    transform: scale(1);
  }

  .button:hover {
    color: #ffffff;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 30px rgba(59,130,246,0.16);
  }

  .button:active {
    transform: translateY(0) scale(1);
  }`;

export default Button;
