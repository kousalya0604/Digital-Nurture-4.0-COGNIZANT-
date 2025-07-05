package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService created");
    }

    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("BookRepository Injected");
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Using BookService to access BookRepository");
    }
}
