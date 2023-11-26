package kakao.home.coding;

import java.util.*;

public class ex {

	public static void main(String[] args) {
		
		String[] friends = {"a","b","c"};
		String[] gifts = {"a b","b a","c a","a c","b c","b c"};
		

        int l = friends.length;
        // 선물지수
        Map<String, Integer> giftScore = new HashMap<>();

        for(int i=0; i<l; i++){
            int count = 0;
            for(int x=0; x<gifts.length; x++){
                String[] k = gifts[x].split(" ");
                if (friends[i].equals(k[0])) count++;
                if (friends[i].equals(k[1])) count--;
            }
            giftScore.put(friends[i],count);
        }
        for (String friend : friends) {
            System.out.println(friend + ": " + giftScore.get(friend));
        }
		
		
	}
	
	public int solution(String[] friends, String[] gifts) {
        int answer = 0;

        int l = friends.length;
        // 선물지수
        HashMap<String, Integer> giftScore = new HashMap<>();

        for (int i = 0; i < l; i++) {
            int count = 0;
            for (int x = 0; x < gifts.length; x++) {
                String[] k = gifts[x].split(" ");
                if (friends[i].equals(k[0])) count++;
                if (friends[i].equals(k[1])) count--;
            }
            giftScore.put(friends[i], count);
        }

        // 선물 주고 받은 결과
        int[] take = new int[l];

        for (int y = 0; y < l; y++) {
            for (int z = 0; z < l; z++) {
                int count2 = 0;
                if (!friends[y].equals(friends[z])) {
                    for (int i = 0; i < gifts.length; i++) {
                        if (gifts[i].equals(friends[y] + " " + friends[z])) count2++;
                        if (gifts[i].equals(friends[z] + " " + friends[y])) count2--;
                    }
                }
                if (count2 > 0) take[y] += 1;
                if (count2 == 0) {
                    if (giftScore.get(friends[z]) < giftScore.get(friends[y])) take[y] += 1;
                }
            }
        }

        for (int value : take) {
            answer = Math.max(answer, value);
        }

        return answer;
    }
}
