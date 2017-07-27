package pl.training.backend.profiles.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.training.backend.profiles.entity.UserProfile;
import pl.training.backend.profiles.service.repository.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    UserProfileRepository userProfileRepository;

    public void addNewUserProfile(UserProfile userProfile){
        userProfileRepository.saveAndFlush(userProfile);
    }
}
