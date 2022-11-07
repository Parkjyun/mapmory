package com.example.mapmory.service;


import com.drew.imaging.ImageMetadataReader;
import com.drew.imaging.ImageProcessingException;
import com.drew.metadata.Metadata;
import com.drew.metadata.exif.GpsDirectory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.slf4j.Logger;

import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

import static com.drew.metadata.exif.GpsDirectory.*;

public class ImageMetaData {

    String fileScope = "/home/board/board_202204050945274080";

    String pdsLat = "";
    String pdsLon = "";

    File file = new File(fileScope);

    Metadata metadata = ImageMetadataReader.readMetadata(file);
    GpsDirectory gpsDirectory = metadata.getFirstDirectoryOfType(GpsDirectory.class);

//위도,경도 호출
    if(gpsDirectory.containsTag(TAG_LATITUDE) && gpsDirectory.containsTag(TAG_LONGITUDE)) {

        pdsLat = String.valueOf(gpsDirectory.getGeoLocation().getLatitude());
        pdsLon = String.valueOf(gpsDirectory.getGeoLocation().getLongitude());

        double lat = Double.parseDouble(pdsLat);    //위도
        double lon = Double.parseDouble(pdsLon);    //경도

        String addr = convertAddr(lon,lat);

    }

    public static String convertAddr(double x, double y){
        String url = "https://dapi.kakao.com/v2/local/geo/coord2address.json?x="+x+"&y="+y+"&input_coord=WGS84";
        String addr = "";
        try{
            addr = getPassingAddress(getJSONData(url));
        }catch(Exception e){
            Logger logger = null;
            logger.error("에러 발생", e);
            e.printStackTrace();
        }
        return addr;
    }
    private static String getJSONData(String apiUrl) throws Exception {
        String jsonString = new String();
        String buf;
        String apikey = "89bf16a32af7424ebdb1a96640c6f338";
        URL url = new URL(apiUrl);
        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
        String auth = "KakaoAK "+apikey;
        conn.setRequestMethod("GET");
        conn.setRequestProperty("X-Requested-With", "curl");
        conn.setRequestProperty("Authorization", auth);

        BufferedReader br = new BufferedReader(new InputStreamReader(
                conn.getInputStream(), "UTF-8"));
        while ((buf = br.readLine()) != null) {
            jsonString += buf;
        }
        return jsonString;
    }
    private static String getPassingAddress(String jsonString) {
        String value = "";
        JSONObject jObj = (JSONObject) JSONValue.parse(jsonString);
        JSONObject meta = (JSONObject) jObj.get("meta");
        long size = (long) meta.get("total_count");
        if(size>0){
            JSONArray jArray = (JSONArray) jObj.get("documents");
            JSONObject subJobj = (JSONObject) jArray.get(0);
            JSONObject roadAddress =  (JSONObject) subJobj.get("road_address");
            if(roadAddress == null){
                JSONObject subsubJobj = (JSONObject) subJobj.get("address");
                value = (String) subsubJobj.get("address_name");
            }else{
                value = (String) roadAddress.get("address_name");
            }
            if(value.equals("") || value==null){
                subJobj = (JSONObject) jArray.get(1);
                subJobj = (JSONObject) subJobj.get("address");
                value =(String) subJobj.get("address_name");
            }
        }
        return value;
    }

    public ImageMetaData() throws ImageProcessingException, IOException {
    }
}
