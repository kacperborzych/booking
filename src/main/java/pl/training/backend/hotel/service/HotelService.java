package pl.training.backend.hotel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.hotel.model.Hotel;
import pl.training.backend.hotel.service.repository.HotelRepository;
import pl.training.backend.security.entity.User;

import java.util.List;

@Service
public class HotelService {

    private HotelRepository hotelRepository;

    @Autowired
    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }



    public ResultPage<Hotel> getHotels(int pageNumber, int pageSize) {
        Page<Hotel> hotelPage = hotelRepository.findAll(new PageRequest(pageNumber, pageSize));
        return new ResultPage<>(hotelPage.getContent(), hotelPage.getNumber(), hotelPage.getTotalPages());
    }


    public List<Hotel> findHotelByName(String name){
        return hotelRepository.findByHotelNameLike(name);
    }

}
