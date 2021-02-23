package com.stock.news.domain.history;

import com.stock.news.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity                     // 생성일 정보는 상속
public class History {//extends BaseTimeEntity{
    @Id
    private Long id; // pk
    private String userinfo; // 사용자 정보
    private String targetid; // News 객체 id  newspk와 동일한 값

    @Builder
    public History ( Long id, String userinfo, String targetid){
        this.id = id;
        this.userinfo = userinfo;
        this.targetid = targetid;
    }
}
