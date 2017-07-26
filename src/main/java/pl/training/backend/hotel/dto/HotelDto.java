package pl.training.backend.hotel.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "Hotel")
@Data
public class HotelDto {
    @ApiModelProperty(required = true)
    private String hotelName;
    @ApiModelProperty(required = true)
    private String adress;
}
