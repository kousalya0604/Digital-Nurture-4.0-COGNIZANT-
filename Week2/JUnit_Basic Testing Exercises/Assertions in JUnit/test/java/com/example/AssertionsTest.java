package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);           // checks if 2 + 3 == 5
        assertTrue(5 > 3);                // passes if true
        assertFalse(5 < 3);               // passes if false
        assertNull(null);                // passes if null
        assertNotNull(new Object());     // passes if not null
    }
}
