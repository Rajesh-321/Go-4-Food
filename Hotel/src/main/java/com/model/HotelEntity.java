package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class HotelEntity {
	@Id@GeneratedValue
	private int sno;
	private String firstName;
	private String lastName;
	private String gender;
	private long phone;
	private String emailId;
	private String password;
	
	
	public HotelEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public HotelEntity(int sno, String firstName, String lastName, String gender, long phone, String emailId,
			String password) {
		super();
		this.sno = sno;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.phone = phone;
		this.emailId = emailId;
		this.password = password;
	}



	public int getSno() {
		return sno;
	}
	
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public long getPhone() {
		return phone;
	}
	
	public void setPhone(long phone) {
		this.phone = phone;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}