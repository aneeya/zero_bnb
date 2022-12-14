package com.service.zerobnb.web.host.domain;


import com.service.zerobnb.util.BaseTimeEntity;
import com.service.zerobnb.util.status.UserStatus;
import com.service.zerobnb.web.accommodation.domain.Accommodation;
import com.service.zerobnb.web.guest.domain.Guest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Host extends BaseTimeEntity {
    @Id
    @Column(name = "host_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guest_id")
    private Guest guest;

    private String profileImage;

    private String businessContact;

    private String companyRegistrationNumber;

    @Fetch(FetchMode.SUBSELECT)
    @OneToMany(mappedBy = "host")
    private List<Accommodation> accommodationList;
}
