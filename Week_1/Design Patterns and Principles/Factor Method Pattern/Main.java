public class Main {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();

        Document doc1 = factory.getDocument("WORD");
        doc1.open();
        doc1.close();

        System.out.println();

        Document doc2 = factory.getDocument("PDF");
        doc2.open();
        doc2.close();

        System.out.println();

        Document doc3 = factory.getDocument("EXCEL");
        doc3.open();
        doc3.close();
    }
}
