package com.example.mapmory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/mapmory")
public class MapController {

    @GetMapping("/kakaomap")
    public String enterKakaoMapWeb(){

        return "kakaomap";
    }

}
