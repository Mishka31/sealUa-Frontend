import React, { FC } from 'react';

import { IIconsProps } from 'shared/interfaces';
import { color as myColor } from 'theme';

export const error: FC<IIconsProps> = ({ width = 18, height = 18, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.25 11.25H9.75V12.75H8.25V11.25ZM8.25 5.25H9.75V9.75H8.25V5.25ZM8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15Z"
        fill={color ? color : myColor.error}
      />
    </svg>
  );
};
