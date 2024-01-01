package kakao.home.coding;
import java.util.Scanner;

public class ex4 {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
	    int N = scan.nextInt();
	    int count = N/5;
	    
	    while(true) {
	    	if((N-5*count) %3 !=0) {
	    		count -=1;
	    	}else {
	    		count += (N-5*count)/3;
	    		break;
	    	}
	    }
    	
	    System.out.println(count);

	    scan.close();
	}
}
