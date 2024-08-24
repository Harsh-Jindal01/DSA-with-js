const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
  };

function DepthFS(graph, start, visited = new Set()){

    const Stack = [start];
    while(Stack.length > 0){
        const node = Stack.pop();
        if(!visited.has(node)){
            console.log(node);
            visited.add(node)
            for(const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    Stack.push(neighbour)
                }
            }
        }
    }
}


// to run the code
// DepthFS(graph, 'a')

// Recursive Case

function DepthFSR(graph, start, visited = new Set()){
    if(!visited.has(start)){
        // console.log(start);
        
        visited.add(start)
        for(const neighbour of graph[start]){
            DepthFSR(graph, neighbour, visited)
        }
    } 
}

// DepthFSR(graph, 'a')