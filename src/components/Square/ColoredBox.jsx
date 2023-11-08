import React from 'react';

function ColoredBoxGrid({ A, maxSideLength }) {
  const maxRow = A.length;
  const boxSize = 40; // Adjust the size as needed

  return (
    <div className="box-image">
      {Array.from({ length: maxRow }).map((_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {Array.from({ length: maxRow }).map((_, colIndex) => {
            const isFilled = colIndex < A[rowIndex];
            const isMaxSideLength =
              rowIndex < maxSideLength && colIndex < maxSideLength;

            const boxStyle = {
              width: boxSize,
              height: boxSize,
              backgroundColor: isFilled ? 'black' : 'white',
              border: '1px solid grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              transform: 'rotate(90deg)',
            };

            if (isMaxSideLength) {
              // Apply a different style to highlight the maximum side length box
              boxStyle.border = '1px solid yellow';
            }

            return <div key={colIndex} style={boxStyle}></div>;
          })}
        </div>
      ))}
    </div>
  );
}

export default ColoredBoxGrid;
