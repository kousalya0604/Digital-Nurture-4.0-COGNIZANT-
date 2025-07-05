package com.example.library.service;

import com.example.library.repository.BookRepository;

public class BookService {
    private String serviceName; // Constructor-injected
    private BookRepository bookRepository; // Setter-injected

    // 🔹 Constructor Injection
    public BookService(String serviceName) {
        this.serviceName = serviceName;
        System.out.println("BookService created with serviceName: " + serviceName);
    }

    // 🔹 Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository injected via setter");
    }

    public void displayBooks() {
        System.out.println("[" + serviceName + "] Listing books:");
        bookRepository.listBooks();
    }
}
