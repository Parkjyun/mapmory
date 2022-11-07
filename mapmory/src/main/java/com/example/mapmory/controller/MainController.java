package com.example.mapmory.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/kakaomain")
    public String showMainView(){

        return "Mapmory_Home/src/index";
    }
}
