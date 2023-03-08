public class CharacterEx {


    public void CharacterEx1(){
        char ch1 = 'A';
        System.out.println(ch1);
        System.out.println((int)ch1);

        char ch2 = 66;
        System.out.println(ch2);

        int ch3 = 67;
        System.out.println(ch3);
        System.out.println((char)ch3);
    }

    public void CharacterEx2(){
        char ch1 = '한';
        char ch2 = '\uD55C';

        System.out.println(ch1);
        System.out.println(ch2);

    }

    public void Chapter3(){

        int num;
        num=-5 + 3 * 10 / 2;
        System.out.println(num);

        int num3 = 10;
        System.out.println(num3);
        System.out.println(num3++);
        System.out.println(num3);
        System.out.println(--num3);

        int num1 = 10;
        int num2 = 20;
        boolean result;

        result = ((num1 > 10) && (num2 > 10));
        System.out.println(result);
        result = ((num1>10) || (num2 > 10));
        System.out.println(result);
        System.out.println(!result);

    }




}
