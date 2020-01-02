package com.personal.learn.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class MainRESTController {

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public String welcome() {
        return "Welcome to RestTemplate Example.";
    }
}
