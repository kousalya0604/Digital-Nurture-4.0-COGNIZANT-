package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorFixtureTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup done.");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown done.");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10, b = 20;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testAdditionWithNegative() {
        // Arrange
        int a = -5, b = 8;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(3, result);
    }
}

