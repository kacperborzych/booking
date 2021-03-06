package pl.training.backend.hotel.model;

import lombok.Data;
import pl.training.backend.security.entity.User;

import javax.persistence.*;
import java.util.Date;

@Table(name = "reservation")
@Entity
@Data
public class Reservation {


    @Id
    @GeneratedValue
    private Long idReservation;

    @Column(nullable = false)
    private Date startDate;
    @Column(nullable = false)
    private Date endDate;

    public Reservation(Date startDate, Date endDate) {

        this.startDate = startDate;
        this.endDate = endDate;
    }
}
