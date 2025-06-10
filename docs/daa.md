# Simplified Daa Programs

## Exp1 - Selection Sort
```c
#include<stdio.h>
#include<time.h>
#include<stdlib.h>

void printArray(int arr[],int n){
    for(int i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
}

void selectionSort(int arr[],int n){
    int minIndex;
    for(int i=0;i<n-1;i++){
        minIndex = i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

int main(){
    int n, arr[10000];
    double time_taken;
    clock_t start,end;
    printf("Enter the number of elements:\t");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        arr[i]=rand()%10000;
    }
    printf("\nArray before sorting:\n");
    printArray(arr,n);
    start = clock();
    selectionSort(arr,n);
    end=clock();
    printf("\nArray after sorting:\n");
    printArray(arr,n);    
    time_taken = ((double)(end - start))/CLOCKS_PER_SEC*1000;
    printf("\n\nTime taken to sort the array = %lf\n",time_taken);
    return 0;
}
```

---

## Exp2 - Merge Sort

```c
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define MAX 10000

void printArray(int arr[],int n){
    for(int i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
}

void merge(int arr[],int low, int mid, int high){
    int i=low,j=mid+1,k=low;
    int resArray[MAX];

    while(i<=mid && j<=high){
        if(arr[i]<arr[j]){
            resArray[k]=arr[i];
            k++;i++;
        }
        else{
            resArray[k]=arr[j];
            k++;j++;
        }
    }

    while(i<=mid){
        resArray[k]=arr[i];
        k++;i++;
    }

    while(j<=high){
        resArray[k]=arr[j];
        k++;j++;
    }

    for(int m=low;m<=high;m++){
        arr[m]= resArray[m];
    }
}


void mergeSort(int arr[],int low,int high){
    if(low<high){
        int mid = (low+high)/2;
        mergeSort(arr,low,mid);
        mergeSort(arr,mid+1,high);
        merge(arr,low,mid,high);
    }
}

int main(){
    int n,arr[10000];
    clock_t start,end;
    double time_taken;
    printf("Enter the number of elements: ");
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        arr[i]=rand()%10000;
    }
    printf("\nArray before sorting:\n");
    printArray(arr,n);
    start = clock();
    mergeSort(arr,0,n-1);
    end=clock();
    printf("\nArray after sorting:\n");
    printArray(arr,n);
    time_taken = ((double)(end-start)/CLOCKS_PER_SEC*1000);
    printf("\n\nTime taken to sort the array = %lf\n",time_taken);
    return 0;
}
```

---

## Exp3 - Knapsack using Greedy approximation

```c
#include<stdio.h>

int currentWeight=0,n,m,w[50],p[50];
double x[50];

void greedyknapsack(){
    double maxProfit=0.0;
    double ratio[50];

    for (int i = 0; i < n; i++){
        ratio[i]=(double)p[i]/w[i];
    }

    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            if(ratio[i]<ratio[j]){
                double temp = ratio[i];
                ratio[i]=ratio[j];
                ratio[j]=temp;
                int temp2 = w[i];
                w[i]=w[j];
                w[j]=temp2;
                int temp3 = p[i];
                p[i]=p[j];
                p[j]=temp3;
            }
        }
    }

    for(int i=0;i<n;i++){
        if(currentWeight+w[i]<=m){
            x[i]=1;
            currentWeight+=w[i];
            maxProfit+=p[i];
        }
        else{
            x[i]=(m-currentWeight)/(double)w[i];
            maxProfit+=x[i]*p[i];
            break;
        }
    }

    printf("The optimal solution for greedy method: %.1f",maxProfit);

    printf("The solution vector for greedy method: \n");
    for(int i=0;i<n;i++){
        printf("%f  ",x[i]);
    }
}

int main(){
    printf("Enter the number of items: ");
    scanf("%d",&n);
    printf("Enter the weights of the items: ");
    for(int i=0;i<n;i++)
        scanf("%d",&w[i]);
    printf("Enter the profits of the items: ");
    for(int i=0;i<n;i++)
        scanf("%d",&p[i]);
    printf("Enter the maximum capacity: ");
    scanf("%d",&m);
    greedyknapsack();
    return 0;
}
```

---

## Exp4 - prims

```c
#include <stdio.h>
int visited[10] = {0};

int main()
{
    int n, i, j, min, minCost = 0, cost[10][10], u, v, n_edges = 1;
    printf("Enter the number of vertices and graph data:\n");
    scanf("%d", &n);
    for (i = 0; i < n; i++){
        for (j = 0; j < n; j++){
            printf("(%d,%d): ", i + 1, j + 1);
            scanf("%d", &cost[i][j]);
            if (cost[i][j] == 0){
                cost[i][j] = 999;
            }
        }
    }

    visited[0] = 1;

    printf("The edges in minimum spanning tree are:\n");
    while (n_edges < n){  //number of edges in mst = n-1
        min = 999;
        for (i = 0; i < n; i++){

            for (j = 0; j < n; j++){
                if (cost[i][j] < min){
                    if (!visited[i])
                        continue;
                    else{
                        min = cost[i][j];
                        u = i;
                        v = j;
                    }
                }
            }
        }

        if (!visited[u] || !visited[v]){
            printf("%d: edge (%d,%d) = %d\t", n_edges++, u + 1, v + 1, min);
            minCost += min;
            visited[v] = 1;
        }

        cost[u][v] = cost[v][u] = 999;
    }
    printf("Minimum cost is %d\n", minCost);
    return 0;
}
```

