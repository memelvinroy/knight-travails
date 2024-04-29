function knightMoves(start, end) {
   
    const moves = [
        [1, 2], [2, 1],
        [-1, 2], [-2, 1],
        [1, -2], [2, -1],
        [-1, -2], [-2, -1]
    ];


   
    const queue = [[start]];
    const visited = new Set();


    while (queue.length) {
        const path = queue.shift();
        const [currentX, currentY] = path[path.length - 1];

        if (currentX === end[0] && currentY === end[1]) {
            return path;
        }

        for (const [dx, dy] of moves) {
            const newX = currentX + dx;
            const newY = currentY + dy;

            if (newX >= 0 && newX < boardSize && newY >= 0 && newY < boardSize && !visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`);
                queue.push([...path, [newX, newY]]);
            }
        }
    }

   
    return null;
}


console.log(knightMoves([0,0],[1,2])); 
console.log(knightMoves([0,0],[3,3])); 
console.log(knightMoves([3,3],[0,0])); 
console.log(knightMoves([0,0],[7,7])); 
