public class DocumentFactory {
    public Document getDocument(String type) {
        if (type == null) return null;

        if (type.equalsIgnoreCase("WORD")) return new WordDocument();
        else if (type.equalsIgnoreCase("PDF")) return new PdfDocument();
        else if (type.equalsIgnoreCase("EXCEL")) return new ExcelDocument();

        return null;
    }
}
