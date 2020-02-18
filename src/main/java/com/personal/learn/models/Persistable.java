package com.personal.learn.models;

import java.io.Serializable;
import java.util.UUID;

public interface Persistable extends Serializable {
    UUID getId();
}
