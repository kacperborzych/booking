package pl.training.backend.profiles.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.training.backend.profiles.entity.UserProfile;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long>{
}
