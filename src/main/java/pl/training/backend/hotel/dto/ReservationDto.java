package pl.training.backend.hotel.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import pl.training.backend.hotel.model.Hotel;
import pl.training.backend.security.entity.User;

import java.util.Date;

@ApiModel(value = "Reservation")
@Data
public class ReservationDto {

    @ApiModelProperty(required = true)
    private Hotel hotel;
    @ApiModelProperty(required = true)
    private User user;
    @ApiModelProperty(required = true)
    private Long idReservation;
    @ApiModelProperty(required = true)
    private Date startDate;
    @ApiModelProperty(required = true)
    private Date endDate;
}
