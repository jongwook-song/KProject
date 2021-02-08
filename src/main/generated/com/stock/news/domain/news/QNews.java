package com.stock.news.domain.news;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QNews is a Querydsl query type for News
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QNews extends EntityPathBase<News> {

    private static final long serialVersionUID = -1355588998L;

    public static final QNews news = new QNews("news");

    public final com.stock.news.domain.QBaseTimeEntity _super = new com.stock.news.domain.QBaseTimeEntity(this);

    public final StringPath company = createString("company");

    public final StringPath content = createString("content");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createddate = _super.createddate;

    public final StringPath date = createString("date");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath pictureurl = createString("pictureurl");

    public final StringPath title = createString("title");

    public final StringPath url = createString("url");

    public final NumberPath<Long> view = createNumber("view", Long.class);

    public QNews(String variable) {
        super(News.class, forVariable(variable));
    }

    public QNews(Path<? extends News> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNews(PathMetadata metadata) {
        super(News.class, metadata);
    }

}

