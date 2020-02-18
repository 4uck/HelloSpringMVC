package com.personal.learn.dao;

import com.personal.learn.models.Persistable;
import org.hibernate.Session;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Component
public class BaseDAO <T extends Persistable> {

    @PersistenceContext
    EntityManager entityManager;

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
        return entityManager.unwrap(Session.class);
    }

    public List<T> findAll(Class clazz) {
        return (List<T>) entityManager.createQuery("SELECT t FROM " + clazz.getSimpleName() + " t ORDER BY id").getResultList();
    }

    public List<T> pagination(Class clazz, int from, int count) {
        return (List<T>) entityManager.createQuery("SELECT t FROM " + clazz.getSimpleName() + " t ORDER BY id").setFirstResult(from).setMaxResults(count).getResultList();
    }

    public void delete(T entity) {
        entityManager.remove(entityManager.contains(entity) ? entity : entityManager.merge(entity));
    }

    public T merge(T entity) {
        @SuppressWarnings("unchecked")
        T merge = (T) entityManager.merge(entity);
        return merge;
    }

    private boolean isNew(T entity) {
        return entity.getId() == null;
    }

    public void saveOrUpdate(T entity) {
        if (isNew(entity)) {
            entityManager.persist(entity);
        } else {
            entityManager.merge(entity);
        }
    }
}
