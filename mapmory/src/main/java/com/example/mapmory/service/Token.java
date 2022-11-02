package com.example.mapmory.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

@Service
public class Token {
    private static final String requestURL = "https://kauth.kakao.com/oauth/token";
    private String access_Token = "";
    public String getAccessToken(String code) {
        try {

            URL url = new URL(requestURL);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setDoOutput(true);

            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(httpURLConnection.getOutputStream()));

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("grant_type=authorization_code");
            stringBuilder.append("&client_id=fc231655583778a23c2eba6fcbd54a3f"); //본인이 발급받은 key
            stringBuilder.append("&redirect_uri=http://localhost:8080/mapmory/callbackKakao"); // 본인이 설정한 주소
            stringBuilder.append("&code=" + code);

            bufferedWriter.write(stringBuilder.toString());
            bufferedWriter.flush();

            int responseCode = httpURLConnection.getResponseCode();
            System.out.println("서버응답 : " + responseCode);
            BufferedReader br = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            String result = "";
            while ((line = br.readLine()) != null) {
                result += line;
            }
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            br.close();
            bufferedWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return access_Token;
    }


}
