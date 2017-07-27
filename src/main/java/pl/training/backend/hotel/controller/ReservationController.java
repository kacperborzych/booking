package pl.training.backend.hotel.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.hotel.dto.ReservationDto;
import pl.training.backend.hotel.model.Hotel;
import pl.training.backend.hotel.model.Reservation;
import pl.training.backend.hotel.service.HotelService;
import pl.training.backend.hotel.service.ReservationService;
import pl.training.backend.security.entity.User;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@RestController
public class ReservationController {

    private Mapper mapper;
    private ReservationService reservationService;
    private UriBuilder uriBuilder;

    public ReservationController(Mapper mapper, ReservationService reservationService) {
        this.mapper = mapper;
        this.reservationService = reservationService;
    }

//    @RequestMapping(value = UriBuilder.PREFIX + "/reservation", method = RequestMethod.GET)
//    public Reservation addReservation(@RequestBody()Hotel hotel, User user, Date startDate, Date endDate){
//       ReservationDto reservationDtoList = mapper.map(reservationService.addReservations(hotel, user, startDate, endDate, ReservationDto.class));
//       return reservationDtoList;
//    }

    @RequestMapping(value = UriBuilder.PREFIX + "/reservation", method = RequestMethod.GET)
        public Reservation addReservation(@RequestBody ReservationDto reservationDto){          //czy tutaj nie(Reservation reservation?)
            Reservation reservation = mapper.map(reservationDto, Reservation.class);
            reservationService.addReservations(reservation);
            return reservation;
        }
}
