package kakao.home.coding;



import java.util.Scanner;

public class ex6 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int N = scan.nextInt();
        
        for(int i=0; i<N; i++) {
        	int count = 0;
        	String a ="";
        	while(count<i+1) {
        		a += "*";
        		count++;
        	}
        	System.out.println(a);
        }

        scan.close();
    }
}