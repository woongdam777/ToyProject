package kakao.home.coding;

import java.io.IOException;
import java.util.*;

public class ex7 {
	
	public static int N=0,M=0,V=0;
	public static ArrayList<ArrayList<String>> graph = new ArrayList<>();
	
	
	public static void main(String[] args) throws IOException{

		Scanner scan = new Scanner(System.in);

		String[] input = scan.nextLine().split(" ");
		N = Integer.parseInt(input[0]);
		M = Integer.parseInt(input[1]);
		V = Integer.parseInt(input[2]);

		for (int i = 0; i < M; i++) {
			String edgeInput = scan.nextLine();
			String[] edge = edgeInput.split(" ");

			ArrayList<String> arr = new ArrayList<>();
			arr.add(edge[0]);
			arr.add(edge[1]);
			graph.add(arr);
		}
/*
		// 입력 확인
		System.out.println("N: " + N);
		System.out.println("M: " + M);
		System.out.println("V: " + V);
		System.out.println("Graph:");
		for (ArrayList<String> arr : graph) {
			System.out.println(arr.get(0) + " " + arr.get(1));
		}
*/
		// DFS 함수 호출
		boolean[] visited = new boolean[N + 1];
		String result1 = DFS(V,visited); 
		System.out.println(result1.trim());
		
		String result2 = BFS(V); 
		System.out.println(result2.trim());
		
		
	}
	
	private static String DFS(int n, boolean[] visited) {
        visited[n] = true;
        String k = n + " ";

        for (ArrayList<String> arr : graph) {
            int o = Integer.parseInt(arr.get(0));
            int t = Integer.parseInt(arr.get(1));

            if (o == n && !visited[t]) {
                k += DFS(t, visited);
            }
        }

        return k;
    }
	
	private static String BFS(int start) {
		boolean[] visited = new boolean[N + 1];
		String k = "";
		
		Queue<Integer> queue = new LinkedList<>();
        visited[start] = true;
		
        queue.offer(start);

        while (!queue.isEmpty()) {
            int current = queue.poll();
            k += current+" ";

            for (ArrayList<String> arr : graph) {
                int o = Integer.parseInt(arr.get(0));
                int t = Integer.parseInt(arr.get(1));

                if (o == current && !visited[t]) {
                    visited[t] = true;
                    queue.offer(t);
                }
            }
        }
		
		return k;
	}
	
}