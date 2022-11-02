package com.example.mapmory.controller;

import com.example.mapmory.service.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;

@Controller
@RequestMapping(value="/mapmory")
public class OauthController {

    @Autowired
    private Token token;

    @RequestMapping(value="/callbackKakao", method= RequestMethod.GET)
    public void enterKakaoLoginPage(@RequestParam(value = "code", required = false) String code) throws Exception {
        System.out.println("code:" + code);
        String access_Token = token.getAccessToken(code);
        HashMap<String, Object> userInfo = token.getUserInfo(access_Token);
        System.out.println("###access_Token#### : " + access_Token);
        System.out.println("###nickname#### : " + userInfo.get("nickname"));
        System.out.println("###email#### : " + userInfo.get("email"));
    }

}