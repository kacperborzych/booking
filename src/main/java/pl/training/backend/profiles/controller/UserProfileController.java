package pl.training.backend.profiles.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.training.backend.common.model.Mapper;
import pl.training.backend.common.web.UriBuilder;
import pl.training.backend.profiles.entity.UserProfile;
import pl.training.backend.profiles.service.UserProfileService;
import pl.training.backend.security.dto.UserDto;
import pl.training.backend.security.entity.User;
import pl.training.backend.security.service.UsersService;
import pl.training.backend.security.dto.UserDto;

import java.net.URI;

import static org.springframework.http.ResponseEntity.created;

@RequestMapping(value = UriBuilder.PREFIX + "/userProfile")
@RestController
public class UserProfileController {


    @Autowired
    UserProfileService userProfileService;
    @Autowired
    UsersService usersService;
    @Autowired
    Mapper mapper;

    private UriBuilder uriBuilder = new UriBuilder();

    @Transactional
    @ApiOperation(value = "Create new user")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity createUser(@ApiParam(name = "user") @RequestBody UserDto userDto) {
        User user = mapper.map(userDto, User.class);
        UserProfile userProfile = mapper.map(userDto.getUserProfileDto(), UserProfile.class);
        user.setUserProfile(userProfile);
        usersService.addUser(user);
        URI uri = uriBuilder.requestUriWithId(user.getId());
        return created(uri).build();
    }
}


