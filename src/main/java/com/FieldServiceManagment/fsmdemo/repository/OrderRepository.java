package com.FieldServiceManagment.fsmdemo.repository;

import com.FieldServiceManagment.fsmdemo.model.Orders;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    List<Orders> findByTechnician(String technician);

}
