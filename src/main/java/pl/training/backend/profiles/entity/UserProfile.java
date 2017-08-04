package pl.training.backend.profiles.entity;

import lombok.Data;
import org.springframework.stereotype.Component;
import pl.training.backend.hotel.model.Reservation;

import javax.persistence.*;
import java.util.List;

@Table(name = "profiles")
@Component
@Entity
@Data
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column
    private String surname;
    @Column
    private String description;
    @OneToMany
    @JoinColumn
    private List<Reservation> reservationList;

    public UserProfile(String name, String surname, String description) {
        this.name = name;
        this.surname = surname;
        this.description = description;
    }

    public UserProfile() {
    }
}
