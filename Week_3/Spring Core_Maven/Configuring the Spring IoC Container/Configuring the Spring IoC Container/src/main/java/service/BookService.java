package com.example.library.service;

import com.example.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService created");
    }

    // Setter method for Spring Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("BookRepository injected");
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        bookRepository.listBooks();
    }
}
