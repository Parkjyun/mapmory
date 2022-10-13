package com.example.mapmory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/member")
public class LogInController {

    @Autowired //의존 객체를 알아서 찾아 주입한다



    @GetMapping("/kakaoLogin")
    public String startKakaoLogin(@RequestParam(value ="code", required = false) String code) throws Exception{

        System.out.println("####"+code);
        return " 페이지";

    }
}
