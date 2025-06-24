public class Main {
    public static void main(String[] args) {
        Product[] productList = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Shirt", "Clothing"),
            new Product(104, "Book", "Education"),
            new Product(102, "Shoes", "Footwear")
        };

        System.out.println(" Linear Search:");
        Product result1 = LinearSearch.search(productList, 104);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search:");
        BinarySearch.sortByProductId(productList);
        Product result2 = BinarySearch.search(productList, 104);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
