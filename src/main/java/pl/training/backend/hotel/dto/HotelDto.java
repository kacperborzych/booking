package pl.training.backend.hotel.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "Hotel")
@Data
public class HotelDto {
    private Long id;
    private String hotelName;
    private String adress;
}
