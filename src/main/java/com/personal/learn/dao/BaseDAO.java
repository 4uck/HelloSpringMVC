package com.personal.learn.dao;

import com.personal.learn.models.Persistable;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import javax.persistence.*;
import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class BaseDAO <T extends Persistable> {

//    @PersistenceContext(name = "examplePU")
//    EntityManager entityManager;

    EntityManagerFactory factory;

//    @Autowired
//    private SessionFactory sessionFactory;

    @PostConstruct
    public void init() {
        factory = Persistence.createEntityManagerFactory("examplePU");
    }

    public T get(Class<?> clazz, UUID id) {
        @SuppressWarnings("unchecked")
        T object = (T) getSession().get(clazz, id);
        return object;
    }

    public T get(String entityName, UUID id) {
        @SuppressWarnings("unchecked")
        T object = (T) getSession().get(entityName, id);
        return object;
    }

    @Transactional
    public Session getSession() {
        EntityManager entityManager = factory.createEntityManager();
        return entityManager.unwrap(Session.class);
    }

    public List<T> findAll(Class clazz) {
        EntityManager entityManager = factory.createEntityManager();
        return (List<T>) entityManager.createQuery("SELECT t FROM " + clazz.getSimpleName() + " t ORDER BY id").getResultList();
    }

    public List<T> pagination(Class clazz, int from, int count) {
        EntityManager entityManager = factory.createEntityManager();
        return (List<T>) entityManager.createQuery("SELECT t FROM " + clazz.getSimpleName() + " t ORDER BY id").setFirstResult(from).setMaxResults(count).getResultList();
    }

    public void delete(T entity) {
        EntityManager entityManager = factory.createEntityManager();
        entityManager.remove(entityManager.contains(entity) ? entity : entityManager.merge(entity));
    }

    public T merge(T entity) {
        @SuppressWarnings("unchecked")
        EntityManager entityManager = factory.createEntityManager();
        T merge = (T) entityManager.merge(entity);
        return merge;
    }

    private boolean isNew(T entity) {
        return entity.getId() == null;
    }

    public void saveOrUpdate(T entity) {
        EntityManager entityManager = factory.createEntityManager();
        if (isNew(entity)) {
            entityManager.persist(entity);
        } else {
            entityManager.merge(entity);
        }
    }
}
