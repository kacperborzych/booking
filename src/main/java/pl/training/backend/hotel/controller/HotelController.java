package pl.training.backend.hotel.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.model.ResultPage;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.hotel.dto.HotelDto;
import pl.training.backend.hotel.dto.HotelPageDto;
import pl.training.backend.hotel.model.Hotel;
import pl.training.backend.hotel.service.HotelService;

import java.net.URI;
import java.util.List;

@Api(description = "Hotel resource")
@RestController
public class HotelController {

    private Mapper mapper;
    private HotelService hotelService;
    private UriBuilder uriBuilder;

    public HotelController(Mapper mapper, HotelService hotelService) {
        this.mapper = mapper;
        this.hotelService = hotelService;
    }
    @RequestMapping(value = UriBuilder.PREFIX + "/hotels", method = RequestMethod.GET)
    public HotelPageDto getHotels(
            @RequestParam(required = false, defaultValue = "0", name = "pageNumber") int pageNumber,
            @RequestParam(required = false, defaultValue = "10", name = "pageSize") int pageSize){
        ResultPage<Hotel> resultPage = hotelService.getHotels(pageNumber,pageSize);
        List<HotelDto> hotelDtos = mapper.map(resultPage.getContent(),HotelDto.class);
        return new HotelPageDto(hotelDtos, resultPage.getPageNumber(), resultPage.getTotalPages());
    }



    @RequestMapping(value = UriBuilder.PREFIX + "/searchHotels", method = RequestMethod.GET)
    public List<HotelDto> findHotelByName(@RequestParam ("name") String name){
       List<HotelDto> listDto = mapper.map( hotelService.findHotelByName(name), HotelDto.class);
       return listDto;
    }
}
