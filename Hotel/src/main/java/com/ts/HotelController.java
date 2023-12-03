package com.ts;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.EmailService;
import com.DAO.HotelDao;
import com.model.HotelEntity;

@RestController
public class HotelController {
	
	@Autowired
	HotelDao hotelDao;
	
	@Autowired
	EmailService emailService;
	
	@PostMapping("registerCustomer")
	public String registerCustomer(@RequestBody HotelEntity hotelEntity){
		hotelDao.registerCustomer(hotelEntity);
		return "Customer Registered Succesfully";
	}
	@GetMapping("loginByEmail/{emailId},{password}")
	public HotelEntity loginByEmail(@PathVariable("emailId") String emailId,@PathVariable("password")String password){
		
		HotelEntity c = hotelDao.loginEmailCheck(emailId);
		if(c != null){
			BCryptPasswordEncoder bcpe = new BCryptPasswordEncoder();
			if(bcpe.matches(password, c.getPassword())){
				return c;
			}
		}
		return null;
	}
	//
	@PutMapping("passwordReset/{emailId},{password}")
	public HotelEntity userUpdate(@PathVariable("emailId") String emailId,@PathVariable("password") String password){
		return hotelDao.userUpdate(emailId, password);
	}
	
	
	@PostMapping("getEmailOtp/{emailId}")
	public ResponseEntity<Map<String, String>> EmailOtp(@PathVariable("emailId") String emailId) {
		Map <String, String> response = new HashMap<>();
		if(hotelDao.generateOTP(emailId)) {
			response.put("message", "OTP is Sent");
			return ResponseEntity.ok(response);
		}
		else {
			return null;
		}
		
	}
	
	@PutMapping("validateEmailOtp/{emailId}/{otp}")
	public ResponseEntity<Map<String, String>> validateEmailOtp(@PathVariable("emailId") String emailId, @PathVariable("otp") int otp) {
		Map <String, String> response = new HashMap<>();
		if(hotelDao.validateEmailOtp(emailId, otp)) {
			response.put("message", "OTP Verified");
			return ResponseEntity.ok(response);
		}
		else {
			return null;
		}
	}
	@GetMapping("sendEmails")
	public void sendEmail()
	{
		emailService.registerEmailSender();
	}
	
	@GetMapping("sendTableNumber/{email},{name},{tableNumber}")
	public void sendTableNumber(@PathVariable("email")String email,@PathVariable("name")String name,@PathVariable("tableNumber")int tableNumber){
		emailService.emailVerify(email, name, tableNumber);
	}
	
 
}
