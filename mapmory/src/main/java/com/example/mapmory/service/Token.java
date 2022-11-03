package com.example.mapmory.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@Service
public class Token {
    private static final String requestURL = "https://kauth.kakao.com/oauth/token";
    private String access_Token = "";
    private URL url = new URL(requestURL);
    private HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

    public Token() throws IOException {
    }


    public void setHttpConnection() throws IOException {
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setRequestMethod("POST");
    }

    public String appendToken(String code) {
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("grant_type=authorization_code");
        stringBuilder.append("&client_id=fc231655583778a23c2eba6fcbd54a3f"); //본인이 발급받은 key
        stringBuilder.append("&redirect_uri=http://localhost:8080/mapmory/callbackKakao"); // 본인이 설정한 주소
        stringBuilder.append("&code=" + code);

        return stringBuilder.toString();
    }

    public String getAccessToken(String code) {
        try {
            setHttpConnection();

            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(httpURLConnection.getOutputStream()));
            bufferedWriter.write(appendToken(code));
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
