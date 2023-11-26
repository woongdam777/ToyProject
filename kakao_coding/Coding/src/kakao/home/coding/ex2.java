package kakao.home.coding;
import java.util.Arrays;
import java.util.HashMap;

public class ex2 {
	public static void main(String[] args) {
        int[][] dice = {
                {40, 41, 42, 43, 44, 45},
                {43, 43, 42, 42, 41, 41},
                {1, 1, 80, 80, 80, 80},
                {70, 70, 1, 1, 70, 70}
        };
        
        
        int l = dice.length;

        int[] answer = new int[l / 2];
        int[] diceSum = new int[l];

        HashMap<Integer, Integer> diceSumMap = new HashMap<>();

        for (int i = 0; i < l; i++) {
            int sum = 0;
            for (int x = 0; x < 6; x++) {
                sum += dice[i][x];
            }

            diceSum[i] = sum;
            diceSumMap.put(sum, i);
        }		
        // Arrays.sort(diceSum);
        
        for(int i : diceSum) {
        	System.out.println(i);
        }
               
        
	}
}
