
// function isPath2(graph, vertexA, vertexB, visitedNodes) {
//   // console.log("vertexA: ", vertexA, ", vertexB: ", vertexB);

//   let bConnected = false;
//   for (const vertex of graph[vertexA]) {
//     if (!visitedNodes[vertex]) {
//       if (vertex === vertexB)
//         return true;
//       visitedNodes[vertex] = true;
//       bConnected = bConnected || isPath2(graph, vertex, vertexB, visitedNodes);
//     }
//   }

//   return bConnected;
// }

// function isPath(graph, vertexA, vertexB) {
//   // type your code here
//   const visitedNodes = {};
//   return isPath2(graph, vertexA, vertexB, visitedNodes);
// }


function isPath(graph, vertexA, vertexB, visited=new Set()) {
  visited.add(vertexA);
  for (const vertex of graph[vertexA]) {
    if (vertex === vertexB)
      return true;

    if (!visited.has(vertex) && isPath(graph, vertex, vertexB, visited))
      return true;
  }

  return false;
}



if (require.main === module) {
  // add your own tests in here
  // let graph = {
  //   jan: ["john", "jambaby"],
  //   john: ["carl"],
  //   jambaby: [],
  //   carl: ["jambaby"],
  //   dave: []
  // };

  // console.log("Expecting: true");
  // console.log(isPath(graph, "jan", "carl"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log(isPath(graph, "jan", "dave"));

  let graph = {
    a: [],
  };
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPath(graph, "a", "a"));

  graph = {
    a: ['b', 'c', 'd'],
    b: ['e'],
    c: ['a'],
    d: ['f'],
    e: ['c'],
    f: ['a'],
    g: ['d'],
  };
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPath(graph, "a", "f"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPath(graph, "a", "g"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPath(graph, "a", "e"));
}

module.exports = isPath;

// Please add your pseudocode to this file
// And a written explanation of your solution
