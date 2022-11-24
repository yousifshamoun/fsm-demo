package com.FieldServiceManagment.fsmdemo.exception;

public class OrderOfTechnicianNotFound extends RuntimeException {
    public OrderOfTechnicianNotFound(String technician) {
        super("Could not find order with the id " + technician);
    }
}
