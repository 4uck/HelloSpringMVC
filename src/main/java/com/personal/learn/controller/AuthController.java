package com.personal.learn.controller;

import com.personal.learn.config.UserDetailsImpl;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest/auth")
public class AuthController {

    private static final List<GrantedAuthority> SECRET_ROLES = new ArrayList<>();

    static {
        SECRET_ROLES.add(new SimpleGrantedAuthority("ROLE_ADMINISTRATOR"));
    }

    @RequestMapping(value = "/secretAuth", method = RequestMethod.GET)
    public Authentication secretAuth() {

        UserDetailsImpl admin = new UserDetailsImpl();
        admin.setAdmin(true);
        admin.setUsername("admin");

        Authentication authentication = new RememberMeAuthenticationToken("secretUser", admin, SECRET_ROLES);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return authentication;
    }

    @RequestMapping(value = "/getAuth", method = RequestMethod.GET)
    public Authentication getAuth() {
        return SecurityContextHolder.getContext().getAuthentication();
    }
}