---

## Exp5 - Dijkstras

```c
#include<stdio.h>

int n,cost[10][10],dist[10],visited[10];

int min(int a,int b){
    return (a<b?a:b);
}

void read_matrix(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            printf("(%d,%d) : ",i+1,j+1);
            scanf("%d",&cost[i][j]);
            if(cost[i][j]==0)
                cost[i][j]=999;
        }
    }
}

void shortestpath(int n,int s){
    int c,u;
    for(int i=0;i<n;i++){
        dist[i]=cost[s][i];
    }
    dist[s]=0;
    visited[s]=1;
    for(int k=0;k<n;k++){
        c=999;
        for(int i=0;i<n;i++){
            if(!visited[i] && dist[i]<=c){
                c=dist[i];
                u=i;
            }
        }
        visited[u]=1;
        for(int i=0;i<n;i++)
            dist[i]=min(dist[i],dist[u]+cost[u][i]);
    }
}

int main(){
    int src;
    printf("Enter the number of vertices: ");
    scanf("%d",&n);
    printf("Enter the cost adjaceny matrix:\n");
    read_matrix(n);
    printf("Enter the source vertex: ");
    scanf("%d",&src);
    shortestpath(n,src-1);
    for(int i=0;i<n;i++){
        printf("Shortest path between vertex %d to %d is %d\n",src,i+1,dist[i]);
    }
    return 0;
}
```

---

## Exp6 - warshall Floyds

### floyds
cost matrix - all pair shortest path (1 indexed)
```c
a[i][j]=min(a[i][j],a[i][k]+a[k][j]);
```

### warshalls
adjacency matrix - transitive closure (1 indexed)
```c
a[i][j]=a[i][j] || (a[i][k] && a[k][j]);
```

---

## Exp7 - 0-1 Knapsack Dynamic programming

```c
#include <stdio.h>

int v[20][20];

int max_value(int a, int b) {
    return (a>b?a:b);
}
int main() {
    int i, j, p[20], w[20], n, cap;

    printf("\nEnter the number of items\n");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("Enter the weight and profit of the item %d: ", i);
        scanf("%d %d", &w[i], &p[i]);
    }

    printf("\nEnter the cap of knapsack\n");
    scanf("%d", &cap);


    for (i = 1; i <= n; i++) {
        for (j = 1; j <= cap;j++) {
            if (w[i] > j)
                v[i][j] = v[i - 1][j];
            else
                v[i][j] = max_value(v[i - 1][j], v[i - 1][j - w[i]] + p[i]);
        }
    }

    printf("The table is \n");
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= cap; j++)
            printf("%d\t", v[i][j]);
        printf("\n");
    }

    printf("The max profit is %d\n", v[n][cap]);
    printf("Most profitable subset is:\n ");
    j = cap;
    for (i = n; i >0; i--) {
        if (v[i][j] != v[i - 1][j]) {
            printf("item%d:1\t", i);
            j = j - w[i];
        } else {
            printf("item%d:0\t", i);
        }
    }

    return 0;
}
```

---

## Exp8 - TSP using Greedy algorithm

```c
#include<stdio.h>
int n,cost=0,a[10][10],visited[10];

int least(int c){
    int min=999,kmin,nc=999;
    for(int i=1;i<=n;i++){
        if(a[c][i]!=0 && a[c][i]<min && !visited[i]){
            min = a[i][1] + a[c][i];
            kmin=a[c][i];
            nc = i;
        }
    }
    if(min!=999){
        cost+=kmin;
    }
    return nc;
}

void mincost(int city){
    visited[city]=1;
    int ncity = least(city);
    printf("%d --> ",city);
    if(ncity == 999){
        ncity=1;
        printf("%d ",ncity);
        cost+=a[city][ncity];
        return;
    }
    mincost(ncity);
}

void main(){
    printf("Enter the number of cities: ");
    scanf("%d",&n);
    printf("Enter the cost matrix:\n");
    for(int i=1;i<=n;i++){
        printf("Enter cost for row %d\n",i);
        for(int j=1;j<=n;j++){
            scanf("%d",&a[i][j]);
        }
    }

    printf("The entered cost matrix:\n");
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }
    printf("\nThe path is:\n");
    mincost(1);
    printf("\nThe minimum cost is: %d\n",cost);
}
```
---

## Exp 9 - N-queens

```c
#include <stdio.h>
#include <stdlib.h>

int board[10], count = 0;

int is_safe(int r, int c) {
    for (int i = 0; i < r; i++) {
        if (board[i] == c || abs(board[i] - c) == abs(i - r))
            return 0;
    }
    return 1;
}

void print_solution(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (board[i] == j)
                printf("$ ");  // Queen's position
            else
                printf("0 ");
        }
        printf("\n");
    }
    printf("\n");
}

void n_queen(int r, int n) {
    if (r == n) {
        count++;
        print_solution(n);
        return;
    }

    for (int c = 0; c < n; c++) {
        if (is_safe(r, c)) {
            board[r] = c;
            n_queen(r + 1, n);
        }
    }
}

int main() {
    int n;
    printf("Enter the number of queens\n");
    scanf("%d", &n);
    n_queen(0,n);
    if (count == 0)
        printf("No solutions are found\n");
    else
        printf("Number of solutions found are %d\n", count);
    return 0;
}
```

---