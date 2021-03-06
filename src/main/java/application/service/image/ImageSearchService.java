package application.service.image;

import application.model.image.Image;
import application.service.feign.image.BaiduImageFeign;
import feign.Response;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.util.*;

@Service
public class ImageSearchService {

    @Autowired
    private BaiduImageFeign baiduImageFeign;

    public Object getAllMatchingImages(String keyword,
                                            int offset,
                                            int pageSize){
        List<Image> images = new ArrayList<Image>();
        try {
            Response response = baiduImageFeign.searchByKeyword(URLEncoder.encode(keyword, "utf-8"),offset,pageSize);
            Map<String, Collection<String>> headers = response.headers();
            Collection<String> cookies = headers.get("Set-Cookie");
            System.out.println(cookies);
            Map<String,String> dataMap = new HashMap<>(3);

            cookies.forEach(cookie->{
                dataMap.put(cookie.split("=")[0],cookie);
            });

            System.out.println(dataMap);

            StringBuilder stringBuilder = new StringBuilder();
            dataMap.forEach((key, value) -> {
                stringBuilder.append(value.split(";")[0]).append(";");
            });

            String json = baiduImageFeign.searchByKeywordWithCookies(keyword,offset,pageSize,stringBuilder.substring(0,stringBuilder.length() - 1));

            System.out.println(json);
            if (json != null && !"".equalsIgnoreCase(json)){
                JSONArray jsonArray = JSONObject.fromObject(json).getJSONArray("data");

                for (int i=0;i<jsonArray.size()-1;i++){
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    images.add(new Image(jsonObject.getString("bdImgnewsDate")
                            ,jsonObject.getString("fromPageTitle")
                            ,jsonObject.getString("fromPageTitleEnc")
                            ,jsonObject.getString("fromURL")
                            ,jsonObject.getString("fromURLHost")
                            ,jsonObject.getString("middleURL")
                            ,jsonObject.getString("thumbURL")
                            ,jsonObject.getString("type")
                            ,jsonObject.getInt("width")));
                }
            }

        }
        catch (Exception e){
            //
            e.printStackTrace();
        }

        return images;
    }
}
