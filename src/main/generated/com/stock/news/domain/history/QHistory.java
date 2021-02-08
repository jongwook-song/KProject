package com.stock.news.domain.history;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QHistory is a Querydsl query type for History
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QHistory extends EntityPathBase<History> {

    private static final long serialVersionUID = 319575398L;

    public static final QHistory history = new QHistory("history");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath targetid = createString("targetid");

    public final StringPath userinfo = createString("userinfo");

    public QHistory(String variable) {
        super(History.class, forVariable(variable));
    }

    public QHistory(Path<? extends History> path) {
        super(path.getType(), path.getMetadata());
    }

    public QHistory(PathMetadata metadata) {
        super(History.class, metadata);
    }

}

