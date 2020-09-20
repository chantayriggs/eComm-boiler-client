/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 46%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 40px;
      width: 40px;
      justify-content: center;
      background: white;
      border-radius: 3px;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;

      i {
        color: #76BA1A;
        font-size: 1.2em;
        -webkit-text-stroke: 1px white;
      }

      &:hover {
        transform: scale(1.1);
      }


    `}
  >
    {direction === 'right' ? <i class="fas fa-angle-right"></i> : <i class="fas fa-angle-left"></i>}
  </div>
)

export default Arrow
      // img {
      //   transform: translateX(${direction === 'left' ? '-2' : '2'}px);

      //   &:focus {
      //     outline: 0;
      //   }
      // }