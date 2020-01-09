package com.personal.learn.dao;

import com.personal.learn.models.Human;
import com.personal.learn.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class HumanDao {
    public Human findById(UUID uuid) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Human.class, uuid);
    }

    public void save(Human human) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(human);
        tx1.commit();
        session.close();
    }

    public void update(Human human) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(human);
        tx1.commit();
        session.close();
    }

    public void delete(Human human) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(human);
        tx1.commit();
        session.close();
    }

    public List<Human> findAll() {
        return (List<Human>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From Human").list();
    }
}
