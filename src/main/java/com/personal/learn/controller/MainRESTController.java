package com.personal.learn.controller;

import com.personal.learn.models.Human;
import com.personal.learn.services.HumanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
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
    @PreAuthorize("hasAuthority('ROLE_ADMINISTRATOR')")
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
    @PreAuthorize("hasAuthority('ROLE_ADMINISTRATOR')")
    public void remove(@PathVariable("id") String id) {
        humanService.deleteObject(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Human> all() {
        return humanService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Human> pagination(@RequestBody Map<String, Integer> params) {
        Integer startFrom = params.get("startFrom");
        Integer pageSize = params.get("pageSize");

        if (startFrom == null || pageSize == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "startFrom and pageSize must be not null");
        }

        return humanService.pagination(startFrom, pageSize);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    @PreAuthorize("hasAuthority('ROLE_ADMINISTRATOR')")
    public Human find(@PathVariable("id") String id) {
        return humanService.findOne(id);
    }
}
