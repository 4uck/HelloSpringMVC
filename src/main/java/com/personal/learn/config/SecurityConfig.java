package com.personal.learn.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, jsr250Enabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        UserDetailsImpl anon = new UserDetailsImpl();
        anon.setUsername("anon");
        anon.setAdmin(false);

        http.exceptionHandling().authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.FORBIDDEN))
                .and().anonymous().principal(anon)
                .and().csrf().disable();
    }
}
