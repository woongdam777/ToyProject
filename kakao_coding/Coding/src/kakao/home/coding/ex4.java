package kakao.home.coding;
import java.util.*;

public class ex4 {
	public static void main(String[] args) {
		
		int[] food = {1,2};
		
        String answer = "";
        
        List<Integer> arr = new ArrayList<>();
        
        int fod = food[0];
        int count = 1;
                
        for(int i=1; i<food.length; i++){
            if(fod == food[i]){
                count++;
                if(count%2 == 0)arr.add(fod);
            }else{
                fod = food[i];
                count = 1;               
            }
        }

        for(int y=0; y<arr.size();y++){
            answer += arr.get(y);
        }
        
        String reverse = "";
        for(int y=arr.size()-1; y>=0;y--){
            reverse += arr.get(y);
        }
        
        answer = answer + "0" + reverse;
        
	    System.out.println(answer);    

	    
	}
}
