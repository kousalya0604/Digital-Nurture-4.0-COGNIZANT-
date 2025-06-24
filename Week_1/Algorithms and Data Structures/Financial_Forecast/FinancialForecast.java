import java.util.Scanner;

public class FinancialForecast {
    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        } else {
            return futureValue(principal * (1 + rate), rate, years - 1);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Financial Forecasting");
        System.out.print("Enter the Principal Amount: ");
        double principal = scanner.nextDouble();
        System.out.print("Enter the Growth Rate: ");
        double rate = scanner.nextDouble();

        System.out.print("Enter the No. of Years: ");
        int years = scanner.nextInt();

        double result = futureValue(principal, rate, years);

        System.out.printf("Future value after %d years: %.1f\n", years, result);
        scanner.close();
    }
}
