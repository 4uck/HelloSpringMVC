package com.personal.learn.dao;

import com.google.common.reflect.TypeToken;
import com.personal.learn.models.Persistable;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

public abstract class PersistenceService<T extends Persistable> {
    protected final TypeToken<T> typeToken = new TypeToken<T>(getClass()) { };
    protected final Class<T> domainClass = (Class<T>) typeToken.getRawType();

    @Autowired
    protected BaseDAO<T> dao;

    @Transactional
    public void saveObject(T entity) {
        dao.saveOrUpdate(entity);
    }

    @Transactional
    public void deleteObject(T entity) {
        dao.delete(entity);
    }

    @Transactional
    public void deleteObject(String id) {
        deleteObject(findOne(id));
    }

    public T findOne(String id) {
        return dao.get(getCurrentType(), UUID.fromString(id));
    }

    public Class<T> getCurrentType() {
        return domainClass;
    }

    public List<T> findAll() {
        return dao.findAll(getCurrentType());
    }

    public List<T> pagination(int startFrom, int pageSize) {
        return dao.pagination(getCurrentType(), startFrom*pageSize, pageSize);
    }
}
