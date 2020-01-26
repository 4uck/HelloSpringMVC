package com.personal.learn.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rest")
public class MainRESTController {

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> welcome() {
        Map<String, String> map = new HashMap<>();
        map.put("prefix", "hello");
        map.put("suffix", "world");

        return map;
    }
}
