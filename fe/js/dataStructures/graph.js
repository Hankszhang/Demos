// Implement Graph with JS
// Date: 2016-05-03
// Author: Hanks

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];//用于标记已被访问的顶点
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }

    this.edgeTo = [];//用于保存从一个顶点到下一个顶点的所有边
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
}

// 给两个顶点添加边
function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        putstr(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
                putstr(this.adj[i][j] + ' ');
        }
        print();
    }
}
//深度优先搜索
function dfs(v) {
    var adjV = this.adj[v];
    //将已访问过的顶点标记在marked中
    this.marked[v] = true;
    if (adjV != undefined) { 
        print("Visited vertex: " + v);
    }
    //通过递归，依次搜索每一条路径，直到到达最后一个顶点
    for(var w in adjV){
        if (!this.marked[adjV[w]]) {
            this.dfs(adjV[w]);
        }
    }
}
//广度优先搜索
//使用队列来对待访问过的顶点进行排序
//2016-05-05 Modified: 修改广度优先搜索来查找最短路径
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
        var v = queue.shift(); // 从队首移除
        var adjV = this.adj[v];
        //如果当前顶点存在
        /*if (adjV != undefined) {
            print("Visited vertex: " + v);
        }*/
        //将当前顶点的所有未被访问的邻接点依次推入队列
        for(var w in adjV) {
            if (!this.marked[adjV[w]]) {
                this.marked[adjV[w]] = true;
                this.edgeTo[adjV[w]] = v;//将顶点v到下一个顶点adjV[w]的边保存在edgeTo数组中
                queue.push(adjV[w]);
            }
        }
    }
}
//展示图中不同顶点的路径
//2016-05-05
function pathTo(v){
    if(!this.hasPathTo(v)){
        return undefined;
    }
    var source = 0;
    var path = [];
    //使用栈，从后向前依次将路径上的顶点入栈
    for(var i=v; i!=source; i=this.edgeTo[i]){
        path.push(i);
    }
    path.push(source);
    return path;
}
function hasPathTo(v){
    return this.marked[v];
}

function showPath(path){
    print("The path is showed below:");
    while(path.length > 0) {
        if (path.length > 1) {
            putstr(path.pop() + '-');
        }
        else {
            putstr(path.pop());
        }
    }
    print();
}
//test cases
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,5);
g.addEdge(2,5);
g.showGraph();
//g.dfs(0);
g.bfs(0);
var vertex = 5;
var path = g.pathTo(vertex);
showPath(path);
