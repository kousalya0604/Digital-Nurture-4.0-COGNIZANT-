public class Main {
    public static void main(String[] args) {
        // Getting the same instance
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First message");
        logger2.log("Second message");

        // Confirm both are same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (Singleton works!)");
        } else {
            System.out.println("Different instances (Singleton failed)");
        }
    }
}
