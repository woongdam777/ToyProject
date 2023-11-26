package kakao.home.coding;
import java.util.ArrayList;
import java.util.List;

public class ex3 {
	public static void main(String[] args) {
       int[] cards = {3,6,7,2,1,10,5,9,8,12,11,4};
       
       int l = cards.length;
       int round = 1;

       List<Integer>[] own = new ArrayList[l/3];
       
       for (int i = 0; i < l/3; i++) {
           own[i] = new ArrayList<>();
           own[i].add(cards[i]);
       }
       System.out.println(own);
       for(List<Integer> i : own) {
    	   System.out.println(i);
       }
        
	}
}
