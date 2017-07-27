package pl.training.backend.hotel.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.training.backend.hotel.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {


}
