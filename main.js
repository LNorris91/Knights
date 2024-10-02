function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      console.log(`It took you ${path.length - 1} moves! Here is the path from start to finish:`);
      return path.join(' -> ');
    }

    for (const move of moves) {
      const nextPosition = [currentPosition[0] + move[0], currentPosition[1] + move[1]];

      if (
        nextPosition[0] >= 0 &&
        nextPosition[0] < 8 &&
        nextPosition[1] >= 0 &&
        nextPosition[1] < 8
      ) {
        if (!visited.has(nextPosition.toString())) {
          visited.add(currentPosition.toString());
          queue.push([nextPosition, path.concat([nextPosition])]);
        }
      }
    }
  }
}

console.log(knightMoves([0, 0], [7, 7]));
