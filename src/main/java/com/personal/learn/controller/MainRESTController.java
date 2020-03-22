package com.personal.learn.controller;

import com.personal.learn.models.Human;
import com.personal.learn.services.HumanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest/humans")
public class MainRESTController {

    @Autowired
    private HumanService humanService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    public String save(@RequestBody Human human) {
//        humanService.saveObject(human);
//        return human.getId().toString();
        return "";
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Human> all() {
        return humanService.findAll();
//        return new ArrayList<>();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Human find(@PathVariable("id") String id) {
//        return humanService.findOne(id);
        return new Human();
    }
}
