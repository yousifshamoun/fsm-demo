package com.FieldServiceManagment.fsmdemo.controller;

import com.FieldServiceManagment.fsmdemo.exception.OrderNotFoundException;
import com.FieldServiceManagment.fsmdemo.exception.OrderOfTechnicianNotFound;
import com.FieldServiceManagment.fsmdemo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.FieldServiceManagment.fsmdemo.model.Orders;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order")
    Orders newOrder(@RequestBody Orders newOrder) {
        return orderRepository.save(newOrder);
    }

    @GetMapping("/orders")
    List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/order/{id}")
    Orders getOrderById(@PathVariable long id) {
        return orderRepository.findById(id).orElseThrow(
                () -> new OrderNotFoundException(id));
    }

    @GetMapping("/orders/{technician}")
    List<Orders> getOrderByTechnician(@PathVariable String technician) {
        return orderRepository.findByTechnician(technician);
        // .orElseThrow(
        // () -> new OrderOfTechnicianNotFound(technician));
    }

    @PutMapping("/order/{id}")
    Orders updateOrder(@RequestBody Orders newOrder, @PathVariable long id) {
        return orderRepository.findById(id).map(
                order -> {
                    order.setName(newOrder.getName());
                    order.setStreet(newOrder.getStreet());
                    order.setUnit(newOrder.getUnit());
                    order.setZip(newOrder.getZip());
                    order.setPhone(newOrder.getPhone());
                    order.setJob_type(newOrder.getJob_type());
                    order.setBusiness_unit(newOrder.getBusiness_unit());
                    order.setDate(newOrder.getDate());
                    order.setTime(newOrder.getTime());
                    order.setMarketing_campaign(newOrder.getMarketing_campaign());
                    order.setPriority(newOrder.getPriority());
                    order.setTechnician(newOrder.getTechnician());
                    order.setTags(newOrder.getTags());
                    order.setNotes(newOrder.getNotes());
                    return orderRepository.save(order);
                }).orElseThrow(
                        () -> new OrderNotFoundException(id));
    }

    @DeleteMapping("/order/{id}")
    String deleteUser(@PathVariable long id) {
        if (!orderRepository.existsById(id)) {
            throw new OrderNotFoundException(id);
        }
        orderRepository.deleteById(id);
        return "Order with id " + id + " has been deleted successfully.";
    }

}
