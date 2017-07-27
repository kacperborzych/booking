package pl.training.backend.hotel.controller;

import org.springframework.stereotype.Controller;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.hotel.service.HotelService;
import pl.training.backend.hotel.service.ReservationService;

@Controller
public class ReservationController {

    private Mapper mapper;
    private ReservationService reservationService;
    private UriBuilder uriBuilder;

    public ReservationController(Mapper mapper, ReservationService reservationService) {
        this.mapper = mapper;
        this.reservationService = reservationService;
    }
}
