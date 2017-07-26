package pl.training.backend.hotel.dto;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import pl.training.backend.security.dto.UserDto;
import java.util.List;


@ApiModel(value = "Hotel")
@Data
public class HotelPageDto {

    private List<HotelDto> hotels;
    private int pageNumber;
    private int totalPages;

    public HotelPageDto() {
    }

    public HotelPageDto(List<HotelDto> hotels, int pageNumber, int totalPages) {
        this.hotels = hotels;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
    }

}
