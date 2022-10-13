package com.example.mapmory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {

    @GetMapping("/kakaomap")
    public String enterKakaoMapWeb(){

        return "kakaomap";
    }

}
