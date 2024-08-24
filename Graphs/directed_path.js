// Using DepthFirstSearch

function hasPathDFS(graph, start, dest, visited = new Set()){
  const Stack = [start];
  while(Stack.length>0){
    const node = Stack.pop();
    if (node === dest) return true;
    if(!visited.has(node)){
      visited.add(node)
      for (const neighbour of graph[node]) {
        Stack.push(neighbour)
      }
    }
  }
  return false
}

//Using BreadthFirstSearch Method

function hasPathBFS(graph, start, dest, visited = new Set()){
  const queue = [start];

  while(queue.length>0){
    const node = queue.shift()
    if(node === dest) return true
    for (const neighbour of graph[node]) {
      if(!visited.has(neighbour)){
        visited.add(neighbour)
        queue.push(neighbour)
      }
    }
  }
  return false
}

// Using Recursive Method

function hasPathRec(graph, start, dest, visited = new Set()){
  if (start === dest) return true
  
  if(visited.has(start)) return false

  visited.add(start)
  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest)){
      return true
    }
  }
  return false
}