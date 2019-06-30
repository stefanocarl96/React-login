package bts.api;

import org.springframework.web.bind.annotation.*;
import tech.bts.springreactlogin.data.User;

import javax.xml.ws.http.HTTPException;


@RestController
@RequestMapping("/api/user")
public class UserApi {

    @PostMapping("/login")
    public User Login(@RequestBody User user) throws Exception {

        if (user.getEmail().contains("@") && user.getPassword().length() >= 6) {
            return user;
        } else {
            return null;
        }
    }
}
