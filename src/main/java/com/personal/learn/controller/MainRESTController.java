package com.personal.learn.controller;

import com.personal.learn.models.Human;
import com.personal.learn.services.HumanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/humans")
public class MainRESTController {

    @Autowired
    private HumanService humanService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, String> save(@RequestBody Human human) {
        humanService.saveObject(human);
        Map<String, String> resp = new HashMap<String, String>() {
            {
                put("id", human.getId().toString());
            }
        };

        return resp;
    }

    @RequestMapping(value = "/remove/{id}", method = RequestMethod.GET)
    public void remove(@PathVariable("id") String id) {
        humanService.deleteObject(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Human> all() {
        return humanService.findAll();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Human find(@PathVariable("id") String id) {
        return humanService.findOne(id);
    }
}
