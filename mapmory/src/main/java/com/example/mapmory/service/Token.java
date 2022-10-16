package com.example.mapmory.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class Token {

    private String requestURL ="https://kauth.kakao.com/oauth/token";
    public String generateAccessToken(String code) throws IOException {
        String accessToken ="";

        URL url = new URL(requestURL);
        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

        try {
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setDoInput(true);

            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(httpURLConnection.getOutputStream()));
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.append("grant_type=authorization_code");
            stringBuilder.append("&client_id=2aad40910868e3c5fa9594f8de34a07b");
            stringBuilder.append("&redirect_uri=http://localhost:8080/mapmory/kakaologin");
            stringBuilder.append("&code=" + code);

            bufferedWriter.write(stringBuilder.toString());
            bufferedWriter.flush();


    }


}
