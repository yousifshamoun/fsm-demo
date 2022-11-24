package com.FieldServiceManagment.fsmdemo.exception;

public class OrderNotFoundException extends RuntimeException {
    public OrderNotFoundException(Long id) {
        super("Could not find order with the id " + id);
    }
}
