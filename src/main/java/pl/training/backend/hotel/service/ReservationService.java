package pl.training.backend.hotel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.training.backend.hotel.model.Hotel;
import pl.training.backend.hotel.model.Reservation;
import pl.training.backend.hotel.service.repository.HotelRepository;
import pl.training.backend.hotel.service.repository.ReservationRepository;

import java.util.List;

@Service
public class ReservationService {

    private ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }


    public void addReservations(Reservation reservation){
         reservationRepository.saveAndFlush(reservation);
    }


}

