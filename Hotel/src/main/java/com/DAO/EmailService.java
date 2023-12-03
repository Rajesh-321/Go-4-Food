package com.DAO;



import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {


	@Autowired
	JavaMailSender javaMailSender;

	public void emailVerify(String toEmailid,String name,int tableNumber){

		//String otp = generateOtp();
		String subject = "Table Booking Confirmation";
		String body = "Dear  "+name+","+"\n"
				+"We are delighted to confirm that your table has been successfully booked at Go-4-Food and table number is "+ tableNumber+
				 "\n"+"Thank you for choosing Go-4-Food, and we look forward to serving you."+"\n\n"
				+"Sincerely,"+"\n"+"Go-4-Food";
				
						

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("gofoodeatme@gmail.com");
		mailMessage.setTo(toEmailid);
		mailMessage.setSubject(subject);
		mailMessage.setText(body);

		javaMailSender.send(mailMessage);

		

	}

	public void registerEmailSender(){
		String subject = "Registered Successfully";
		String body = "Hi " +"Best Regards,\n"
				+ "Go-4-Food Team";

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("gofoodeatme@gmail.com");
		mailMessage.setTo("bharathwajreddy7@gmail.com");
		mailMessage.setSubject(subject);
		mailMessage.setText(body);

		javaMailSender.send(mailMessage);

	}
	
	
	/*public void registerEmailSender(String toEmailID, HotelEntity hotelEntity){
		String subject = "Registered Successfully";
		String body = "Hi " + hotelEntity.getFirstName().toUpperCase() +  hotelEntity.getLastName().toUpperCase() +"!\n\n"
				+ "Thank you for registering !!\n\n" +
				"Best Regards,\n"
				+ "Go-4-Food Team";

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("gofoodeatme@gmail.com");
		mailMessage.setTo(toEmailID);
		mailMessage.setSubject(subject);
		mailMessage.setText(body);

		javaMailSender.send(mailMessage);

	}*/
	
//	public boolean sendEmail(User user){
//		Random random = new Random();
//		int otp = 100000 + random.nextInt(900000);			
//		LocalDateTime time = LocalDateTime.now().plusMinutes(2);
//
//	}
	public String forgot(String toEmailid){

		String otp = generateOtp();
		String subject = "One Time Password";
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("gofoodeatme@gmail.com");
		mailMessage.setTo(toEmailid);
		mailMessage.setSubject(subject);
		mailMessage.setText("Your OTP is:"+ otp);

		javaMailSender.send(mailMessage);

		return otp;

	}
	
	
	public String generateOtp() {
		UUID uuid = UUID.randomUUID();

		String uuidstring = uuid.toString();
		uuidstring = uuidstring.replace("-", "").toLowerCase();
		String otp = uuidstring.substring(0,6);

		return otp;
	}

}