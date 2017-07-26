package pl.training.backend.hotel.model;
import lombok.Data;
import javax.persistence.*;

@Table(name = "hotels")
@Entity
@Data
public class Hotel {

    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, name = "name")
    private String hotelName;
    @Column(nullable = false)
    private String adress;

    public Hotel(String hotelName, String adress) {
        this.hotelName = hotelName;
        this.adress = adress;
    }

    public Hotel() {
    }
}
