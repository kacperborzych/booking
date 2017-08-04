package pl.training.backend.hotel.service.repository;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.training.backend.hotel.model.Hotel;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {



   List<Hotel> findByHotelNameLike(String hotelName);

   Hotel findById(Long id);

}

