package com.DAO;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.CustomerOtp;
import com.model.HotelEntity;
@Service
public class HotelDao{
	
	@Autowired
	HotelRepository hotelRepository;
	
	CustomerOtp customerOtp = new CustomerOtp();
	
	@Autowired
	EmailService emailService;
	
	@Autowired
	JavaMailSender javaMailSender;
	/*@Autowired
	TableBookingRepository tableBookingRepository;*/
	BCryptPasswordEncoder  enp;
	public void registerCustomer(HotelEntity hotelEntity) {
		enp = new BCryptPasswordEncoder() ;
		String bcryptpw = enp.encode(hotelEntity.getPassword());
		hotelEntity.setPassword(bcryptpw);
		hotelRepository.save(hotelEntity);
	}
	

	/* public void registerCustomer(HotelEntity hotelEntity) {
		 hotelRepository.save(hotelEntity);
		 
	 }*/

	public HotelEntity loginByEmail(String emailId, String password) {
		
		return hotelRepository.loginByEmail(emailId,password);
	}


	public HotelEntity loginEmailCheck(String emailId) {
		// TODO Auto-generated method stub
		
		return hotelRepository.loginEmailCheck(emailId);
	}
	//
	public HotelEntity userUpdate(String emailId,String password){
		HotelEntity hotelEntity = hotelRepository.loginEmailCheck(emailId);
		hotelEntity.setPassword(enp.encode(password));
		return hotelRepository.save(hotelEntity);
	}



	/*public void registerTableBooking(int id, String name, String emailId, Date date, int person) {
		// TODO Auto-generated method stub
		hotelRepository.registerTableBooking(id,name,emailId,date,person);
	}*/
	public boolean generateOTP(String emailId) {

		HotelEntity HotelEntity = hotelRepository.loginEmailCheck(emailId);
		if(HotelEntity != null){

			Random random = new Random();
			int otp = 100000 + random.nextInt(900000);			
			LocalDateTime time = LocalDateTime.now().plusMinutes(2);
			
			customerOtp.setEmailOtp(otp);
			customerOtp.setEmailOtpExpiryTime(time);
			
			SimpleMailMessage msg = new SimpleMailMessage();

			msg.setTo(emailId);
			msg.setSubject("One Time Password");
			msg.setText("your otp is : "+otp);
			
			javaMailSender.send(msg);
			return true;

		}
			return false;
		
	}
	
	public boolean validateEmailOtp(String emailId, int otp) {
		HotelEntity HotelEntity = hotelRepository.loginEmailCheck(emailId);
		if(HotelEntity != null) {
			if(customerOtp.getEmailOtp() == otp && customerOtp.getEmailOtpExpiryTime().isAfter(LocalDateTime.now())) {
				customerOtp.setEmailOtp(0);
				customerOtp.setEmailOtpExpiryTime(null);
				return true;
			}
		}
		return false;
	}
  
}