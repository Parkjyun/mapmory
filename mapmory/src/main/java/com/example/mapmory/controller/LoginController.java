package com.example.mapmory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="/mapmory/*")
public class LoginController {

    @RequestMapping(value="/kakaologin", method=RequestMethod.GET)
    public String enterToLoginPage(@RequestParam(value = "code", required = false) String code) throws Exception {
        System.out.println("#########" + code);
        return "/kakaologin";

    }

}