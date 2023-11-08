import React, { useEffect } from 'react';

function Solution({ A, setMaxSideLength }) {
  const calculateMaxSideLength = (A) => {
    const N = A.length;
    const matrix = new Array(N).fill(null).map(() => new Array(N).fill(0));

    // Convert array A to the matrix representation
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < A[i]; j++) {
        matrix[j][i] = 1; // Black cell
      }
    }

    let maxSideLength = 0;

    // Dynamic programming to calculate the maximum side length of a black square
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (matrix[i][j] === 1) {
          if (i > 0 && j > 0) {
            matrix[i][j] =
              Math.min(
                matrix[i - 1][j - 1],
                matrix[i - 1][j],
                matrix[i][j - 1]
              ) + 1;
          }
          maxSideLength = Math.max(maxSideLength, matrix[i][j]);
        }
      }
    }

    return maxSideLength;
  };

  useEffect(() => {
    const maxSideLength = calculateMaxSideLength(A);
    setMaxSideLength(maxSideLength); // Set maxSideLength using the state setter
  }, [A, setMaxSideLength]);

  return (
    <div>
      <h1 style={{ marginLeft: '420px' }}>
        {/* The biggest black square side as {maxSideLength} */}
      </h1>
    </div>
  );
}

export default Solution;
