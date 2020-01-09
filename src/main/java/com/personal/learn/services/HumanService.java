package com.personal.learn.services;

import com.personal.learn.dao.HumanDao;
import com.personal.learn.models.Human;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class HumanService {

    @Autowired
    private HumanDao humanDao;

    private Human findHuman(UUID uuid) {
        return humanDao.findById(uuid);
    }

    public void savaHuman(Human human) {
        humanDao.save(human);
    }

    public void deleteHuman(Human human) {
        humanDao.delete(human);
    }

    public void updateHuman(Human human) {
        humanDao.update(human);
    }

    public List<Human> findAll() {
        return humanDao.findAll();
    }

    public Human findById(String uuid) {
        return humanDao.findById(UUID.fromString(uuid));
    }
}
